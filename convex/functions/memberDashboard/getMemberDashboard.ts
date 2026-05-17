import { query, type QueryCtx } from "../../_generated/server";
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

export const getMemberDashboard = query({
  args: { memberExternalId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const currentMember = await getCurrentMember(ctx);
    const memberExternalId = currentMember?.externalId ?? args.memberExternalId;

    if (!memberExternalId) {
      return null;
    }

    const member =
      currentMember ??
      (await ctx.db
        .query("members")
        .withIndex("by_externalId", (q) => q.eq("externalId", memberExternalId))
        .unique());

    if (!member) {
      return null;
    }

    const loans = await ctx.db
      .query("loans")
      .withIndex("by_memberExternalId", (q) => q.eq("memberExternalId", memberExternalId))
      .collect();

    const transactions = await ctx.db
      .query("transactions")
      .withIndex("by_memberExternalId", (q) => q.eq("memberExternalId", memberExternalId))
      .collect();

    const settings = await ctx.db
      .query("settings")
      .withIndex("by_externalId", (q) => q.eq("externalId", "global"))
      .unique();

    return { member, loans, transactions, settings };
  },
});
