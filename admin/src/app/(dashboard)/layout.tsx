
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-slate-50">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8">
                    <div className="mx-auto max-w-7xl animate-in fade-in duration-500 slide-in-from-bottom-2">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
