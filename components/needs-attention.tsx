"use client";

import { useAdminAnalyticsOverview } from "@/hooks/use-admin-api";

export function NeedsAttention() {
  const { data: overview, isLoading } = useAdminAnalyticsOverview();

  const items = [
    {
      label: "Pending ID reviews",
      labelColor: "bg-[#F5ECE2] text-[#A7653D] border-[#E9D0BE]",
      description: isLoading 
        ? "Loading reviews..." 
        : `${overview?.pending_verifications || 0} profiles waiting on selfie or document confirmation`,
    },
    {
      label: "Flagged photos",
      labelColor: "bg-[#F4E7EB] text-[#63203A] border-[#E6C8D3]",
      description: isLoading 
        ? "Checking flags..." 
        : `${overview?.unread_risk_signals || 0} uploads need moderator approval or rejection`,
    },
    {
      label: "Failed premium verification",
      labelColor: "bg-[#F5ECE2] text-[#A7653D] border-[#E9D0BE]",
      description: isLoading 
        ? "Verifying payments..." 
        : `${overview?.premium_payments_summary?.total_failed_payment || 0} payments require webhook or tx_ref investigation`,
    },
    {
      label: "Stale push token refresh",
      labelColor: "bg-[#FCFBF7] text-[#053560] border-[#EEE7DC]",
      description: "4 device groups have expiring access tokens", // No direct API field, keeping static
    },
  ];

  return (
    <div className="rounded-[24px] border border-[#E7E0D4] bg-white p-6">
      <div className="mb-4">
        <h3 className="text-[20px] font-bold text-[#053560]">
          Needs attention
        </h3>
        <p className="text-xs md:text-[13px] text-[#6F6457] mt-0.5">
          Queues that likely require a human decision today.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i} className="border border-[#EEE7DC] rounded-[18px] p-2 space-y-1.5 bg-[#FCFBF7]">
            <span
              className={`inline-block rounded-full h-7 px-2.5 py-1 text-[11px] font-semibold border ${item.labelColor}`}
            >
              {item.label}
            </span>
            <p className="text-[11px] md:text-[13px] text-[#6F6457]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
