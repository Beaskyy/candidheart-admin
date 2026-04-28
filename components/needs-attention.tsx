"use client";

const items = [
  {
    label: "Pending ID reviews",
    labelColor: "bg-[#FEE2E2] text-[#DC2626]",
    description: "18 profiles waiting on selfie or document confirmation",
  },
  {
    label: "Flagged photos",
    labelColor: "bg-[#FEF3C7] text-[#D97706]",
    description: "11 uploads need moderator approval or rejection",
  },
  {
    label: "Failed premium verification",
    labelColor: "bg-[#FEE2E2] text-[#DC2626]",
    description: "7 payments require webhook or tx_ref investigation",
  },
  {
    label: "Stale push token refresh",
    labelColor: "bg-[#DBEAFE] text-[#2563EB]",
    description: "4 device groups have expiring access tokens",
  },
];

export function NeedsAttention() {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-5">
      <div className="mb-4">
        <h3 className="text-[16px] font-bold text-[#1A1D21]">
          Needs attention
        </h3>
        <p className="text-[12px] text-[#6B7280] mt-0.5">
          Queues that likely require a human decision today.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i} className="space-y-1.5">
            <span
              className={`inline-block rounded-md px-2.5 py-1 text-[11px] font-semibold ${item.labelColor}`}
            >
              {item.label}
            </span>
            <p className="text-[13px] text-[#6B7280] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
