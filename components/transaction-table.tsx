"use client";

import { useAdminTransactions } from "@/hooks/use-admin-api";
import { AdminTransactionListItem } from "@/types/api";

const statusBadgeConfig: Record<string, string> = {
  success: "bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]",
  pending: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]",
  failed: "bg-[#FFEBEE] text-[#C62828] border-[#EF9A9A]",
};

export function TransactionTable() {
  const { data: response, isLoading } = useAdminTransactions();
  const transactions = response?.results || [];

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
            {isLoading ? (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-sm text-[#6F6457]">
                  Loading transactions...
                </td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-sm text-[#6F6457]">
                  No transactions found.
                </td>
              </tr>
            ) : (
              transactions.map((tx: AdminTransactionListItem) => (
                <tr
                  key={tx.id}
                  className="transition-colors hover:bg-[#FAF8F3]"
                >
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-[#053560]">
                      TX-{tx.id.toString().slice(-6).toUpperCase()}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-sm text-[#6F6457]">
                      {tx.country || "N/A"}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-sm text-[#6F6457]">
                      {tx.amount} {tx.currency}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold ${statusBadgeConfig[tx.status.toLowerCase()] || statusBadgeConfig.pending}`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-sm text-[#6F6457]">
                      {new Date(tx.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-sm text-[#6F6457]">
                      {tx.status === "SUCCESS" ? "available" : "queued"}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-right">
                    <span className="text-sm font-medium text-[#053560]">
                      {tx.provider || "Flutterwave"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="h-4" />
    </div>
  );
}
