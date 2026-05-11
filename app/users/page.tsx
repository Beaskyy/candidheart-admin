"use client";

import { useState } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { UsersStatsCards } from "@/components/users-stats-cards";
import { UserRosterTable } from "@/components/user-roster-table";
import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";

function UsersHeader({ onSearch }: { onSearch: (val: string) => void }) {
  const { setOpenMobile } = useSidebar();

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpenMobile(true)}
          className="lg:hidden p-1.5 text-[#053560]"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div>
          <h1 className="md:text-[34px] text-xl font-bold text-[#053560]">
            Users & Profiles
          </h1>
          <p className="hidden sm:block text-sm text-[#6F6457] mt-0.5">
            Inspect lifecycle, onboarding quality, premium state, and
            relationship readiness.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Search */}
        <div className="relative group hidden sm:block">
          <Input
            type="text"
            placeholder="Search users, payments, matches"
            onChange={(e) => onSearch(e.target.value)}
            className="h-12 w-[180px] md:w-[320px] rounded-[18px] border border-[#E5E7EB] bg-white p-4 text-[13px] text-[#1A1D21] placeholder:text-[#9CA3AF] outline-none focus:border-[#053560] focus:ring-1 focus:ring-[#053560]/10 transition-all"
          />
        </div>

        {/* Mobile Search Button */}
        <button className="sm:hidden p-2 text-[#6B7280]">
          <Search className="h-5 w-5" />
        </button>

        {/* Avatar */}
        <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#B05A35] text-white text-[13px] font-semibold shrink-0">
          CH
        </div>
      </div>
    </header>
  );
}

export default function UsersPage() {
  const [search, setSearch] = useState("");

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#FCFBF7]">
        <UsersHeader onSearch={setSearch} />
        <main className="flex-1 overflow-auto px-4 md:px-8 pb-8">
          <div className="max-w-[1400px] mx-auto space-y-5">
            {/* Stats Cards */}
            <UsersStatsCards />

            {/* User Roster Table */}
            <UserRosterTable search={search} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
