"use client";

const reviewStats = [
  {
    title: "Selfie pending",
    value: "18",
    change: "+3",
    color: "#B05A35", // Orange/Brown
  },
  {
    title: "Doc mismatches",
    value: "06",
    change: "+2",
    color: "#63203A", // Maroon/Red
  },
  {
    title: "OCR matched",
    value: "12",
    change: "+4",
    color: "#1F6B4F", // Green
  },
  {
    title: "Approved today",
    value: "24",
    change: "+6",
    color: "#63203A", // Dark Red
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

export function VerificationReviewStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {reviewStats.map((stat) => (
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
