import { query } from "./_generated/server";

export const current = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("settings")
      .withIndex("by_externalId", (q) => q.eq("externalId", "global"))
      .unique();
  },
});
