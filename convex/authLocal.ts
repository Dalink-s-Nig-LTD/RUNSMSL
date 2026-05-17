import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import { v } from "convex/values";
import { derivePasswordHash, verifyPassword } from "./authHelpers";

export const signup = mutation({
  args: { email: v.string(), password: v.string(), name: v.string(), phone: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("members")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
    if (existing) throw new Error("Email already registered");

    const password_hash = await derivePasswordHash(args.password);
    const externalId = `member_${Date.now()}`;

    await ctx.db.insert("members", {
      externalId,
      name: args.name,
      email: args.email,
      password_hash,
      failedLoginAttempts: 0,
      lockedUntil: null,
      staffId: null,
      role: "member",
      status: "active",
      savings_balance: 0,
      voluntary_savings: 0,
      monthly_savings: 0,
      interest_earned_ytd: 0,
      mandatory_target: 0,
      mandatory_actual: 0,
    });

    return { ok: true, externalId };
  },
});

export const login = mutation({
  args: { email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    const member = await ctx.db
      .query("members")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
    // Generic invalid response to avoid user enumeration
    if (!member) throw new Error("Invalid credentials");

    // Check lockout
    const now = new Date();
    if (member.lockedUntil && new Date(member.lockedUntil) > now) {
      throw new Error("Account locked due to too many failed login attempts. Try again later.");
    }

    const ok = await verifyPassword(args.password, member.password_hash ?? "");
    if (!ok) {
      const attempts = (member.failedLoginAttempts ?? 0) + 1;
      const MAX_FAILED = 5;
      const LOCK_MINUTES = 15;
      const lockedUntil = attempts >= MAX_FAILED ? new Date(Date.now() + LOCK_MINUTES * 60 * 1000).toISOString() : null;
      await ctx.db.patch(member._id, { failedLoginAttempts: attempts, lockedUntil });
      throw new Error("Invalid credentials");
    }

    // Successful login: reset counters
    await ctx.db.patch(member._id, { failedLoginAttempts: 0, lockedUntil: null });

    const token = crypto.getRandomValues(new Uint8Array(24));
    const tokenHex = Array.from(token).map((b) => b.toString(16).padStart(2, "0")).join("");
    const externalId = `session_${Date.now()}`;
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString();

    await ctx.db.insert("sessions", { externalId, token: tokenHex, memberExternalId: member.externalId, expiresAt });

    return { ok: true, token: tokenHex, expiresAt };
  },
});

export const logout = mutation({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .unique();
    if (session) await ctx.db.delete(session._id);
    return { ok: true };
  },
});

export const currentByToken = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .unique();
    if (!session) return null;
    if (new Date(session.expiresAt) < new Date()) return null;

    const member = await ctx.db
      .query("members")
      .withIndex("by_externalId", (q) => q.eq("externalId", session.memberExternalId))
      .unique();

    return member;
  },
});

export const requestPasswordReset = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const member = await ctx.db
      .query("members")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    // Always return ok to avoid enumeration
    if (!member) return { ok: true };

    const token = crypto.getRandomValues(new Uint8Array(24));
    const tokenHex = Array.from(token).map((b) => b.toString(16).padStart(2, "0")).join("");
    const externalId = `pr_${Date.now()}`;
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60).toISOString(); // 1 hour

    await ctx.db.insert("password_resets", { externalId, token: tokenHex, memberExternalId: member.externalId, expiresAt });

    // In production you'd email this token. For now return it so UI/testing can use it.
    return { ok: true, token: tokenHex };
  },
});

export const resetPassword = mutation({
  args: { token: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    const reset = await ctx.db
      .query("password_resets")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .unique();
    if (!reset) throw new Error("Invalid or expired token");
    if (new Date(reset.expiresAt) < new Date()) throw new Error("Invalid or expired token");

    const member = await ctx.db
      .query("members")
      .withIndex("by_externalId", (q) => q.eq("externalId", reset.memberExternalId))
      .unique();
    if (!member) throw new Error("Member not found");

    const password_hash = await derivePasswordHash(args.password);
    await ctx.db.patch(member._id, { password_hash, failedLoginAttempts: 0, lockedUntil: null });
    await ctx.db.delete(reset._id);

    return { ok: true };
  },
});
