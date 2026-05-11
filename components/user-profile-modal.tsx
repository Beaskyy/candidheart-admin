"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { useAdminUserDetail } from "@/hooks/use-admin-api";
import { AdminUserListItem } from "@/types/api";

interface UserProfileModalProps {
  user: AdminUserListItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const statusBadgeStyles: Record<string, string> = {
  open: "bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]",
  hibernate: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]",
  blocked: "bg-[#FFEBEE] text-[#C62828] border-[#EF9A9A]",
};

export function UserProfileModal({
  user: basicUser,
  isOpen,
  onClose,
}: UserProfileModalProps) {
  const { data: detail, isLoading } = useAdminUserDetail(basicUser?.id || "");

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

  if (!isOpen || !basicUser) return null;

  const displayUser = detail || basicUser;
  const fullName = detail ? `${detail.first_name} ${detail.last_name}` : basicUser.name;
  const status = displayUser.status.toLowerCase();
  const isPremium = displayUser.is_premium;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center lg:pl-[236px] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Profile for ${fullName}`}
    >
      {/* Backdrop with opacity */}
      <div
        className="absolute inset-0 bg-[#053560]/30 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[1004px] max-h-[90vh] overflow-y-auto rounded-[24px] bg-white border border-[#E7E0D4] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-2">
          <div>
            <p className="text-xs text-[#6F6457] font-semibold mb-1">
              Full profile dialog
            </p>
            <h2 className="md:text-[32px] text-[24px] font-bold text-[#053560]">
              {isLoading ? "Loading..." : fullName}
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
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 p-6 pt-4">
          {/* Left Column - Photos */}
          <div className="space-y-4 bg-[#FCFBF7] border border-[#E7E0D4] rounded-[24px] p-4 h-fit">
            {/* Primary Photo */}
            <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-br from-[#F3EDE0] via-[#E9E5D9] to-[#D8D1C5] aspect-[4/5] h-[390px] w-full">
              {detail?.main_image ? (
                 <img src={detail.main_image} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <div className="absolute w-44 h-44 rounded-full bg-[#8B9DAF]/60 top-4 left-2" />
                    <div className="absolute w-24 h-24 rounded-full bg-[#4A2030]/70 top-0 right-4" />
                    <div className="absolute w-32 h-32 rounded-full bg-[#053560]/50 bottom-0 left-6" />
                  </div>
                </div>
              )}

              {/* Photo badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="h-7 bg-white border border-[#E7E0D4] rounded-full px-3 py-1 text-xs font-medium text-[#053560]">
                  {detail?.other_images?.length || 0} approved photos
                </span>
                {isPremium && (
                  <span className="h-7 bg-[#F4E7EB] border border-[#E6C8D3] rounded-full px-3 py-1 text-xs font-medium text-[#63203A] ml-20">
                    Premium
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-[72px] bg-[#053560B8] w-full flex justify-center flex-col p-4">
                <p className="text-sm font-semibold text-white">
                  Primary profile photo
                </p>
                <p className="text-xs text-white">{detail?.verification?.id_verified ? "Approved upload" : "Pending review"}</p>
              </div>
            </div>

            {/* Additional Photos Grid */}
            <div className="grid grid-cols-3 gap-4">
              {(detail?.other_images || ["", "", ""]).slice(0, 3).map(
                (url, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] overflow-hidden bg-gradient-to-br from-[#B8C5D6] to-[#8B9DAF] aspect-square relative h-[116px] w-[96px]"
                  >
                    {url ? (
                      <img src={url} alt={`Other ${index}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-10 h-10 rounded-full"
                          style={{
                            backgroundColor: index === 0 ? "#053560" : index === 1 ? "#4A2030" : "#053560",
                            opacity: 0.6,
                          }}
                        />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-[32px] bg-[#053560B8] p-2 flex items-center justify-center">
                      <p className="text-[10px] font-semibold text-white truncate">
                        Upload {index + 1}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Photo Notes */}
            <div className="rounded-[24px] bg-[#FCFBF7] border border-[#E7E0D4] p-4">
              <p className="text-xs font-semibold text-[#6F6457] mb-1">
                Photo notes
              </p>
              <p className="text-[13px] text-[#053560]">
                All uploads cleared for policy. Compare styling, pose, and
                identity confidence before escalating.
              </p>
            </div>
          </div>

          {/* Right Column - Profile Info */}
          <div className="space-y-5">
            {/* Profile Summary */}
            <div className="rounded-[24px] bg-[#FCFBF7] border border-[#E9E4DB] p-5">
              <h3 className="text-lg md:text-xl font-bold text-[#053560] mb-1">
                Profile summary
              </h3>
              <p className="text-[13px] text-[#6F6457] mb-4">
                Expanded operator context for identity, intent, and account
                posture.
              </p>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {displayUser.id_verified && (
                  <span className="rounded-full border border-[#1F6B4F] bg-[#E4F2EA] px-3 py-1 text-xs font-medium text-[#1F6B4F]">
                    Verified identity
                  </span>
                )}
                {isPremium && (
                  <span className="rounded-full border border-[#E6C8D3] bg-[#F4E7EB] px-3 py-1 text-xs font-medium text-[#63203A]">
                    Premium
                  </span>
                )}
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                    statusBadgeStyles[status] || statusBadgeStyles.open
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-xs text-[#6F6457] font-semibold">Stage</p>
                  <p className="text-sm font-medium text-[#053560]">
                    {displayUser.onboarding_stage}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#6F6457] font-semibold">Status</p>
                  <p className="text-sm font-medium text-[#053560]">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#6F6457] font-semibold">Location</p>
                  <p className="text-sm font-medium text-[#053560]">
                    {displayUser.location || displayUser.country}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#6F6457] font-semibold">
                    Sex
                  </p>
                  <p className="text-sm font-medium text-[#053560]">
                    {displayUser.gender}
                  </p>
                </div>
              </div>
              
              <hr className="my-6 border-t border-[#E7E0D4]" />
              
              <h3 className="text-sm font-bold text-[#053560] mb-3">
                Account Stats
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-xs text-[#6F6457] font-semibold">Payments</p>
                  <p className="text-sm font-medium text-[#053560]">
                    {detail?.stats?.payment_count || 0} transactions
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#6F6457] font-semibold">Matches</p>
                  <p className="text-sm font-medium text-[#053560]">
                    {detail?.stats?.match_count || 0} active matches
                  </p>
                </div>
              </div>
            </div>

            {/* Trust & Moderation */}
            <div className="rounded-[20px] border border-[#E9E4DB] bg-white p-5">
              <h3 className="text-lg md:text-xl font-bold text-[#053560] mb-1">
                Trust & moderation
              </h3>
              <p className="text-[13px] text-[#6F6457] mb-4">
                Signals most relevant before escalating or approving profile
                changes.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-xs text-[#6F6457] font-semibold">
                    Identity check
                  </p>
                  <p className="text-sm font-medium text-[#053560]">
                    {detail?.verification?.id_verified ? "Complete • Verified" : "Pending review"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#6F6457] font-semibold">
                    Premium state
                  </p>
                  <p className="text-sm font-medium text-[#053560]">
                    {isPremium ? "Active Premium" : "Standard Account"}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button className="rounded-full border border-[#E7DED1] bg-[#F5F0E8] px-5 py-2.5 text-[13px] font-semibold text-[#6F6457] hover:bg-[#F0EDE6] transition-colors">
                Inspect documents
              </button>
              <button className="rounded-full border border-[#E6C8D3] bg-[#F4E7EB] px-5 py-2.5 text-[13px] font-semibold text-[#63203A] hover:bg-[#F4E7EBA1] transition-colors">
                Report profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
