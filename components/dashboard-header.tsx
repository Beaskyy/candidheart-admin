"use client";

import { Search } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-5">
      <div>
        <h1 className="text-[22px] font-bold text-[#1A1D21] tracking-tight">
          Platform Overview
        </h1>
        <p className="text-[13px] text-[#6B7280] mt-0.5">
          Health, growth, risk, and activity across the CandidHeart ecosystem.
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search users, payments, matches"
            className="h-10 w-[280px] rounded-xl border border-[#E5E7EB] bg-white pl-10 pr-4 text-[13px] text-[#1A1D21] placeholder:text-[#9CA3AF] outline-none focus:border-[#053560] focus:ring-1 focus:ring-[#053560]/10 transition-all"
          />
        </div>

        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#053560] text-white text-[13px] font-semibold shrink-0">
          CH
        </div>
      </div>
    </header>
  );
}
