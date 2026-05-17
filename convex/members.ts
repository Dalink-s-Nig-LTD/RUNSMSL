import { query } from "./_generated/server";
import { v } from "convex/values";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity?.email) {
      return null;
    }

    const email = identity.email;

    return await ctx.db
      .query("members")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("members").order("desc").take(100);
  },
});

export const listByRole = query({
  args: { role: v.union(v.literal("member"), v.literal("loan_officer"), v.literal("admin"), v.literal("treasurer")) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("members")
      .withIndex("by_role", (q) => q.eq("role", args.role))
      .take(100);
  },
});
