"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { StatsCards } from "@/components/stats-cards";
import { UserGrowthChart } from "@/components/user-growth-chart";
import { RevenueChart } from "@/components/revenue-chart";
import { RecentUsersTable } from "@/components/recent-users-table";
import { ActivityFeed } from "@/components/activity-feed";
import { VerificationChart } from "@/components/verification-chart";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-[1400px] space-y-6 p-6">
            {/* Stats Cards */}
            <StatsCards />

            {/* Charts Row */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <UserGrowthChart />
              <RevenueChart />
            </div>

            {/* Table + Sidebar Row */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RecentUsersTable />
              </div>
              <div className="space-y-6">
                <VerificationChart />
                <ActivityFeed />
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
