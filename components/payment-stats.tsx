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

export function PaymentStats() {
  const { data: overview, isLoading } = useAdminAnalyticsOverview();
  const ps = overview?.premium_payments_summary;

  const stats = [
    {
      title: "Pending",
      value: isLoading ? "..." : (ps?.total_pending_payment || 0).toLocaleString(),
      change: isLoading ? "+0" : `+${ps?.pending_payment_month_increase_count || 0}`,
      color: "#B05A35",
    },
    {
      title: "Successful",
      value: isLoading ? "..." : (ps?.total_successful_payment || 0).toLocaleString(),
      change: isLoading ? "+0" : `+${ps?.successful_payment_month_increase_count || 0}`,
      color: "#1F6B4F",
    },
    {
      title: "Failed",
      value: isLoading ? "..." : (ps?.total_failed_payment || 0).toLocaleString(),
      change: isLoading ? "0" : `${ps?.failed_payment_month_increase_count || 0}`,
      color: "#63203A",
    },
    {
      title: "Revenue month",
      value: isLoading ? "..." : `₦${(Object.values(ps?.total_revenue_by_currency || {})[0] || "0")}`,
      change: isLoading ? "+0%" : `+${Object.values(ps?.revenue_month_increase_pct_by_currency || {})[0] || 0}%`,
      color: "#053560",
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
            <p className="text-sm font-medium text-[#6F6457]">
              {stat.title}
            </p>
            <h4 className="text-[32px] font-bold text-[#053560] leading-none">
              {stat.value}
            </h4>
          </div>
          <div className="flex items-end justify-between pt-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
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
