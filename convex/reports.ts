import { query } from "./_generated/server";

export const monthlyDisbursement = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("monthlyDisbursements").collect();
  },
});
