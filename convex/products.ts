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
    return await ctx.db.query("products").order("desc").take(100);
  },
});

export const getById = query({
  args: { externalId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_externalId", (q) => q.eq("externalId", args.externalId))
      .unique();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    category: v.string(),
    price: v.number(),
    stock_quantity: v.number(),
    is_active: v.boolean(),
    image_url: v.string(),
  },
  handler: async (ctx, args) => {
    const actor = await getCurrentMember(ctx);
    if (!actor || actor.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const externalId = `product_${Date.now()}`;

    await ctx.db.insert("products", {
      externalId,
      name: args.name,
      description: args.description,
      category: args.category,
      price: args.price,
      stock_quantity: args.stock_quantity,
      is_active: args.is_active,
      image_url: args.image_url,
    });

    await ctx.db.insert("auditLogs", {
      externalId: `audit_${Date.now()}`,
      time: new Date().toISOString(),
      user: actor.name,
      action: `Created product ${args.name}`,
      ip: "system",
      level: "info",
    });

    return { ok: true, externalId };
  },
});

export const update = mutation({
  args: {
    externalId: v.string(),
    name: v.string(),
    description: v.string(),
    category: v.string(),
    price: v.number(),
    stock_quantity: v.number(),
    is_active: v.boolean(),
    image_url: v.string(),
  },
  handler: async (ctx, args) => {
    const actor = await getCurrentMember(ctx);
    if (!actor || actor.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const product = await ctx.db
      .query("products")
      .withIndex("by_externalId", (q) => q.eq("externalId", args.externalId))
      .unique();

    if (!product) {
      throw new Error("Product not found");
    }

    await ctx.db.patch(product._id, {
      name: args.name,
      description: args.description,
      category: args.category,
      price: args.price,
      stock_quantity: args.stock_quantity,
      is_active: args.is_active,
      image_url: args.image_url,
    });

    await ctx.db.insert("auditLogs", {
      externalId: `audit_${Date.now()}`,
      time: new Date().toISOString(),
      user: actor.name,
      action: `Updated product ${args.name}`,
      ip: "system",
      level: "info",
    });

    return { ok: true };
  },
});

export const remove = mutation({
  args: { externalId: v.string() },
  handler: async (ctx, args) => {
    const actor = await getCurrentMember(ctx);
    if (!actor || actor.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const product = await ctx.db
      .query("products")
      .withIndex("by_externalId", (q) => q.eq("externalId", args.externalId))
      .unique();

    if (!product) {
      throw new Error("Product not found");
    }

    await ctx.db.delete(product._id);

    await ctx.db.insert("auditLogs", {
      externalId: `audit_${Date.now()}`,
      time: new Date().toISOString(),
      user: actor.name,
      action: `Deleted product ${product.name}`,
      ip: "system",
      level: "warning",
    });

    return { ok: true };
  },
});
