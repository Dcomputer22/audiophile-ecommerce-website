import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    orderNumber: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("shipped"),
      v.literal("delivered"),
    ),

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

    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        slug: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
        category: v.string(),
      }),
    ),

    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      vat: v.number(),
      grandTotal: v.number(),
    }),

    emailSent: v.boolean(),
  })
    .index("by_order_number", ["orderNumber"])
    .index("by_email", ["customer.email"]),
});
