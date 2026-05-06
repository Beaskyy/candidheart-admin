"use client";

const tokenStats = [
  { label: "Devices", value: "4.2k", change: "+112", color: "#053560" },
  { label: "Expiring soon", value: "14", change: "+4", color: "#B05A35" },
  { label: "Refresh failed", value: "3", change: "+1", color: "#63203A" },
];

export function PushTokenHealth() {
  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#053560] mb-1">Push token health</h3>
        <p className="text-xs text-[#6F6457]">Track refresh status, expiry risk, and provider posture.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {tokenStats.map((stat) => (
          <div key={stat.label} className="rounded-[20px] border border-[#F0EDE6] p-4">
            <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#053560]">{stat.value}</span>
              <span 
                className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                style={{ backgroundColor: `${stat.color}14`, color: stat.color }}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <span className="rounded-full bg-[#E3F2FD] text-[#1976D2] border border-[#BBDEFB] px-3 py-1.5 text-[11px] font-bold">
          FCM provider
        </span>
        <span className="rounded-full bg-[#FFF3E0] text-[#E65100] border border-[#FFCC80] px-3 py-1.5 text-[11px] font-bold">
          Refresh token due in 38m
        </span>
      </div>
    </div>
  );
}
