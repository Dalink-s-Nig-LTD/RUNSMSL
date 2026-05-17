import { mutation } from "../../_generated/server";
import { v } from "convex/values";

export const submitApplication = mutation({
  args: {
    memberExternalId: v.optional(v.string()),
    amount: v.number(),
    purpose: v.string(),
    repaymentMonths: v.number(),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const currentMember = identity?.email
      ? await ctx.db
          .query("members")
          .withIndex("by_email", (q) => q.eq("email", identity.email!))
          .unique()
      : null;

    const memberExternalId = currentMember?.externalId ?? args.memberExternalId;

    if (!memberExternalId) {
      throw new Error("Not authenticated");
    }

    const member =
      currentMember ??
      (await ctx.db
        .query("members")
        .withIndex("by_externalId", (q) => q.eq("externalId", memberExternalId))
        .unique());

    if (!member) {
      throw new Error("Unauthorized");
    }

    const product = await ctx.db
      .query("products")
      .withIndex("by_category", (q) => q.eq("category", "Electronics"))
      .take(1);

    const loan = {
      externalId: `loan_${Date.now()}`,
      memberExternalId,
      member_name: member.name,
      member_email: member.email,
      productExternalId: product[0]?.externalId ?? "custom",
      product_name: product[0]?.name ?? "Custom Loan",
      product_image_url: product[0]?.image_url ?? "",
      total_loan_amount: args.amount,
      total_repayment_amount: Math.round(args.amount * 1.05),
      monthly_installment: Math.round((args.amount * 1.05) / args.repaymentMonths),
      repayment_duration_months: args.repaymentMonths,
      interest_rate: 5,
      purpose: args.purpose,
      status: "pending" as const,
      amount_paid: 0,
      created_at: new Date().toISOString(),
      approved_by: null,
      approved_at: null,
      next_emi_date: null,
    };

    await ctx.db.insert("loans", loan);

    return loan;
  },
});
