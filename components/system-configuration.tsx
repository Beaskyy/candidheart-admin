"use client";

const configs = [
  { label: "OTP expiry", value: "300 seconds" },
  { label: "Max OTP retries", value: "3 attempts" },
  { label: "Max photos", value: "3" },
  { label: "Selfie verification", value: "Required" },
  { label: "Terms URL", value: "Configured" },
  { label: "Privacy policy", value: "Configured" },
];

export function SystemConfiguration() {
  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#053560] mb-1">System configuration</h3>
        <p className="text-xs text-[#6F6457]">Backend singleton settings that shape onboarding and content operations.</p>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        {configs.map((config) => (
          <div key={config.label}>
            <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">{config.label}</p>
            <p className="text-[15px] font-bold text-[#053560]">{config.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
