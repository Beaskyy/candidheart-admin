"use client";

const activities = [
  {
    color: "bg-emerald-500",
    title: "Nina Ade approved for full identity",
    description: "Profile CH-2871 · onboarding complete · 11 mins ago",
  },
  {
    color: "bg-[#D97706]",
    title: "Premium payment verified successfully",
    description: "NGN 35,000 · tx_ref CH-90812 · 27 mins ago",
  },
  {
    color: "bg-[#2563EB]",
    title: "Weekly match moved into active conversation",
    description: "Pair CH-882 and CH-114 · system message sent",
  },
  {
    color: "bg-[#DC2626]",
    title: "Conversation pending-message backlog",
    description: "14 messages still pending delivery in one thread",
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-5">
      <div className="mb-4">
        <h3 className="text-[16px] font-bold text-[#1A1D21]">
          Recent activity
        </h3>
        <p className="text-[12px] text-[#6B7280] mt-0.5">
          A single stream spanning accounts, payments, matches, and chat.
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-start gap-3">
            <span
              className={`mt-1.5 h-2.5 w-2.5 rounded-full shrink-0 ${activity.color}`}
            />
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-[#1A1D21] leading-tight">
                {activity.title}
              </p>
              <p className="text-[12px] text-[#9CA3AF] mt-0.5">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <span className="inline-flex items-center rounded-md bg-[#FEF3C7] px-2.5 py-1 text-[11px] font-semibold text-[#D97706]">
          4 live issues
        </span>
      </div>
    </div>
  );
}
