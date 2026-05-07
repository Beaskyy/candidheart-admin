"use client";

import { Search, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "./ui/input";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname = usePathname();

  // Determine title and description based on route
  let title = "Platform Overview";
  let description = "Health, growth, risk, and activity across the CandidHeart ecosystem.";

  if (pathname === "/verification") {
    title = "Verification & Moderation";
    description = "Review identity, health, photos, agreements, and policy risk without losing context.";
  } else if (pathname.startsWith("/verification/")) {
    title = "Selfie & Document Review";
    description = "Compare uploaded selfie and ID evidence, confirm the match, and approve the document.";
  } else if (pathname === "/users") {
    title = "Users & Profiles";
    description = "Manage and review user accounts and profiles.";
  } else if (pathname === "/matchmaking") {
    title = "Matchmaking Operations";
    description = "Track users by relationship state and review filtered matchmaking activity.";
  } else if (pathname === "/chat") {
    title = "Chat & Messaging";
    description = "Conversation health, delivery state, daily free-user limits, and escalation signals.";
  } else if (pathname === "/devices") {
    title = "Devices, Push & Config";
    description = "Device registrations, push-token health, system configuration, and conduct content.";
  } else if (pathname === "/payments") {
    title = "Premium Payments";
    description = "Revenue health, transaction verification, and escalation context.";
  }

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="md:text-[34px] text-xl font-bold text-[#053560]">
            {title}
          </h1>
          <p className="hidden sm:block text-[15px] text-[#6F6457] mt-0.5">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Search */}
        <div className="relative group hidden sm:block">
          <Input
            type="text"
            placeholder="Search users, payments, matches"
            className="h-12 w-[180px] md:w-[320px] rounded-[18px] border border-[#E5E7EB] bg-white px-5 text-[14px] text-[#1A1D21] placeholder:text-[#978A7D] outline-none focus:border-[#E7E0D4] focus:ring-1 focus:ring-[#053560]/10 transition-all"
          />
        </div>
        
        {/* Mobile Search Button */}
        <button className="sm:hidden p-2 text-[#6B7280]">
          <Search className="h-5 w-5" />
        </button>

        {/* Avatar */}
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#B05A35] text-white text-[14px] font-semibold shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
          CH
        </div>
      </div>
    </header>
  );
}
