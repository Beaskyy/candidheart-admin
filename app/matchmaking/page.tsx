"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { MatchmakingStatsFilters } from "@/components/matchmaking-stats-filters";
import { MatchmakingUsersList } from "@/components/matchmaking-users-list";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MatchmakingPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#FCFBF7]">
        <DashboardHeader />
        <main className="flex-1 overflow-auto px-4 md:px-8 pb-8">
          <div className="max-w-[1400px] mx-auto space-y-6 pt-4">
            {/* Stats and Filters */}
            <MatchmakingStatsFilters />

            {/* Users List */}
            <MatchmakingUsersList />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
