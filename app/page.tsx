"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { StatsCards } from "@/components/stats-cards";
import { SignupsChart } from "@/components/signups-chart";
import { OnboardingChart } from "@/components/onboarding-chart";
import { MessageVolumeChart } from "@/components/message-volume-chart";
import { NeedsAttention } from "@/components/needs-attention";
import { RecentActivity } from "@/components/recent-activity";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#FCFBF7]">
        <DashboardHeader />
        <main className="flex-1 overflow-auto px-4 md:px-8 pb-8">
          <div className="max-w-[1400px] mx-auto space-y-5">
            {/* Stats Cards */}
            <StatsCards />

            {/* Charts Row - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SignupsChart />
              <OnboardingChart />
              <MessageVolumeChart />
            </div>

            {/* Bottom Row - Needs attention + Recent activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <NeedsAttention />
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

