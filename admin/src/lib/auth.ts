
import { betterAuth } from "better-auth";
import { convexAdapter } from "@convex-dev/better-auth";
import { convex } from "@convex/_generated/server";

export const auth = betterAuth({
    database: convexAdapter(convex),
    emailAndPassword: {
        enabled: true,
    },
});
