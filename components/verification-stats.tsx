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

export function VerificationStats() {
  const { data: overview, isLoading } = useAdminAnalyticsOverview();
  const vs = overview?.verification_summary;

  const stats = [
    {
      title: "Identity pending",
      value: isLoading ? "..." : (vs?.total_identity_verified_pending || 0).toLocaleString(),
      change: "+0",
      color: "#A7653D",
    },
    {
      title: "Photo review",
      value: isLoading ? "..." : (overview?.unread_risk_signals || 0).toLocaleString(),
      change: "+0",
      color: "#63203A",
    },
    {
      title: "Health proofs",
      value: isLoading ? "..." : (vs?.total_pending_health_verification || 0).toLocaleString(),
      change: "+0",
      color: "#1F6B4F",
    },
    {
      title: "Conduct review",
      value: isLoading ? "..." : (overview?.unread_risk_signals || 0).toLocaleString(),
      change: "+0",
      color: "#63203A",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-[24px] border border-[#E9E4DB] bg-white p-6 flex flex-col justify-between min-h-[140px]"
        >
          <div className="space-y-1">
            <p className="text-[13px] font-medium text-[#6F6457]">
              {stat.title}
            </p>
            <h4 className="text-[30px] font-bold text-[#053560] leading-none">
              {stat.value}
            </h4>
          </div>
          <div className="flex items-end justify-between pt-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: `${stat.color}14`,
                color: stat.color,
              }}
            >
              {stat.change}
            </span>
            <IndicatorBar color={stat.color} />
          </div>
        </div>
      ))}
    </div>
  );
}
