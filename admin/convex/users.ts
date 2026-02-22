
import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Get all users
export const getAll = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("users").collect();
    },
});

// Get user by ID
export const getById = query({
    args: { id: v.id("users") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

// Create user (Admin/System only)
export const create = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        role: v.union(v.literal("admin"), v.literal("editor"), v.literal("user")),
        status: v.union(v.literal("active"), v.literal("disabled")),
    },
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query("users")
            .withIndex("by_email", (q) => q.eq("email", args.email))
            .first();

        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        const userId = await ctx.db.insert("users", {
            name: args.name,
            email: args.email,
            role: args.role,
            status: args.status,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });

        return userId;
    },
});

// Update user role or status
export const update = mutation({
    args: {
        id: v.id("users"),
        role: v.optional(v.union(v.literal("admin"), v.literal("editor"), v.literal("user"))),
        status: v.optional(v.union(v.literal("active"), v.literal("disabled"))),
    },
    handler: async (ctx, args) => {
        const { id, role, status } = args;
        await ctx.db.patch(id, {
            ...(role ? { role } : {}),
            ...(status ? { status } : {}),
            updatedAt: Date.now(),
        });
    },
});

// Delete user
export const remove = mutation({
    args: { id: v.id("users") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});
