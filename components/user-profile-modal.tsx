"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface UserData {
  id: number;
  fullName: string;
  age: number;
  sex: string;
  stage: string;
  status: string;
  premium: string;
  email: string;
  phone: string;
  location: string;
  lastActive: string;
  // Extended profile data
  faith: string;
  goals: string;
  education: string;
  datingState: string;
  jobTitle: string;
  tribe: string;
  wantsChildren: string;
  relocationOpenness: string;
  photoCount: number;
  identityCheck: string;
  healthProof: string;
  photoReview: string;
  premiumPayment: string;
}

interface UserProfileModalProps {
  user: UserData | null;
  isOpen: boolean;
  onClose: () => void;
}

const statusBadgeStyles: Record<string, string> = {
  open: "bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]",
  hibernate: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]",
  blocked: "bg-[#FFEBEE] text-[#C62828] border-[#EF9A9A]",
};

const premiumBadgeStyles: Record<string, string> = {
  premium: "bg-[#053560] text-white border-[#053560]",
  standard: "bg-[#F0EDE6] text-[#6F6457] border-[#E0DBD1]",
};

export function UserProfileModal({
  user,
  isOpen,
  onClose,
}: UserProfileModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !user) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Profile for ${user.fullName}`}
    >
      {/* Backdrop with opacity */}
      <div
        className="absolute inset-0 bg-[#053560]/40 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-[24px] bg-[#FCFBF7] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-2">
          <div>
            <p className="text-xs text-[#6F6457] font-medium mb-1">
              Full profile dialog
            </p>
            <h2 className="text-[28px] font-bold text-[#053560]">
              {user.fullName}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center h-9 w-9 rounded-full border border-[#E9E4DB] bg-white text-[#6F6457] hover:bg-[#F0EDE6] hover:text-[#053560] transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-6 p-6 pt-4">
          {/* Left Column - Photos */}
          <div className="space-y-4">
            {/* Primary Photo */}
            <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-br from-[#D4C5B0] via-[#C5B8A5] to-[#A89B8C] aspect-[4/5]">
              {/* Abstract profile shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute w-44 h-44 rounded-full bg-[#8B9DAF]/60 top-4 left-2" />
                  <div className="absolute w-24 h-24 rounded-full bg-[#4A2030]/70 top-0 right-4" />
                  <div className="absolute w-32 h-32 rounded-full bg-[#053560]/50 bottom-0 left-6" />
                </div>
              </div>

              {/* Photo badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-[#053560]">
                  {user.photoCount} approved photos
                </span>
                {user.premium === "premium" && (
                  <span className="rounded-full bg-[#053560] px-3 py-1 text-[11px] font-semibold text-white">
                    Premium
                  </span>
                )}
              </div>

              {/* Photo label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-white">
                  Primary profile photo
                </p>
                <p className="text-xs text-white/70">Approved upload</p>
              </div>
            </div>

            {/* Additional Photos Grid */}
            <div className="grid grid-cols-3 gap-3">
              {["Warm light", "Full body", "Traditional"].map(
                (label, index) => (
                  <div
                    key={label}
                    className="rounded-[14px] overflow-hidden bg-gradient-to-br from-[#B8C5D6] to-[#8B9DAF] aspect-square relative"
                  >
                    {/* Small abstract shapes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-10 h-10 rounded-full"
                        style={{
                          backgroundColor:
                            index === 0
                              ? "#053560"
                              : index === 1
                              ? "#4A2030"
                              : "#053560",
                          opacity: 0.6,
                        }}
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-[10px] font-semibold text-white truncate">
                        {label}
                      </p>
                      <p className="text-[9px] text-white/70 truncate">
                        Approved upload
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Photo Notes */}
            <div className="rounded-[16px] bg-[#F0EDE6] p-4">
              <p className="text-xs font-semibold text-[#053560] mb-1">
                Photo notes
              </p>
              <p className="text-xs text-[#6F6457] leading-relaxed">
                All uploads cleared for policy. Compare styling, pose, and
                identity confidence before escalating.
              </p>
            </div>
          </div>

          {/* Right Column - Profile Info */}
          <div className="space-y-5">
            {/* Profile Summary */}
            <div className="rounded-[20px] border border-[#E9E4DB] bg-white p-5">
              <h3 className="text-lg font-bold text-[#053560] mb-1">
                Profile summary
              </h3>
              <p className="text-xs text-[#6F6457] mb-4">
                Expanded operator context for identity, intent, and account
                posture.
              </p>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="rounded-full border border-[#053560] bg-white px-3 py-1 text-[11px] font-semibold text-[#053560]">
                  Verified identity
                </span>
                {user.premium === "premium" && (
                  <span className="rounded-full border border-[#053560] bg-[#053560] px-3 py-1 text-[11px] font-semibold text-white">
                    Premium
                  </span>
                )}
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                    statusBadgeStyles[user.status] || statusBadgeStyles.open
                  }`}
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Faith
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.faith}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Status
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}{" "}
                    •{" "}
                    {user.status === "hibernate"
                      ? "hibernating"
                      : "not hibernating"}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Goals
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.goals}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Dating state
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.datingState}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Education
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.education}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Location
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.location} • verified
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="rounded-[20px] border border-[#E9E4DB] bg-white p-5">
              <h3 className="text-sm font-bold text-[#053560] mb-3">
                Additional details
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">Sex</p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.sex === "F" ? "Female" : "Male"}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Job title
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.jobTitle}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Tribe / ethnic group
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.tribe}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Wants children
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.wantsChildren}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Relocation openness
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.relocationOpenness}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Onboarding stage
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.stage.charAt(0).toUpperCase() + user.stage.slice(1)}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust & Moderation */}
            <div className="rounded-[20px] border border-[#E9E4DB] bg-white p-5">
              <h3 className="text-lg font-bold text-[#053560] mb-1">
                Trust & moderation
              </h3>
              <p className="text-xs text-[#6F6457] mb-4">
                Signals most relevant before escalating or approving profile
                changes.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Identity check
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.identityCheck}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Health proof
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.healthProof}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Photo review
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.photoReview}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6F6457] font-medium">
                    Premium payment
                  </p>
                  <p className="text-[13px] font-semibold text-[#1A1D21]">
                    {user.premiumPayment}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button className="rounded-full border border-[#E9E4DB] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#053560] hover:bg-[#F0EDE6] transition-colors">
                Inspect documents
              </button>
              <button className="rounded-full border border-[#E8B4B8] bg-[#FFF5F5] px-5 py-2.5 text-[13px] font-semibold text-[#C62828] hover:bg-[#FFEBEE] transition-colors">
                Report profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
