"use client";

const stats = [
  {
    title: "Total users",
    value: "24.8k",
    change: "+8.2%",
    trend: "up" as const,
    sparklineColor: "#053560",
  },
  {
    title: "Completed onboarding",
    value: "81%",
    change: "+3.4%",
    trend: "up" as const,
    sparklineColor: "#10B981",
  },
  {
    title: "Open profiles",
    value: "14.2k",
    change: "+2.1%",
    trend: "up" as const,
    sparklineColor: "#053560",
  },
  {
    title: "Active matches",
    value: "1,284",
    change: "+67",
    trend: "up" as const,
    sparklineColor: "#053560",
  },
  {
    title: "Pending verification",
    value: "128",
    change: "+14",
    trend: "up" as const,
    sparklineColor: "#D97706",
  },
  {
    title: "Unread risk signals",
    value: "06",
    change: "-2",
    trend: "down" as const,
    sparklineColor: "#053560",
  },
];

function IndicatorBar({ color }: { color: string }) {
  return (
    <div 
      className="w-[40px] h-[8px] rounded-full shrink-0" 
      style={{ backgroundColor: color }}
    />
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-[32px] border border-[#E9E4DB] bg-white p-7 flex flex-col justify-between min-h-[160px] shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
        >
          <div className="space-y-1">
            <p className="text-[13px] font-medium text-[#6F6457]">
              {stat.title}
            </p>
            <h4 className="text-[30px] font-bold text-[#053560]">
              {stat.value}
            </h4>
          </div>
          <div className="flex items-center justify-between gap-3 pt-4">
            <span
              className="inline-flex items-center rounded-full px-4 py-2 text-[14px] font-bold border border-opacity-20"
              style={{ 
                backgroundColor: `${stat.sparklineColor}14`, 
                color: stat.sparklineColor,
                borderColor: stat.sparklineColor 
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
