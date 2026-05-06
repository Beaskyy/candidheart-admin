"use client";

const matchmakingUsers = [
  {
    user: { name: "Amaka James", age: 29, location: "Lagos" },
    partner: { name: "David Ojo", age: 31, location: "Abuja" },
    status: "Chatting",
    lastActivity: "18m ago",
    owner: "Amina O.",
    notes: "Good momentum. Review again only if thread cools off.",
  },
  {
    user: { name: "Mariam Bello", age: 27, location: "Ibadan" },
    partner: { name: "Samuel Duke", age: 30, location: "Lagos" },
    status: "Chatting",
    lastActivity: "4h ago",
    owner: "Amina O.",
    notes: "Warm exchange. No intervention needed yet.",
  },
  {
    user: { name: "Favour Obi", age: 26, location: "Enugu" },
    partner: { name: "John Ansa", age: 28, location: "Port Harcourt" },
    status: "Chatting",
    lastActivity: "1d ago",
    owner: "Unassigned",
    notes: "Light nudge tomorrow if there is no fresh reply.",
  },
  {
    user: { name: "Esther Femi", age: 26, location: "Abuja" },
    partner: { name: "Julian Hart", age: 29, location: "Lagos" },
    status: "Chatting",
    lastActivity: "2d ago",
    owner: "Unassigned",
    notes: "Recipient silent after invite. Watch closely for SLA risk.",
  },
  {
    user: { name: "Naomi Cole", age: 30, location: "Benin" },
    partner: { name: "David Ayo", age: 32, location: "Uyo" },
    status: "Chatting",
    lastActivity: "3d ago",
    owner: "Sade K.",
    notes: "Exclusivity reminder due soon. Prep a soft follow-up.",
  },
];

export function MatchmakingUsersList() {
  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white overflow-hidden">
      <div className="px-8 pt-7 pb-5">
        <h2 className="text-[22px] font-bold text-[#053560]">Users list</h2>
        <p className="text-sm text-[#6F6457] mt-1">
          Filtered roster below reflects the currently selected relationship status.
        </p>
      </div>

      <div className="px-4 pb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F0EDE6]">
                <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#053560]">User</th>
                <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#053560]">Partner</th>
                <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#053560]">Status</th>
                <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#053560]">Last activity</th>
                <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#053560]">Owner</th>
                <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#053560]">Notes / next step</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EDE6]">
              {matchmakingUsers.map((item, index) => (
                <tr key={index} className="group hover:bg-[#FAF8F3] transition-colors">
                  <td className="px-4 py-5">
                    <p className="text-[14px] font-bold text-[#053560]">{item.user.name}</p>
                    <p className="text-[12px] text-[#6F6457]">{item.user.age} • {item.user.location}</p>
                  </td>
                  <td className="px-4 py-5">
                    <p className="text-[14px] font-bold text-[#053560]">{item.partner.name}</p>
                    <p className="text-[12px] text-[#6F6457]">{item.partner.age} • {item.partner.location}</p>
                  </td>
                  <td className="px-4 py-5 text-center">
                    <span className="rounded-full bg-[#F3F1E3] text-[#053560] border border-[#DCD9C6] px-3 py-1 text-[11px] font-bold">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-center">
                    <span className="text-[13px] font-semibold text-[#053560]">{item.lastActivity}</span>
                  </td>
                  <td className="px-4 py-5 text-center">
                    <span className="text-[13px] font-semibold text-[#053560]">{item.owner}</span>
                  </td>
                  <td className="px-4 py-5 max-w-[280px]">
                    <p className="text-[13px] font-medium text-[#053560] leading-relaxed">
                      {item.notes}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
