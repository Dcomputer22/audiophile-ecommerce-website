import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Generate unique order number
function generateOrderNumber(): string {
  const date = new Date();
  const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${dateStr}-${random}`;
}

// Create new order
export const createOrder = mutation({
  args: {
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      zipCode: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    payment: v.object({
      method: v.union(v.literal("e-money"), v.literal("cash")),
      eMoneyNumber: v.optional(v.string()),
      eMoneyPin: v.optional(v.string()),
    }),
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      slug: v.string(),
      price: v.number(),
      quantity: v.number(),
      image: v.string(),
      category: v.string(),
    })),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      vat: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const orderNumber = generateOrderNumber();
    
    const orderId = await ctx.db.insert("orders", {
      orderNumber,
      status: "pending",
      customer: args.customer,
      shipping: args.shipping,
      payment: args.payment,
      items: args.items,
      totals: args.totals,
      emailSent: false,
    });
    
    return { orderId, orderNumber };
  },
});

// Get order by ID
export const getOrderById = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.orderId);
  },
});

// Mark email as sent
export const markEmailSent = mutation({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.orderId, { emailSent: true });
  },
});