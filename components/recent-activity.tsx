"use client";

const activities = [
  {
    color: "bg-[#1F6B4F]",
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
    <div className="rounded-[24px] border border-[#E7E0D4] bg-white p-5">
      <div className="mb-4">
        <h3 className="text-[20px] font-bold text-[#053560]">
          Recent activity
        </h3>
        <p className="text-xs md:text-[13px] text-[#6F6457] mt-0.5">
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
              <p className="text-sm font-semibold text-[#053560]">
                {activity.title}
              </p>
              <p className="text-[11px] md:text-xs text-[#6F6457] leading-4 mt-0.5">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <span className="inline-flex items-center rounded-full bg-[#F5ECE2] h-7 px-3 py-1.5 text-xs font-medium text-[#A7653D] border border-[#E9D0BE]">
          4 live issues
        </span>
      </div>
    </div>
  );
}
