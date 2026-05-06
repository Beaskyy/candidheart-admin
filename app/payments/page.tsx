"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { PaymentStats } from "@/components/payment-stats";
import { RevenueSnapshot } from "@/components/revenue-snapshot";
import { TransactionTable } from "@/components/transaction-table";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function PaymentsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#FCFBF7]">
        <DashboardHeader />
        <main className="flex-1 overflow-auto px-4 md:px-8 pb-8">
          <div className="max-w-[1400px] mx-auto space-y-6 pt-4">
            {/* Stats Row */}
            <PaymentStats />

            {/* Revenue Snapshot */}
            <RevenueSnapshot />

            {/* Transaction Table */}
            <TransactionTable />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
