import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("applications").collect();
  },
});

export const pendingCount = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("applications")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .collect();
  },
});

export const setStatus = mutation({
  args: {
    externalId: v.string(),
    status: v.union(v.literal("pending"), v.literal("approved"), v.literal("rejected")),
  },
  handler: async (ctx, args) => {
    const applications = await ctx.db.query("applications").collect();
    const application = applications.find((app) => app.externalId === args.externalId);

    if (!application) {
      return null;
    }

    await ctx.db.patch(application._id, { status: args.status });
    return application._id;
  },
});
