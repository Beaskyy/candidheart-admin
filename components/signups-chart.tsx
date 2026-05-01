"use client";

const data = [
  { value: 40 },
  { value: 65 },
  { value: 55 },
  { value: 70 },
  { value: 60 },
  { value: 80 },
  { value: 45 },
  { value: 75 },
  { value: 100 },
];

export function SignupsChart() {
  const maxVal = Math.max(...data.map((d) => d.value));

  return (
    <div className="rounded-[24px] border border-[#E7E0D4] bg-white p-5">
      <div className="mb-1">
        <h3 className="text-[20px] font-bold text-[#053560]">Signups</h3>
        <p className="text-[13px] text-[#6F6457]">Last 30 days</p>
      </div>
      <div className="flex items-end justify-between h-[120px] mt-4 pr-6">
        {data.map((d, i) => (
          <div
            key={i}
            className="w-[18px] rounded-[9px] transition-all duration-300"
            style={{
              height: `${(d.value / maxVal) * 100}%`,
              backgroundColor: "#053560",
            }}
          />
        ))}
      </div>
      <p className="text-xs font-semibold text-[#6F6457] mt-3">124%</p>
    </div>
  );
}
