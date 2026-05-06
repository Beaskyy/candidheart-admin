"use client";

const transactions = [
  {
    id: "CH-90812",
    country: "NG",
    amount: "NGN 35,000",
    status: "success",
    time: "09:14",
    availability: "available",
    provider: "Flutterwave #880120",
  },
  {
    id: "CH-99221",
    country: "US",
    amount: "USD 49",
    status: "pending",
    time: "09:21",
    availability: "queued",
    provider: "Flutterwave #880121",
  },
  {
    id: "CH-99218",
    country: "GB",
    amount: "GBP 39",
    status: "failed",
    time: "09:03",
    availability: "available",
    provider: "Flutterwave #880122",
  },
  {
    id: "CH-99102",
    country: "NG",
    amount: "NGN 35,000",
    status: "pending",
    time: "08:47",
    availability: "missing",
    provider: "Flutterwave #880123",
  },
  {
    id: "CH-98981",
    country: "CA",
    amount: "CAD 55",
    status: "success",
    time: "08:11",
    availability: "available",
    provider: "Flutterwave #880124",
  },
];

const statusBadgeConfig: Record<string, string> = {
  success: "bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]",
  pending: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]",
  failed: "bg-[#FFEBEE] text-[#C62828] border-[#EF9A9A]",
};

export function TransactionTable() {
  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white overflow-hidden">
      <div className="px-8 pt-7 pb-5">
        <h2 className="text-[22px] font-bold text-[#053560]">Transaction table</h2>
        <p className="text-sm text-[#6F6457] mt-1">
          Transaction detail view with tx ref, country, amount, and raw response availability.
        </p>
      </div>

      <div className="overflow-x-auto px-2">
        <table className="w-full">
          <thead>
            <tr className="border-t border-[#F0EDE6]">
              <th className="px-6 py-4 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                ID
              </th>
              <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Country
              </th>
              <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Amount
              </th>
              <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Status
              </th>
              <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Time
              </th>
              <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Availability
              </th>
              <th className="px-4 py-4 text-right text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Provider
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EDE6]">
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="transition-colors hover:bg-[#FAF8F3]"
              >
                <td className="px-6 py-5">
                  <span className="text-sm font-semibold text-[#053560]">
                    {tx.id}
                  </span>
                </td>
                <td className="px-4 py-5">
                  <span className="text-sm text-[#6F6457]">
                    {tx.country}
                  </span>
                </td>
                <td className="px-4 py-5">
                  <span className="text-sm text-[#6F6457]">
                    {tx.amount}
                  </span>
                </td>
                <td className="px-4 py-5">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold ${statusBadgeConfig[tx.status]}`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-4 py-5">
                  <span className="text-sm text-[#6F6457]">
                    {tx.time}
                  </span>
                </td>
                <td className="px-4 py-5">
                  <span className="text-sm text-[#6F6457]">
                    {tx.availability}
                  </span>
                </td>
                <td className="px-4 py-5 text-right">
                  <span className="text-sm font-medium text-[#053560]">
                    {tx.provider}
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
