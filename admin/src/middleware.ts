
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Check for authentication token 
    // For Better Auth, check session cookie or use auth.api.getSession
    // This is a simplified check. Use better-auth specific middleware adapter for production.

    const sessionToken = request.cookies.get("better-auth.session_token");
    const isAuthPage = request.nextUrl.pathname.startsWith("/login");

    if (!sessionToken && !isAuthPage) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (sessionToken && isAuthPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
