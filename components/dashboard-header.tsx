"use client";

import { Search, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="md:text-[34px] text-xl font-bold text-[#053560]">
            Platform Overview
          </h1>
          <p className="hidden sm:block text-sm text-[#6F6457] mt-0.5">
            Health, growth, risk, and activity across the CandidHeart ecosystem.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Search */}
        <div className="relative group hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search users, payments, matches"
            className="h-10 w-[180px] md:w-[280px] rounded-xl border border-[#E5E7EB] bg-white pl-10 pr-4 text-[13px] text-[#1A1D21] placeholder:text-[#9CA3AF] outline-none focus:border-[#053560] focus:ring-1 focus:ring-[#053560]/10 transition-all"
          />
        </div>
        
        {/* Mobile Search Button */}
        <button className="sm:hidden p-2 text-[#6B7280]">
          <Search className="h-5 w-5" />
        </button>

        {/* Avatar */}
        <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#053560] text-white text-[13px] font-semibold shrink-0">
          CH
        </div>
      </div>
    </header>
  );
}
