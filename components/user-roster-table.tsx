"use client";

import { useState } from "react";
import { UserProfileModal } from "./user-profile-modal";
import { useAdminUsers } from "@/hooks/use-admin-api";
import { AdminUserListItem } from "@/types/api";

const statusBadgeConfig: Record<
  string,
  { label: string; className: string }
> = {
  open: {
    label: "open",
    className: "bg-[#E6EEF7] text-[#053560] border-[#C7D7EA]",
  },
  hibernate: {
    label: "hibernate",
    className: "bg-[#F5ECE2] text-[#A7653D] border-[#E9D0BE]",
  },
  dating: {
    label: "dating",
    className: "bg-[#F4E7EB] text-[#63203A] border-[#E6C8D3]",
  },
  blocked: {
    label: "blocked",
    className: "bg-[#F4E7EB] text-[#63203A] border-[#E6C8D3]",
  },
};

const premiumBadgeConfig: Record<
  string,
  { label: string; className: string }
> = {
  premium: {
    label: "premium",
    className: "bg-[#F4E7EB] text-[#63203A] border-[#E6C8D3]",
  },
  standard: {
    label: "standard",
    className: "bg-[#F5F0E8] text-[#6E6252] border-[#E7DED1]",
  },
};

export function UserRosterTable({ search }: { search?: string }) {
  const [page, setPage] = useState(1);
  const { data: response, isLoading } = useAdminUsers({ page, search });
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  const users = response?.results || [];

  return (
    <>
      <div className="rounded-[24px] border border-[#E7E0D4] bg-white overflow-hidden">
        {/* Table Header */}
        <div className="px-6 pt-5 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#053560]">User roster</h2>
            <p className="text-xs md:text-[13px] text-[#6F6457] mt-1">
              Wide operator table with demographic, contact, and account-state
              fields for faster review.
            </p>
          </div>
          
          {/* Simple Pagination Controls */}
          <div className="flex items-center gap-2">
            <button 
              disabled={page === 1 || isLoading}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="px-3 py-1 text-xs font-semibold text-[#053560] border border-[#E7E0D4] rounded-lg disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-xs font-bold text-[#6F6457]">Page {page} of {response?.total_pages || 1}</span>
            <button 
              disabled={page >= (response?.total_pages || 1) || isLoading}
              onClick={() => setPage(p => p + 1)}
              className="px-3 py-1 text-xs font-semibold text-[#053560] border border-[#E7E0D4] rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Full name
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Age
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Sex
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Stage
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Status
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Premium
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Email
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Phone
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Location
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-[#6F6457] whitespace-nowrap">
                  Last active
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={10} className="px-6 py-10 text-center text-sm text-[#6F6457]">
                    Loading user roster...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-6 py-10 text-center text-sm text-[#6F6457]">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user: AdminUserListItem) => {
                  const statusKey = user.status.toLowerCase();
                  const statusBadge = statusBadgeConfig[statusKey] || statusBadgeConfig.open;
                  const premiumKey = user.payment_plan.toLowerCase();
                  const premiumBadge = premiumBadgeConfig[premiumKey] || premiumBadgeConfig.standard;
                  const lastActiveDate = user.last_active ? new Date(user.last_active) : null;
                  const timeAgo = lastActiveDate ? `${Math.floor((Date.now() - lastActiveDate.getTime()) / 60000)}m ago` : "N/A";

                  return (
                    <tr
                      key={user.id}
                      onClick={() => setSelectedUser(user)}
                      className="border-t border-[#F0EDE6] cursor-pointer transition-colors hover:bg-[#FAF8F3] group"
                    >
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-[#053560] group-hover:text-[#053560]/80">
                          {user.first_name} {user.last_name}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-[13px] text-[#6F6457]">
                          {user.age}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-[13px] text-[#6F6457]">
                          {user.gender?.charAt(0).toUpperCase()}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-[13px] text-[#6F6457]">
                          {user.onboarding_stage}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusBadge.className}`}
                        >
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${premiumBadge.className}`}
                        >
                          {premiumBadge.label}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-[13px] font-medium text-[#6F6457]">
                          {user.email}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-[13px] font-medium text-[#6F6457] whitespace-nowrap">
                          {user.phone_number}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-[13px] font-medium text-[#6F6457]">
                          {user.location || user.country}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-[13px] font-medium text-[#6F6457] whitespace-nowrap">
                          {timeAgo}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Profile Modal */}
      <UserProfileModal
        user={selectedUser}
        isOpen={selectedUser !== null}
        onClose={() => setSelectedUser(null)}
      />
    </>
  );
}
