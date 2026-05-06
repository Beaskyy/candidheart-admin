"use client";

import { useState } from "react";
import { UserProfileModal } from "./user-profile-modal";

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

const users: UserData[] = [
  {
    id: 1,
    fullName: "Julian Heart",
    age: 29,
    sex: "F",
    stage: "complete",
    status: "open",
    premium: "premium",
    email: "julian@candidheart.app",
    phone: "+234 803 445 2210",
    location: "Lagos",
    lastActive: "12m ago",
    faith: "Christian • Pentecostal",
    goals: "Marriage in 1 year",
    education: "BSc • Product Design",
    datingState: "No active dating lock",
    jobTitle: "Product designer",
    tribe: "Yoruba",
    wantsChildren: "Yes",
    relocationOpenness: "Maybe",
    photoCount: 3,
    identityCheck: "Complete • selfie matched",
    healthProof: "Genotype AA • verified",
    photoReview: "3 uploads • all approved",
    premiumPayment: "Active • renewal tracked",
  },
  {
    id: 2,
    fullName: "Esther Femi",
    age: 26,
    sex: "F",
    stage: "photos",
    status: "hibernate",
    premium: "standard",
    email: "esther.femi@candidheart.app",
    phone: "+234 810 552 9931",
    location: "Abuja",
    lastActive: "1h ago",
    faith: "Christian • Anglican",
    goals: "Marriage in 2 years",
    education: "MSc • Biochemistry",
    datingState: "Paused dating",
    jobTitle: "Research scientist",
    tribe: "Igbo",
    wantsChildren: "Yes",
    relocationOpenness: "No",
    photoCount: 2,
    identityCheck: "Complete • selfie matched",
    healthProof: "Genotype AS • verified",
    photoReview: "2 uploads • all approved",
    premiumPayment: "Not subscribed",
  },
  {
    id: 3,
    fullName: "Grace Nnaji",
    age: 31,
    sex: "F",
    stage: "complete",
    status: "open",
    premium: "premium",
    email: "grace.nnaji@candidheart.app",
    phone: "+234 814 201 6628",
    location: "Enugu",
    lastActive: "5m ago",
    faith: "Christian • Catholic",
    goals: "Marriage in 6 months",
    education: "MBA • Finance",
    datingState: "Active dating",
    jobTitle: "Financial analyst",
    tribe: "Igbo",
    wantsChildren: "Yes",
    relocationOpenness: "Yes",
    photoCount: 4,
    identityCheck: "Complete • selfie matched",
    healthProof: "Genotype AA • verified",
    photoReview: "4 uploads • all approved",
    premiumPayment: "Active • renewal tracked",
  },
  {
    id: 4,
    fullName: "Mariam Bello",
    age: 28,
    sex: "F",
    stage: "faith",
    status: "open",
    premium: "standard",
    email: "mariam.bello@candidheart.app",
    phone: "+234 802 118 4475",
    location: "Kaduna",
    lastActive: "18m ago",
    faith: "Muslim • Sunni",
    goals: "Marriage in 1 year",
    education: "BEng • Civil Engineering",
    datingState: "No active dating lock",
    jobTitle: "Civil engineer",
    tribe: "Hausa",
    wantsChildren: "Yes",
    relocationOpenness: "Maybe",
    photoCount: 3,
    identityCheck: "Complete • selfie matched",
    healthProof: "Genotype AA • verified",
    photoReview: "3 uploads • all approved",
    premiumPayment: "Not subscribed",
  },
  {
    id: 5,
    fullName: "Daniel Obi",
    age: 33,
    sex: "M",
    stage: "complete",
    status: "blocked",
    premium: "standard",
    email: "daniel.obi@candidheart.app",
    phone: "+234 809 300 1135",
    location: "Port Harcourt",
    lastActive: "2d ago",
    faith: "Christian • Pentecostal",
    goals: "Serious relationship",
    education: "BSc • Computer Science",
    datingState: "Account blocked",
    jobTitle: "Software engineer",
    tribe: "Igbo",
    wantsChildren: "Maybe",
    relocationOpenness: "Yes",
    photoCount: 2,
    identityCheck: "Incomplete • needs review",
    healthProof: "Not submitted",
    photoReview: "2 uploads • 1 flagged",
    premiumPayment: "Not subscribed",
  },
  {
    id: 6,
    fullName: "Naomi Ade",
    age: 27,
    sex: "F",
    stage: "preferences",
    status: "open",
    premium: "premium",
    email: "naomi.ade@candidheart.app",
    phone: "+234 816 904 2207",
    location: "Ibadan",
    lastActive: "9m ago",
    faith: "Christian • Methodist",
    goals: "Marriage in 1 year",
    education: "BSc • Psychology",
    datingState: "No active dating lock",
    jobTitle: "HR manager",
    tribe: "Yoruba",
    wantsChildren: "Yes",
    relocationOpenness: "Maybe",
    photoCount: 3,
    identityCheck: "Complete • selfie matched",
    healthProof: "Genotype AA • verified",
    photoReview: "3 uploads • all approved",
    premiumPayment: "Active • renewal tracked",
  },
  {
    id: 7,
    fullName: "Samuel Udo",
    age: 30,
    sex: "M",
    stage: "health",
    status: "open",
    premium: "standard",
    email: "samuel.udo@candidheart.app",
    phone: "+234 813 664 5090",
    location: "Uyo",
    lastActive: "34m ago",
    faith: "Christian • Presbyterian",
    goals: "Marriage in 2 years",
    education: "BSc • Medicine",
    datingState: "No active dating lock",
    jobTitle: "Medical doctor",
    tribe: "Ibibio",
    wantsChildren: "Yes",
    relocationOpenness: "No",
    photoCount: 2,
    identityCheck: "Complete • selfie matched",
    healthProof: "Pending submission",
    photoReview: "2 uploads • all approved",
    premiumPayment: "Not subscribed",
  },
];

