"use client";

const devices = [
  { id: "CH-2081", token: "token-user1...", time: "2m ago", status: "healthy" },
  { id: "CH-8810", token: "token-user2...", time: "9m ago", status: "healthy" },
  { id: "CH-9920", token: "token-user3...", time: "38m ago", status: "refresh" },
  { id: "CH-4411", token: "token-user4...", time: "2h ago", status: "stale" },
  { id: "CH-1900", token: "token-user5...", time: "5h ago", status: "stale" },
];

const statusBadgeConfig: Record<string, string> = {
  healthy: "bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]",
  refresh: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]",
  stale: "bg-[#FCE4EC] text-[#C2185B] border-[#F8BBD0]",
};

export function DeviceRegistry() {
  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#053560] mb-1">Device registry</h3>
        <p className="text-xs text-[#6F6457]">Representative registrations and stale-token watchlist.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody className="divide-y divide-[#F0EDE6]">
            {devices.map((device) => (
              <tr key={device.id} className="group hover:bg-[#FAF8F3] transition-colors">
                <td className="py-4">
                  <span className="text-[14px] font-bold text-[#053560]">{device.id}</span>
                </td>
                <td className="py-4">
                  <span className="text-[13px] text-[#6F6457] font-mono">{device.token}</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-[13px] font-semibold text-[#6F6457]">{device.time}</span>
                </td>
                <td className="py-4 text-right">
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold ${statusBadgeConfig[device.status]}`}>
                    {device.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
