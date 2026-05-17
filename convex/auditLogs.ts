import { query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("auditLogs").order("desc").take(100);
  },
});
