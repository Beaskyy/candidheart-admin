"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { VerificationReviewStats } from "@/components/verification-review-stats";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useParams } from "next/navigation";

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
              <div className="space-y-6">
                <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-6">
                  <h3 className="text-lg font-bold text-[#053560] mb-1">
                    Uploaded selfie
                  </h3>
                  <p className="text-xs text-[#6F6457] mb-6">
                    Review face visibility, liveness, and confidence signals before approving the submitted document.
                  </p>

                  <div className="relative rounded-[20px] bg-[#EBF3FF] aspect-square flex items-center justify-center overflow-hidden mb-4 border border-[#DCE8F7]">
                    {/* Abstract User Icon (Placeholder for the image in the mockup) */}
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full bg-[#053560] bottom-[-20%] scale-x-125" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-[#D4C5B0]" />
                      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#1A1D21]" />
                        <div className="w-2 h-2 rounded-full bg-[#1A1D21]" />
                      </div>
                    </div>
                    
                    <span className="absolute top-4 left-4 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-[#053560]">
                      Selfie upload
                    </span>
                    <span className="absolute top-4 right-4 rounded-full bg-[#053560] px-3 py-1 text-[11px] font-bold text-white flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#053560] text-center">
                    {userData.name} • front camera selfie
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#FAF8F3] border border-[#E9E4DB] p-6 space-y-4">
                  <div>
                    <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">
                      Liveness signal
                    </p>
                    <p className="text-sm font-semibold text-[#053560]">
                      {userData.liveness}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">
                      Captured on
                    </p>
                    <p className="text-sm font-semibold text-[#053560]">
                      {userData.captured}
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2: Government Document */}
              <div className="space-y-6">
                <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-6">
                  <h3 className="text-lg font-bold text-[#053560] mb-1">
                    Government document
                  </h3>
                  <p className="text-xs text-[#6F6457] mb-6">
                    Inspect the uploaded ID, OCR extraction, and any mismatch flags before approving.
                  </p>

                  <div className="relative rounded-[20px] bg-[#F8F9FA] aspect-[4/3] flex items-center justify-center overflow-hidden mb-4 border border-[#E9E4DB]">
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
                    <span className="absolute top-4 left-4 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-[#B05A35]">
                      {userData.docType}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#053560] text-center">
                    National ID • front document scan
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#FAF8F3] border border-[#E9E4DB] p-6 space-y-4">
                  <div>
                    <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">
                      OCR full name
                    </p>
                    <p className="text-sm font-semibold text-[#053560]">
                      {userData.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">
                      DOB extracted
                    </p>
                    <p className="text-sm font-semibold text-[#053560]">
                      {userData.dob}
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 3: Decision Panel */}
              <div className="rounded-[24px] border border-[#E9E4DB] bg-white p-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#053560] mb-1">
                    Decision panel
                  </h3>
                  <p className="text-xs text-[#6F6457] mb-6">
                    Everything needed to approve the uploaded document and close the identity check.
                  </p>
                  
                  <h2 className="text-[28px] font-bold text-[#053560] mb-4">
                    {userData.name}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="rounded-full bg-[#FFF3E0] text-[#E65100] border border-[#FFCC80] px-3 py-1 text-[11px] font-bold">
                      ID pending
                    </span>
                    <span className="rounded-full bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7] px-3 py-1 text-[11px] font-bold">
                      Selfie matched
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">Profile ID</p>
                      <p className="text-sm font-semibold text-[#053560]">{userData.profileId}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">Document type</p>
                      <p className="text-sm font-semibold text-[#053560]">{userData.docType}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">Document status</p>
                      <p className="text-sm font-semibold text-[#053560]">{userData.docStatus}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">Selfie confidence</p>
                      <p className="text-sm font-semibold text-[#053560]">{userData.selfieConfidence}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">OCR result</p>
                      <p className="text-sm font-semibold text-[#053560]">{userData.ocrResult}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#6F6457] mb-1 uppercase tracking-wider">Risk notes</p>
                      <p className="text-sm font-semibold text-[#053560]">{userData.riskNotes}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <button className="w-full rounded-full bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] py-3 text-[13px] font-bold hover:bg-[#A5D6A7]/20 transition-all">
                    Approve document
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="rounded-full bg-[#FFEBEE] text-[#C62828] border border-[#EF9A9A] py-3 text-[13px] font-bold hover:bg-[#EF9A9A]/20 transition-all">
                      Reject
                    </button>
                    <button className="rounded-full bg-[#FFF3E0] text-[#E65100] border border-[#FFCC80] py-3 text-[13px] font-bold hover:bg-[#FFCC80]/20 transition-all">
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
