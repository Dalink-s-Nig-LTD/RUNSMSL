import { query } from "./_generated/server";
import { v } from "convex/values";

export const listForMember = query({
  args: { memberExternalId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("contributions")
      .withIndex("by_memberExternalId", (q) => q.eq("memberExternalId", args.memberExternalId))
      .collect();
  },
});
