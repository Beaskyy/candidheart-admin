"use client";

const paymentStats = [
  {
    title: "Pending",
    value: "42",
    change: "+6",
    color: "#B05A35", // Orange/Brown
  },
  {
    title: "Successful",
    value: "1,284",
    change: "+38",
    color: "#1F6B4F", // Green
  },
  {
    title: "Failed",
    value: "19",
    change: "-3",
    color: "#63203A", // Maroon/Red
  },
  {
    title: "Revenue month",
    value: "₦12.4m",
    change: "+12%",
    color: "#053560", // Blue
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

export function PaymentStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {paymentStats.map((stat) => (
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
