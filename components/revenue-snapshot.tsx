"use client";

const revenueData = [
  { country: "NG", percentage: 72, color: "#053560" },
  { country: "US", percentage: 12, color: "#B05A35" },
  { country: "GB", percentage: 7, color: "#053560" },
  { country: "CA", percentage: 5, color: "#B05A35" },
  { country: "ZA", percentage: 4, color: "#053560" },
];

export function RevenueSnapshot() {
  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
      <div className="mb-8">
        <h2 className="text-[22px] font-bold text-[#053560]">Revenue snapshot</h2>
        <p className="text-sm text-[#6F6457] mt-1">
          Performance summary for premium upgrades.
        </p>
      </div>

      <div className="space-y-6">
        {revenueData.map((item) => (
          <div key={item.country} className="flex items-center gap-4">
            <div className="flex-1 bg-[#F0EDE6] h-4 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
            <span className="text-[13px] font-semibold text-[#6F6457] w-12 text-right">
              {item.country} {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
