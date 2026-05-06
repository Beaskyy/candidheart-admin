"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { PushTokenHealth } from "@/components/push-token-health";
import { SystemConfiguration } from "@/components/system-configuration";
import { DeviceRegistry } from "@/components/device-registry";
import { ConductSectionManager } from "@/components/conduct-section-manager";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DevicesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#FCFBF7]">
        <DashboardHeader />
        <main className="flex-1 overflow-auto px-4 md:px-8 pb-8">
          <div className="max-w-[1400px] mx-auto pt-4 space-y-6">
            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PushTokenHealth />
              <SystemConfiguration />
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6">
              <DeviceRegistry />
              <ConductSectionManager />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
