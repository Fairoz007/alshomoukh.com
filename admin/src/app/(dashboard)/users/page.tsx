
"use client";

import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

export default function UsersPage() {
    // Use Convex query to fetch users
    const users = useQuery(api.users.getAll);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Users</h2>
                    <p className="text-muted-foreground">
                        Manage user access and roles.
                    </p>
                </div>
            </div>

            {/* Use the DataTable component */}
            {users === undefined ? (
                <div className="flex h-24 items-center justify-center">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                </div>
            ) : (
                <DataTable columns={columns} data={users} searchKey="email" />
            )}
        </div>
    );
}
