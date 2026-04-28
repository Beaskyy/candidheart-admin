"use client";

const stats = [
  {
    title: "Total users",
    value: "24.8k",
    change: "+8.2%",
    trend: "up" as const,
    sparklineData: [3, 5, 4, 6, 5, 7, 6, 8],
    sparklineColor: "#053560",
  },
  {
    title: "Completed onboarding",
    value: "81%",
    change: "+3.4%",
    trend: "up" as const,
    sparklineData: [4, 5, 6, 5, 7, 6, 8, 7],
    sparklineColor: "#10B981",
  },
  {
    title: "Open profiles",
    value: "14.2k",
    change: "+2.1%",
    trend: "up" as const,
    sparklineData: [3, 4, 5, 4, 6, 5, 7, 6],
    sparklineColor: "#053560",
  },
  {
    title: "Active matches",
    value: "1,284",
    change: "+67",
    trend: "up" as const,
    sparklineData: [4, 6, 5, 7, 6, 8, 7, 9],
    sparklineColor: "#053560",
  },
  {
    title: "Pending verification",
    value: "128",
    change: "+14",
    trend: "up" as const,
    sparklineData: [5, 6, 5, 7, 6, 8, 7, 8],
    sparklineColor: "#D97706",
  },
  {
    title: "Unread risk signals",
    value: "06",
    change: "-2",
    trend: "down" as const,
    sparklineData: [8, 7, 6, 7, 5, 6, 4, 5],
    sparklineColor: "#053560",
  },
];

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 56;
  const height = 20;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="shrink-0">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-4 space-y-2"
        >
          <p className="text-[11px] font-medium text-[#6B7280] leading-tight">
            {stat.title}
          </p>
          <p className="text-[24px] font-bold text-[#1A1D21] leading-none tracking-tight">
            {stat.value}
          </p>
          <div className="flex items-center justify-between gap-2 pt-0.5">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                stat.trend === "up"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {stat.change}
            </span>
            <Sparkline data={stat.sparklineData} color={stat.sparklineColor} />
          </div>
        </div>
      ))}
    </div>
  );
}
