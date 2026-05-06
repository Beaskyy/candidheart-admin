"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { ChatStats } from "@/components/chat-stats";
import { ChatHealthMonitor } from "@/components/chat-health-monitor";
import { ConversationWatchlist } from "@/components/conversation-watchlist";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ChatPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#FCFBF7]">
        <DashboardHeader />
        <main className="flex-1 overflow-auto px-4 md:px-8 pb-8">
          <div className="max-w-[1400px] mx-auto space-y-6 pt-4">
            {/* Stats Row */}
            <ChatStats />

            {/* Health & Monitor Row */}
            <ChatHealthMonitor />

            {/* Watchlist Table */}
            <ConversationWatchlist />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
