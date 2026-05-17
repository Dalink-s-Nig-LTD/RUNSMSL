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

export const currentMemberDashboard = query({
  args: {},
  handler: async (ctx) => {
    const member = await getCurrentMember(ctx);
    if (!member) {
      return null;
    }

    const loans = await ctx.db
      .query("loans")
      .withIndex("by_memberExternalId", (q) => q.eq("memberExternalId", member.externalId))
      .collect();

    const transactions = await ctx.db
      .query("transactions")
      .withIndex("by_memberExternalId", (q) => q.eq("memberExternalId", member.externalId))
      .collect();

    const settings = await ctx.db
      .query("settings")
      .withIndex("by_externalId", (q) => q.eq("externalId", "global"))
      .unique();

    return { member, loans, transactions, settings };
  },
});

export const listForCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const member = await getCurrentMember(ctx);
    if (!member) {
      return [];
    }

    return await ctx.db
      .query("loans")
      .withIndex("by_memberExternalId", (q) => q.eq("memberExternalId", member.externalId))
      .collect();
  },
});

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("loans").order("desc").take(100);
  },
});

export const getByExternalId = query({
  args: { externalId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("loans")
      .withIndex("by_externalId", (q) => q.eq("externalId", args.externalId))
      .unique();
  },
});

export const overdue = query({
  args: {},
  handler: async (ctx) => {
    const loans = await ctx.db.query("loans").take(100);
    return loans.filter((loan) => loan.status === "active" && loan.next_emi_date !== null);
  },
});

export const reviewLoan = mutation({
  args: {
    externalId: v.string(),
    status: v.union(v.literal("active"), v.literal("rejected")),
  },
  handler: async (ctx, args) => {
    const reviewer = await getCurrentMember(ctx);
    if (!reviewer || (reviewer.role !== "admin" && reviewer.role !== "loan_officer")) {
      throw new Error("Unauthorized");
    }

    const loan = await ctx.db
      .query("loans")
      .withIndex("by_externalId", (q) => q.eq("externalId", args.externalId))
      .unique();

    if (!loan) {
      throw new Error("Loan not found");
    }

    if (loan.status !== "pending") {
      throw new Error("Only pending loans can be reviewed");
    }

    const reviewedAt = new Date().toISOString();
    const nextEmiDate = args.status === "active" ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : null;

    await ctx.db.patch(loan._id, {
      status: args.status,
      approved_by: args.status === "active" ? reviewer.name : null,
      approved_at: reviewedAt,
      next_emi_date: nextEmiDate,
    });

    await ctx.db.insert("auditLogs", {
      externalId: `audit_${Date.now()}`,
      time: reviewedAt,
      user: reviewer.name,
      action: `${args.status === "active" ? "Approved" : "Rejected"} loan ${loan.externalId}`,
      ip: "system",
      level: args.status === "active" ? "info" : "warning",
    });

    return { ok: true };
  },
});
