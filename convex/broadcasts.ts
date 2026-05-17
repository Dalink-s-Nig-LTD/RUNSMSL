import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import { v } from "convex/values";

async function getCurrentMember(ctx: QueryCtx | MutationCtx) {
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

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("broadcasts").order("desc").take(100);
  },
});

export const send = mutation({
  args: {
    title: v.string(),
    body: v.string(),
    audience: v.string(),
  },
  handler: async (ctx, args) => {
    const actor = await getCurrentMember(ctx);
    if (!actor || actor.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const sentAt = new Date().toISOString();
    const externalId = `broadcast_${Date.now()}`;

    await ctx.db.insert("broadcasts", {
      externalId,
      title: args.title,
      body: args.body,
      audience: args.audience,
      sent_at: sentAt,
      sent_by: actor.name,
    });

    await ctx.db.insert("auditLogs", {
      externalId: `audit_${Date.now()}`,
      time: sentAt,
      user: actor.name,
      action: `Sent broadcast ${args.title}`,
      ip: "system",
      level: "info",
    });

    return { ok: true, externalId };
  },
});
