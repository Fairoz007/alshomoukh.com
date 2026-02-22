
import { Users, FileText, Newspaper, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500 mt-2">Welcome back to the admin panel.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: "Total Users", value: "1,234", icon: Users, color: "bg-blue-500" },
                    { label: "Published Pages", value: "15", icon: FileText, color: "bg-green-500" },
                    { label: "Blog Posts", value: "42", icon: Newspaper, color: "bg-purple-500" },
                    { label: "Upcoming Events", value: "8", icon: Calendar, color: "bg-orange-500" },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                        <div className={cn("p-4 rounded-lg text-white shadow-sm", stat.color)}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[400px]">
                    <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
                    <div className="text-slate-400 flex items-center justify-center h-full pb-10">
                        Chart Placeholder
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[400px]">
                    <h3 className="font-semibold text-lg mb-4">Latest Posts</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
                                <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
                                <div>
                                    <h4 className="font-medium text-slate-800">New School Year Guidelines</h4>
                                    <p className="text-xs text-slate-400">Published 2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
