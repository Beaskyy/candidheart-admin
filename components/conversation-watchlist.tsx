"use client";

const watchlist = [
  {
    id: "CH-4421 / CH-8812",
    status: { label: "2 unread", color: "bg-[#F3F1E3] text-[#053560] border-[#DCD9C6]" },
    time: "3m ago",
    state: { label: "healthy", color: "bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]" },
  },
  {
    id: "CH-1181 / CH-5520",
    status: { label: "24 unread", color: "bg-[#FFEBEE] text-[#C62828] border-[#EF9A9A]" },
    time: "18m ago",
    state: { label: "escalate", color: "bg-[#FFEBEE] text-[#C62828] border-[#EF9A9A]" },
  },
  {
    id: "CH-7122 / CH-1820",
    status: { label: "pending queue", color: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]" },
    time: "43m ago",
    state: { label: "warning", color: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]" },
  },
  {
    id: "CH-9100 / CH-4100",
    status: { label: "read receipt lag", color: "bg-[#F5F5F5] text-[#757575] border-[#E0E0E0]" },
    time: "1h ago",
    state: { label: "warning", color: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]" },
  },
  {
    id: "CH-4040 / CH-1900",
    status: { label: "quiet thread", color: "bg-[#F5F5F5] text-[#757575] border-[#E0E0E0]" },
    time: "5d ago",
    state: { label: "neutral", color: "bg-[#F5F5F5] text-[#757575] border-[#E0E0E0]" },
  },
];

export function ConversationWatchlist() {
  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white overflow-hidden">
      <div className="px-8 pt-7 pb-5">
        <h2 className="text-[22px] font-bold text-[#053560]">Conversation watchlist</h2>
        <p className="text-sm text-[#6F6457] mt-1">
          Conversation rows with recency, unread indicators, and delivery escalation states.
        </p>
      </div>

      <div className="overflow-x-auto px-2">
        <table className="w-full">
          <tbody className="divide-y divide-[#F0EDE6]">
            {watchlist.map((item, index) => (
              <tr key={index} className="transition-colors hover:bg-[#FAF8F3]">
                <td className="px-6 py-5">
                  <span className="text-sm font-bold text-[#053560]">
                    {item.id}
                  </span>
                </td>
                <td className="px-4 py-5 text-center">
                  <span className={`inline-flex items-center rounded-full border px-4 py-1 text-[11px] font-bold ${item.status.color}`}>
                    {item.status.label}
                  </span>
                </td>
                <td className="px-4 py-5 text-center">
                  <span className="text-sm font-semibold text-[#6F6457]">
                    {item.time}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <span className={`inline-flex items-center rounded-full border px-4 py-1 text-[11px] font-bold ${item.state.color}`}>
                    {item.state.label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-4" />
    </div>
  );
}