const statusBadgeConfig: Record<
  string,
  { label: string; className: string }
> = {
  open: {
    label: "open",
    className: "bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]",
  },
  hibernate: {
    label: "hibernate",
    className: "bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]",
  },
  blocked: {
    label: "blocked",
    className: "bg-[#FFEBEE] text-[#C62828] border-[#EF9A9A]",
  },
};

const premiumBadgeConfig: Record<
  string,
  { label: string; className: string }
> = {
  premium: {
    label: "premium",
    className: "bg-[#053560] text-white border-[#053560]",
  },
  standard: {
    label: "standard",
    className: "bg-[#F0EDE6] text-[#6F6457] border-[#E0DBD1]",
  },
};

// Stage badge styling - matches the "dating" label in the design
const stageBadgeConfig: Record<string, string> = {
  complete: "",
  photos: "",
  faith: "",
  preferences: "",
  health: "",
};

export function UserRosterTable() {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  return (
    <>
      <div className="rounded-[24px] border border-[#E9E4DB] bg-white overflow-hidden">
        {/* Table Header */}
        <div className="px-6 pt-5 pb-3">
          <h2 className="text-xl font-bold text-[#053560]">User roster</h2>
          <p className="text-xs text-[#6F6457] mt-1">
            Wide operator table with demographic, contact, and account-state
            fields for faster review.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-[#E9E4DB]">
                <th className="px-6 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Full name
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Age
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Sex
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Stage
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Status
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Premium
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Email
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Phone
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Location
                </th>
                <th className="px-3 py-3 text-left text-[11px] font-semibold text-[#6F6457] whitespace-nowrap">
                  Last active
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const statusBadge = statusBadgeConfig[user.status] || statusBadgeConfig.open;
                const premiumBadge = premiumBadgeConfig[user.premium] || premiumBadgeConfig.standard;

                return (
                  <tr
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className="border-t border-[#F0EDE6] cursor-pointer transition-colors hover:bg-[#FAF8F3] group"
                  >
                    <td className="px-6 py-4">
                      <span className="text-[13px] font-semibold text-[#053560] group-hover:text-[#053560]/80">
                        {user.fullName}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <span className="text-[13px] text-[#1A1D21]">
                        {user.age}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <span className="text-[13px] text-[#1A1D21]">
                        {user.sex}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <span className="text-[13px] text-[#1A1D21]">
                        {user.stage}
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
                      <span className="text-[12px] text-[#6F6457]">
                        {user.email}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <span className="text-[12px] text-[#6F6457] whitespace-nowrap">
                        {user.phone}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <span className="text-[12px] text-[#6F6457]">
                        {user.location}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <span className="text-[12px] text-[#6F6457] whitespace-nowrap">
                        {user.lastActive}
                      </span>
                    </td>
                  </tr>
                );
              })}
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
