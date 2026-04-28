"use client";

const data = [
  { value: 60 },
  { value: 75 },
  { value: 65 },
  { value: 85 },
  { value: 70 },
  { value: 90 },
  { value: 55 },
  { value: 80 },
  { value: 100 },
];

export function MessageVolumeChart() {
  const maxVal = Math.max(...data.map((d) => d.value));

  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-5">
      <div className="mb-1">
        <h3 className="text-[15px] font-semibold text-[#1A1D21]">
          Message volume
        </h3>
        <p className="text-[12px] text-[#9CA3AF]">Last 30 days</p>
      </div>
      <div className="flex items-end justify-between h-[120px] mt-4 pr-6">
        {data.map((d, i) => (
          <div
            key={i}
            className="w-[18px] rounded-[9px] transition-all duration-300"
            style={{
              height: `${(d.value / maxVal) * 100}%`,
              backgroundColor: "#63203A",
            }}
          />
        ))}
      </div>
      <p className="text-[13px] font-semibold text-[#6B7280] mt-3">124%</p>
    </div>
  );
}
