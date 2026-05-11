"use client";

import { useAdminAnalyticsOverview } from "@/hooks/use-admin-api";

function IndicatorBar({ color }: { color: string }) {
  return (
    <div
      className="w-[40px] h-[8px] rounded-full shrink-0"
      style={{ backgroundColor: color }}
    />
  );
}

export function UsersStatsCards() {
  const { data: overview, isLoading } = useAdminAnalyticsOverview();

  const stats = [
    {
      title: "Total users",
      value: isLoading ? "..." : (overview?.total_users || 0).toLocaleString(),
      change: isLoading ? "0%" : `${overview?.total_users_mom_pct > 0 ? "+" : ""}${overview?.total_users_mom_pct || 0}%`,
      trend: (overview?.total_users_mom_pct || 0) >= 0 ? ("up" as const) : ("down" as const),
      barColor: "#053560",
    },
    {
      title: "Verified users",
      value: isLoading ? "..." : (overview?.total_verified_users || 0).toLocaleString(),
      change: isLoading ? "0%" : `${overview?.total_verified_users_mom_pct > 0 ? "+" : ""}${overview?.total_verified_users_mom_pct || 0}%`,
      trend: (overview?.total_verified_users_mom_pct || 0) >= 0 ? ("up" as const) : ("down" as const),
      barColor: "#1F6B4F",
    },
    {
      title: "Open profiles",
      value: isLoading ? "..." : (overview?.open_profiles || 0).toLocaleString(),
      change: "+0%",
      trend: "up" as const,
      barColor: "#053560",
    },
    {
      title: "Pending review",
      value: isLoading ? "..." : (overview?.pending_verifications || 0).toLocaleString(),
      change: "+0",
      trend: "up" as const,
      barColor: "#B05A35",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white border border-[#E7E0D4] rounded-[24px] md:p-6 p-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-[24px] border border-[#E9E4DB] bg-white p-4 flex flex-col justify-between min-h-[140px]"
        >
          <div className="space-y-1">
            <p className="text-xs md:text-[13px] font-medium text-[#6F6457]">
              {stat.title}
            </p>
            <h4 className="text-2xl md:text-[30px] font-bold text-[#053560]">
              {stat.value}
            </h4>
          </div>
          <div className="flex items-center justify-between gap-3 pt-3">
            <span
              className="inline-flex items-center rounded-full px-2 py-1.5 text-xs h-7 font-bold border border-opacity-20"
              style={{
                backgroundColor: `${stat.barColor}14`,
                color: stat.barColor,
                borderColor: stat.barColor,
              }}
            >
              {stat.change}
            </span>
            <IndicatorBar color={stat.barColor} />
          </div>
        </div>
      ))}
    </div>
  );
}
