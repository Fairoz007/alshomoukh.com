
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import { authClient } from "@/lib/auth-client"; // Hypothetical client

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock login or use better-auth client
        // await authClient.signIn.email({ email, password });
        console.log("Login attempt", { email, password });
        setTimeout(() => {
            setLoading(false);
            // Redirect logic managed by auth library or router
        }, 1000);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-sm space-y-6 bg-white p-8 shadow-xl rounded-2xl border border-slate-100">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Sign In</h1>
                    <p className="text-sm text-slate-500">Enter your credentials to access the admin panel</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                            Email
                        </label>
                        <Input
                            id="email"
                            placeholder="admin@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                Password
                            </label>
                            <Link href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button className="w-full" type="submit" disabled={loading}>
                        {loading ? "Signing in..." : "Sign In"}
                    </Button>
                </form>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">GitHub</Button>
                    <Button variant="outline">Google</Button>
                </div>

                <p className="text-center text-sm text-slate-500">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-semibold text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
