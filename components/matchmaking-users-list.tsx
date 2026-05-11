"use client";

import { useAdminMatches } from "@/hooks/use-admin-api";
import { AdminMatch } from "@/types/api";

export function MatchmakingUsersList() {
  const { data: response, isLoading } = useAdminMatches({});
  const matchmakingUsers = response?.results || [];

  return (
    <div className="rounded-[24px] border border-[#E9E4DB] bg-white overflow-hidden">
      <div className="px-8 pt-7 pb-5">
        <h2 className="text-[22px] font-bold text-[#053560]">Users list</h2>
        <p className="text-sm text-[#6F6457] mt-1">
          Filtered roster below reflects the currently selected relationship status.
        </p>
      </div>

      <div className="px-4 pb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F0EDE6]">
                <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#053560]">User</th>
                <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#053560]">Partner</th>
                <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#053560]">Status</th>
                <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#053560]">Last activity</th>
                <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#053560]">Owner</th>
                <th className="px-4 py-4 text-left text-[12px] font-semibold text-[#053560]">Notes / next step</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EDE6]">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-sm text-[#6F6457]">
                    Loading matches...
                  </td>
                </tr>
              ) : matchmakingUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-sm text-[#6F6457]">
                    No matches found.
                  </td>
                </tr>
              ) : (
                matchmakingUsers.map((item: AdminMatch) => (
                  <tr key={item.id} className="group hover:bg-[#FAF8F3] transition-colors">
                    <td className="px-4 py-5">
                      <p className="text-[14px] font-bold text-[#053560]">{item.user1_email.split('@')[0]}</p>
                      <p className="text-[12px] text-[#6F6457]">{item.user1_email}</p>
                    </td>
                    <td className="px-4 py-5">
                      <p className="text-[14px] font-bold text-[#053560]">{item.user2_email.split('@')[0]}</p>
                      <p className="text-[12px] text-[#6F6457]">{item.user2_email}</p>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className="rounded-full bg-[#F3F1E3] text-[#053560] border border-[#DCD9C6] px-3 py-1 text-[11px] font-bold capitalize">
                        {item.status.toLowerCase()}
                      </span>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className="text-[13px] font-semibold text-[#053560]">
                        {new Date(item.updated_at).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className="text-[13px] font-semibold text-[#053560]">Unassigned</span>
                    </td>
                    <td className="px-4 py-5 max-w-[280px]">
                      <p className="text-[13px] font-medium text-[#053560] leading-relaxed">
                        Match established. Monitoring interaction quality.
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
