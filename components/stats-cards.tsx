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

export function StatsCards() {
  const { data: overview, isLoading } = useAdminAnalyticsOverview();

  const stats = [
    {
      title: "Total users",
      value: isLoading ? "..." : (overview?.total_users || 0).toLocaleString(),
      change: isLoading ? "0%" : `${overview?.total_users_mom_pct > 0 ? "+" : ""}${overview?.total_users_mom_pct || 0}%`,
      trend: (overview?.total_users_mom_pct || 0) >= 0 ? ("up" as const) : ("down" as const),
      sparklineColor: "#053560",
    },
    {
      title: "Completed onboarding",
      value: isLoading ? "..." : `${Math.round(overview?.onboarding_completion_percentage || 0)}%`,
      change: "+0%", // Not directly in API mom but we can keep static or calc
      trend: "up" as const,
      sparklineColor: "#1F6B4F",
    },
    {
      title: "Open profiles",
      value: isLoading ? "..." : (overview?.open_profiles || 0).toLocaleString(),
      change: "+0%",
      trend: "up" as const,
      sparklineColor: "#053560",
    },
    {
      title: "Active matches",
      value: isLoading ? "..." : (overview?.active_matches || 0).toLocaleString(),
      change: "+0",
      trend: "up" as const,
      sparklineColor: "#63203A",
    },
    {
      title: "Pending verification",
      value: isLoading ? "..." : (overview?.pending_verifications || 0).toLocaleString(),
      change: "+0",
      trend: "up" as const,
      sparklineColor: "#B05A35",
    },
    {
      title: "Unread risk signals",
      value: isLoading ? "..." : (overview?.unread_risk_signals || 0).toLocaleString().padStart(2, '0'),
      change: "0",
      trend: "down" as const,
      sparklineColor: "#63203A",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-[24px] border border-[#E9E4DB] bg-white p-3 flex flex-col justify-between min-h-[160px]"
        >
          <div className="space-y-1">
            <p className="text-xs md:text-[13px] font-medium text-[#6F6457]">
              {stat.title}
            </p>
            <h4 className="text-2xl md:text-[30px] font-bold text-[#053560]">
              {stat.value}
            </h4>
          </div>
          <div className="flex items-center justify-between gap-3 pt-4">
            <span
              className="inline-flex items-center rounded-full px-2 py-2 text-xs h-7 font-bold border border-opacity-20"
              style={{
                backgroundColor: `${stat.sparklineColor}14`,
                color: stat.sparklineColor,
                borderColor: stat.sparklineColor,
              }}
            >
              {stat.change}
            </span>
            <IndicatorBar color={stat.sparklineColor} />
          </div>
        </div>
      ))}
    </div>
  );
}
