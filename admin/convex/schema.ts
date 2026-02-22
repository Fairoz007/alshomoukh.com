
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Users (for Authentication & Role Management)
    users: defineTable({
        name: v.optional(v.string()),
        email: v.optional(v.string()),
        emailVerified: v.optional(v.string()),
        image: v.optional(v.string()),
        role: v.union(v.literal("admin"), v.literal("editor"), v.literal("user")),
        status: v.union(v.literal("active"), v.literal("disabled")),
        createdAt: v.number(),
        updatedAt: v.number(),
    })
        .index("by_email", ["email"])
        .index("by_role", ["role"]),

    // Auth: Sessions
    sessions: defineTable({
        userId: v.id("users"),
        sessionToken: v.string(),
        expires: v.number(),
    })
        .index("by_sessionToken", ["sessionToken"])
        .index("by_userId", ["userId"]), // Optimization for fetching sessions by user

    // Auth: Accounts (OAuth)
    accounts: defineTable({
        userId: v.id("users"),
        type: v.string(),
        provider: v.string(),
        providerAccountId: v.string(),
        refresh_token: v.optional(v.string()),
        access_token: v.optional(v.string()),
        expires_at: v.optional(v.number()),
        token_type: v.optional(v.string()),
        scope: v.optional(v.string()),
        id_token: v.optional(v.string()),
        session_state: v.optional(v.string()),
    })
        .index("by_userId", ["userId"])
        .index("by_provider_accountId", ["provider", "providerAccountId"]),

    // Auth: Verification Tokens
    verificationTokens: defineTable({
        identifier: v.string(),
        token: v.string(),
        expires: v.number(),
    })
        .index("by_identifier_token", ["identifier", "token"]),

    // Pages Management
    pages: defineTable({
        title: v.string(),
        slug: v.string(),
        description: v.optional(v.string()), // SEO Description
        content: v.string(), // Rich text HTML/JSON
        published: v.boolean(),
        authorId: v.id("users"),
        seo: v.optional(v.object({
            title: v.optional(v.string()),
            description: v.optional(v.string()),
            keywords: v.optional(v.array(v.string())),
        })),
        createdAt: v.number(),
        updatedAt: v.number(),
    })
        .index("by_slug", ["slug"]),

    // News / Blog Posts
    posts: defineTable({
        title: v.string(),
        slug: v.string(),
        excerpt: v.optional(v.string()),
        content: v.string(),
        featuredImage: v.optional(v.string()), // URL or Media ID
        category: v.optional(v.string()),
        tags: v.optional(v.array(v.string())),
        status: v.union(v.literal("draft"), v.literal("published"), v.literal("archived")),
        authorId: v.id("users"),
        publishedAt: v.optional(v.number()),
        createdAt: v.number(),
        updatedAt: v.number(),
    })
        .index("by_slug", ["slug"])
        .index("by_status", ["status"])
        .index("by_category", ["category"]),

    // Events
    events: defineTable({
        title: v.string(),
        slug: v.string(),
        description: v.string(),
        startDate: v.number(),
        endDate: v.optional(v.number()),
        location: v.optional(v.string()),
        image: v.optional(v.string()),
        status: v.union(v.literal("draft"), v.literal("published")),
        authorId: v.id("users"),
        createdAt: v.number(),
        updatedAt: v.number(),
    })
        .index("by_slug", ["slug"])
        .index("by_startDate", ["startDate"]),

    // Media Library
    media: defineTable({
        filename: v.string(),
        url: v.string(),
        type: v.string(), // mime type
        size: v.number(),
        alt: v.optional(v.string()),
        uploadedBy: v.id("users"),
        createdAt: v.number(),
    })
        .index("by_type", ["type"]),
});
