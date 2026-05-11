"use client";

import { useAdminAnalyticsTrends } from "@/hooks/use-admin-api";

export function OnboardingChart() {
  const { data: trends, isLoading } = useAdminAnalyticsTrends({});
  
  const chartData = trends?.onboarding_completion_trend || [];
  const maxVal = chartData.length > 0 ? Math.max(...chartData.map((d) => d.value)) : 100;

  return (
    <div className="rounded-[24px] border border-[#E7E0D4] bg-white p-5">
      <div className="mb-1">
        <h3 className="text-[20px] font-bold text-[#053560]">
          Onboarding completion
        </h3>
        <p className="text-[13px] text-[#6F6457]">Last 30 days</p>
      </div>
      <div className="flex items-end justify-between h-[120px] mt-4 pr-6">
        {isLoading ? (
          <div className="w-full flex items-center justify-center h-full text-xs text-[#6F6457]">Loading...</div>
        ) : chartData.length === 0 ? (
          <div className="w-full flex items-center justify-center h-full text-xs text-[#6F6457]">No data available</div>
        ) : (
          chartData.map((d, i) => (
            <div
              key={i}
              className="w-[18px] rounded-[9px] transition-all duration-300"
              style={{
                height: `${Math.max((d.value / maxVal) * 100, 5)}%`,
                backgroundColor: "#B05A35",
              }}
              title={`${d.date}: ${d.value}%`}
            />
          ))
        )}
      </div>
      <p className="text-xs font-semibold text-[#6F6457] mt-3">
        {isLoading ? "..." : "61%"}
      </p>
    </div>
  );
}
