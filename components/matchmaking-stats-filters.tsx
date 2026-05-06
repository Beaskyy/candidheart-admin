"use client";

import { useState } from "react";

const stats = [
  { label: "People dating", value: "128" },
  { label: "Chatting", value: "84" },
  { label: "Broken up", value: "19" },
];

const filters = ["All", "Dating", "Chatting", "Broken up"];

export function MatchmakingStatsFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
      {/* Relationship Stats */}
      <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
        <h3 className="text-sm font-bold text-[#053560] mb-6">Relationship stats</h3>
        <div className="flex items-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              <div className="pr-12">
                <p className="text-xs font-medium text-[#6F6457] mb-1 whitespace-nowrap">
                  {stat.label}
                </p>
                <p className="text-[32px] font-bold text-[#053560] leading-none">
                  {stat.value}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="h-10 w-[1px] bg-[#E9E4DB] mr-12" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
        <h3 className="text-sm font-bold text-[#053560] mb-2">Status filter</h3>
        <p className="text-[11px] text-[#6F6457] mb-6 leading-relaxed">
          Switch the list below by state and review only the users in that status.
        </p>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-200 border ${
                activeFilter === filter
                  ? "bg-[#F3F1E3] text-[#053560] border-[#DCD9C6]"
                  : "bg-white text-[#6F6457] border-[#E9E4DB] hover:bg-[#FAF8F3]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
