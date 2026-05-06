"use client";

const sections = [
  { id: 1, title: "Respect & intention", status: "active" },
  { id: 2, title: "Identity honesty", status: "active" },
  { id: 3, title: "Safety in communication", status: "active" },
  { id: 4, title: "Escalation & reporting", status: "draft" },
];

export function ConductSectionManager() {
  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#053560] mb-1">Conduct section manager</h3>
        <p className="text-xs text-[#6F6457]">Ordered content blocks and active/inactive state for onboarding policies.</p>
      </div>

      <div className="space-y-3">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className="flex items-center justify-between p-5 rounded-[18px] border border-[#F0EDE6] bg-white hover:bg-[#FAF8F3] transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <span className="text-[20px] font-bold text-[#B05A35]/50 group-hover:text-[#B05A35] transition-colors">{section.id}</span>
              <span className="text-[15px] font-bold text-[#053560]">{section.title}</span>
            </div>
            <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${
              section.status === "active" 
                ? "bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]" 
                : "bg-[#F5F5F5] text-[#757575] border border-[#E0E0E0]"
            }`}>
              {section.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
