"use client";

const healthSignals = [
  {
    title: "237 active conversations this week",
    subtext: "Median reply time 14 mins",
    color: "#053560",
  },
  {
    title: "9 threads with unread count > 20",
    subtext: "Likely support or conflict risk",
    color: "#B05A35",
  },
  {
    title: "14 messages still pending delivery",
    subtext: "Clustered inside 3 conversations",
    color: "#63203A",
  },
];

const messageCounts = [
  { userId: "User CH-2081", current: 42, max: 50, color: "#B05A35" },
  { userId: "User CH-7710", current: 49, max: 50, color: "#B05A35" },
  { userId: "User CH-9002", current: 50, max: 50, color: "#63203A" },
  { userId: "User CH-1900", current: 11, max: 50, color: "#053560" },
];

export function ChatHealthMonitor() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Conversation Health */}
      <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
        <h3 className="text-lg font-bold text-[#053560] mb-1">Conversation health</h3>
        <p className="text-xs text-[#6F6457] mb-8">Key signals for recency and unread pressure.</p>
        
        <div className="space-y-8">
          {healthSignals.map((signal, index) => (
            <div key={index} className="flex gap-4">
              <div 
                className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" 
                style={{ backgroundColor: signal.color }}
              />
              <div>
                <p className="text-[15px] font-bold text-[#053560]">{signal.title}</p>
                <p className="text-[13px] text-[#6F6457] mt-0.5">{signal.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Message Monitor */}
      <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
        <h3 className="text-lg font-bold text-[#053560] mb-1">DailyMessageCount monitor</h3>
        <p className="text-xs text-[#6F6457] mb-8">Conceptual monitoring for free-user message caps and unusual spikes.</p>

        <div className="space-y-6">
          {messageCounts.map((item) => (
            <div key={item.userId} className="flex items-center gap-4">
              <div className="flex-1 bg-[#F0EDE6] h-3.5 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${(item.current / item.max) * 100}%`,
                    backgroundColor: item.color 
                  }}
                />
              </div>
              <p className="text-[12px] font-semibold text-[#6F6457] w-32 text-right">
                {item.userId} • {item.current} / {item.max}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
