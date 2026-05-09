"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { VerificationReviewStats } from "@/components/verification-review-stats";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function VerificationReviewPage() {
  const params = useParams();
  const userId = params.id;

  // Placeholder data for Julian Heart (as seen in image)
  const userData = {
    name: "Julian Heart",
    profileId: "CH-2081",
    docType: "National ID card",
    docStatus: "Ready for approval",
    selfieConfidence: "94% similarity • liveness passed",
    ocrResult: "Name and DOB matched profile",
    riskNotes: "No prior escalations or conduct flags",
    dob: "14 Aug 1996 • document valid",
    liveness: "High • blink + pose check passed",
    captured: "iPhone 14 Pro • uploaded 39 mins ago",
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#FCFBF7]">
        <DashboardHeader />
        <main className="flex-1 overflow-auto px-4 md:px-8 pb-8">
          <div className="max-w-[1400px] mx-auto space-y-6 pt-4">
            {/* Stats Row */}
            <VerificationReviewStats />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Column 1: Uploaded Selfie */}
              <div className="h-full">
                <div className="rounded-[24px] border border-[#E7E0D4] bg-white p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-[#053560] mb-1">
                    Uploaded selfie
                  </h3>
                  <p className="text-[13px] text-[#6F6457] mb-2">
                    Review face visibility, liveness, and confidence signals
                    before approving the submitted document.
                  </p>

                  <div className="bg-[#FCFBF7] border border-[#EEE7DC] rounded-[18px] p-6">
                    <span className="flex justify-center items-center w-[99px] text-xs rounded-full bg-[#F5ECE2] border border-[#E9D0BE] px-3 py-1 text-xs font-medium whitespace-nowrap text-[#A7653D] h-7">
                      Selfie upload
                    </span>

                    <div className="relative w-[250px] h-[230px] mt-4">
                      <Image
                        src="/selfie.svg"
                        alt="selfie"
                        className="absolute object-cover object-center"
                        fill
                      />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[#053560]">
                      {userData.name} • front camera selfie
                    </p>
                  </div>

                  <div className="rounded-[24px] bg-[#FCFBF7] border border-[#EEE7DC] p-6 space-y-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Liveness signal
                      </p>
                      <p className="text-sm text-[#053560]">
                        {userData.liveness}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Captured on
                      </p>
                      <p className="text-sm text-[#053560]">
                        {userData.captured}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Government Document */}
              <div className="h-full">
                <div className="rounded-[24px] border border-[#E7E0D4] bg-white p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-[#053560] mb-1">
                    Government document
                  </h3>
                  <p className="text-[13px] text-[#6F6457] mb-2">
                    Inspect the uploaded ID, OCR extraction, and any mismatch
                    flags before approving.
                  </p>

                  <div className="bg-[#FCFBF7] border border-[#EEE7DC] rounded-[18px] p-6 mt-4">
                    <span className="flex justify-center items-center w-[116px] text-xs rounded-full bg-[#F5ECE2] border border-[#E9D0BE] px-3 py-1 text-xs font-medium whitespace-nowrap text-[#A7653D] h-7">
                      National ID card
                    </span>
                    <div className="relative rounded-[20px] bg-[#F8F9FA] aspect-[4/3] flex items-center justify-center overflow-hidden mb-4 border border-[#EEE7DC] mt-4">
                      {/* Mockup ID Card */}
                      <div className="w-4/5 h-3/5 bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex gap-4">
                        <div className="w-16 h-20 bg-[#D4C5B0]/30 rounded-md" />
                        <div className="flex-1 space-y-2 py-1">
                          <div className="h-2 w-full bg-[#E9E4DB] rounded" />
                          <div className="h-2 w-3/4 bg-[#E9E4DB] rounded" />
                          <div className="h-2 w-1/2 bg-[#E9E4DB] rounded" />
                          <div className="h-2 w-full bg-[#E9E4DB] rounded" />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-[#053560] text-center">
                      National ID • front document scan
                    </p>
                  </div>

                  <div className="rounded-[24px] bg-[#FCFBF7] border border-[#EEE7DC] p-6 space-y-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        OCR full name
                      </p>
                      <p className="text-sm text-[#053560]">{userData.name}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        DOB extracted
                      </p>
                      <p className="text-sm text-[#053560]">{userData.dob}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Decision Panel */}
              <div className="lg:min-w-[396px] rounded-[24px] border border-[#E7E0D4] bg-white p-6 h-full flex flex-col justify-between">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#053560] mb-1">
                    Decision panel
                  </h3>
                  <p className="text-[13px] text-[#6F6457] ">
                    Everything needed to approve the uploaded document and close
                    the identity check.
                  </p>

                  <h2 className="text-[28px] font-bold text-[#053560] mb-2">
                    {userData.name}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-10">
                    <span className="flex justify-center items-center rounded-full bg-[#F5ECE2] text-[#A7653D] border border-[#E9D0BE] px-3 py-1 text-xs font-medium h-7">
                      ID pending
                    </span>
                    <span className="flex justify-center items-center rounded-full bg-[#E4F2EA] text-[#1F6B4F] border border-[#B9DCCB] px-3 py-1 text-xs font-medium h-7">
                      Selfie matched
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Profile ID
                      </p>
                      <p className="text-sm text-[#053560]">
                        {userData.profileId}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Document type
                      </p>
                      <p className="text-sm text-[#053560]">
                        {userData.docType}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Document status
                      </p>
                      <p className="text-sm text-[#053560]">
                        {userData.docStatus}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Selfie confidence
                      </p>
                      <p className="text-sm text-[#053560]">
                        {userData.selfieConfidence}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        OCR result
                      </p>
                      <p className="text-sm text-[#053560]">
                        {userData.ocrResult}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Risk notes
                      </p>
                      <p className="text-sm text-[#053560]">
                        {userData.riskNotes}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-10">
                  <div className="flex justify-center itemse-center gap-3 w-full">
                    <button className="px-6 flex justify-center items-center rounded-full bg-[#E4F2EA] text-[#1F6B4F] border border-[#B9DCCB] py-3 text-xs font-medium hover:bg-[#E4F2EA] hover:text-[#1F6B4F] transition-all h-7 whitespace-nowrap w-[134px]">
                      Approve document
                    </button>
                    <button className="rounded-full bg-[#F4E7EB] text-[#63203A] border border-[#E6C8D3] py-3 text-xs flex justify-center items-center font-medium hover:bg-[#F4E7EB] hover:text-[#63203A] transition-all h-7 px-6 w-[60px]">
                      Reject
                    </button>
                    <button className="rounded-full bg-[#F5ECE2] text-[#A7653D] border border-[#E9D0BE] py-3 text-xs flex justify-center items-center font-medium hover:bg-[#F5ECE2] hover:text-[#A7653D] transition-all h-7 whitespace-nowrap px-6 w-[125px]">
                      Request reupload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
