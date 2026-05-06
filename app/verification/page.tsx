"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { VerificationStats } from "@/components/verification-stats";
import { VerificationTable } from "@/components/verification-table";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function VerificationPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#FCFBF7]">
        <DashboardHeader />
        <main className="flex-1 overflow-auto px-4 md:px-8 pb-8">
          <div className="max-w-[1400px] mx-auto space-y-6 pt-4">
            {/* Stats Row */}
            <VerificationStats />

            {/* Main Table */}
            <VerificationTable />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
