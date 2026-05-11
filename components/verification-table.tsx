"use client";

import { useAdminUsers } from "@/hooks/use-admin-api";
import { AdminUserListItem } from "@/types/api";
import { useRouter } from "next/navigation";

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

export function VerificationTable() {
  const router = useRouter();
  const { data: response, isLoading } = useAdminUsers({});
  const users = response?.results || [];

  return (
    <div className="rounded-[24px] border border-[#E7E0D4] bg-white overflow-hidden">
      {/* Table Header */}
      <div className="px-6 pt-6">
        <h2 className="text-xl font-bold text-[#053560]">Users</h2>
        <p className="text-[13px] text-[#6F6457] my-1">
          Wide operator table with demographic, contact, and account-state fields for faster review.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto pl-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#EEE7DC]">
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Full name
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Age
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Sex
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Stage
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Status
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Premium
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Email
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Phone
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Location
              </th>
              <th className="py-1 text-left text-[12px] font-semibold text-[#6F6457] whitespace-nowrap">
                Last active
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EDE6]">
            {isLoading ? (
              <tr>
                <td colSpan={10} className="py-10 text-center text-sm text-[#6F6457]">
                  Loading users...
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={10} className="py-10 text-center text-sm text-[#6F6457]">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user: AdminUserListItem) => {
                const statusBadge = statusBadgeConfig[user.status.toLowerCase()] || statusBadgeConfig.open;
                const premiumBadge = user.is_premium ? premiumBadgeConfig.premium : premiumBadgeConfig.standard;

                return (
                  <tr
                    key={user.id}
                    onClick={() => router.push(`/verification/${user.id}`)}
                    className="cursor-pointer transition-colors hover:bg-[#FAF8F3] group"
                  >
                    <td className="py-5">
                      <span className="text-sm font-semibold text-[#053560] group-hover:text-[#053560]/80">
                        {user.first_name} {user.last_name}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="text-sm text-[#6F6457]">
                        {user.age || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="text-sm text-[#6F6457]">
                        {user.gender?.charAt(0) || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="text-sm text-[#6F6457]">
                        {user.onboarding_stage || user.stage || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${statusBadge.className}`}
                      >
                        {statusBadge.label}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${premiumBadge.className}`}
                      >
                        {premiumBadge.label}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="text-sm text-[#6F6457] font-medium">
                        {user.email}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="text-sm text-[#6F6457] font-medium whitespace-nowrap">
                        {user.phone_number || user.phone || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="text-sm text-[#6F6457] font-medium">
                        {user.location || user.country || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="text-sm text-[#6F6457] font-medium whitespace-nowrap">
                        {user.last_active ? new Date(user.last_active).toLocaleDateString() : "N/A"}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="h-4" />
    </div>
  );
}
