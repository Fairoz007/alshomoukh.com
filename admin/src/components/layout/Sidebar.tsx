
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    FileText,
    Newspaper,
    Calendar,
    Users,
    Settings,
    Menu,
    ChevronLeft
} from "lucide-react";
import { useState } from "react";

const navItems = [
    { label: "Dashboard", href: "/", icon: LayoutDashboard },
    { label: "Pages", href: "/pages", icon: FileText },
    { label: "News / Blog", href: "/news", icon: Newspaper },
    { label: "Events", href: "/events", icon: Calendar },
    { label: "Users", href: "/users", icon: Users },
    { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={cn(
            "bg-slate-900 text-white transition-all duration-300 flex flex-col shadow-xl z-20",
            collapsed ? "w-16" : "w-64"
        )}>
            <div className="flex items-center justify-between p-4 h-16 border-b border-slate-800">
                {!collapsed && <span className="font-bold text-xl tracking-tight">AdminPanel</span>}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
                    aria-label="Toggle Sidebar"
                >
                    {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <nav className="flex-1 py-6 space-y-1">
                {navItems.map((item) => {
                    // Check if pathname starts with href, but handle root explicitly
                    const isActive = item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-4 py-3 transition-all duration-200 group relative",
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white",
                                collapsed ? "justify-center" : "gap-3 mx-2 rounded-lg"
                            )}
                        >
                            <item.icon size={20} className={cn(isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                            {!collapsed && <span className="font-medium">{item.label}</span>}

                            {collapsed && (
                                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                                    {item.label}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                {!collapsed && (
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">
                            JD
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">John Doe</span>
                            <span className="text-xs text-slate-500">Admin</span>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}
