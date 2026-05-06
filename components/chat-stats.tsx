"use client";

const chatStats = [
  {
    title: "Pending",
    value: "14",
    change: "-5",
    color: "#B05A35", // Orange/Brown
  },
  {
    title: "Sent",
    value: "2.8k",
    change: "+8%",
    color: "#053560", // Blue
  },
  {
    title: "Delivered",
    value: "2.5k",
    change: "+7%",
    color: "#1F6B4F", // Green
  },
  {
    title: "Read",
    value: "1.9k",
    change: "+4%",
    color: "#63203A", // Maroon/Red
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

export function ChatStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {chatStats.map((stat) => (
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
