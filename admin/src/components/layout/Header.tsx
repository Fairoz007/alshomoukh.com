
"use client";

import { Bell, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-700">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-slate-200 mx-1"></div>

                <button className="flex items-center gap-2 hover:bg-slate-50 pl-2 pr-3 py-1.5 rounded-full transition-colors border border-transparent hover:border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <User size={16} />
                    </div>
                    <span className="text-sm font-medium text-slate-700 hidden sm:block">Profile</span>
                </button>
            </div>
        </header>
    );
}
