import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import { v } from "convex/values";

async function getCurrentMember(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity?.email) {
    return null;
  }

  const email = identity.email;

  return await ctx.db
    .query("members")
    .withIndex("by_email", (q) => q.eq("email", email))
    .unique();
}

export const listForCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const member = await getCurrentMember(ctx);
    if (!member) {
      return [];
    }

    return await ctx.db
      .query("transactions")
      .withIndex("by_memberExternalId", (q) => q.eq("memberExternalId", member.externalId))
      .take(100);
  },
});

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("transactions").order("desc").take(100);
  },
});

export const listForMember = query({
  args: { memberExternalId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("transactions")
      .withIndex("by_memberExternalId", (q) => q.eq("memberExternalId", args.memberExternalId))
      .take(100);
  },
});

async function getActor(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity?.email) {
    return null;
  }

  const email = identity.email;

  return await ctx.db
    .query("members")
    .withIndex("by_email", (q) => q.eq("email", email))
    .unique();
}

export const recordDeposit = mutation({
  args: {
    memberExternalId: v.string(),
    amount: v.number(),
    note: v.string(),
    kind: v.union(v.literal("mandatory"), v.literal("voluntary")),
  },
  handler: async (ctx, args) => {
    const actor = await getActor(ctx);
    if (!actor || (actor.role !== "loan_officer" && actor.role !== "admin")) {
      throw new Error("Unauthorized");
    }

    const member = await ctx.db
      .query("members")
      .withIndex("by_externalId", (q) => q.eq("externalId", args.memberExternalId))
      .unique();

    if (!member) {
      throw new Error("Member not found");
    }

    const now = new Date().toISOString();
    const externalId = `txn_${Date.now()}`;

    await ctx.db.insert("transactions", {
      externalId,
      memberExternalId: member.externalId,
      title: args.note,
      type: "deposit",
      amount: args.amount,
      date: now,
      reference: `DEP-${Date.now()}`,
    });

    await ctx.db.insert("contributions", {
      externalId: `contrib_${Date.now()}`,
      memberExternalId: member.externalId,
      amount: args.amount,
      type: args.kind,
      date: now,
    });

    await ctx.db.patch(member._id, {
      savings_balance: member.savings_balance + args.amount,
      monthly_savings: member.monthly_savings + args.amount,
      mandatory_actual: args.kind === "mandatory" ? member.mandatory_actual + args.amount : member.mandatory_actual,
      voluntary_savings: args.kind === "voluntary" ? member.voluntary_savings + args.amount : member.voluntary_savings,
    });

    await ctx.db.insert("auditLogs", {
      externalId: `audit_${Date.now()}`,
      time: now,
      user: actor.name,
      action: `Recorded ${args.kind} deposit for ${member.name}`,
      ip: "system",
      level: "info",
    });

    return { ok: true, externalId };
  },
});
