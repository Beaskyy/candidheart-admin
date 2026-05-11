"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { VerificationReviewStats } from "@/components/verification-review-stats";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useAdminUserDetail, useUpdateIdVerification } from "@/hooks/use-admin-api";
import { toast } from "sonner";

export default function VerificationReviewPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id as string;
  
  const { data: user, isLoading } = useAdminUserDetail(userId);
  const updateMutation = useUpdateIdVerification();

  const handleDecision = (id_verified: boolean) => {
    updateMutation.mutate(
      { 
        user_id: userId, 
        id_verified, 
        decision_reason: id_verified ? "Verified by admin." : "Rejected by admin." 
      },
      {
        onSuccess: () => {
          toast.success(`User verification ${id_verified ? "approved" : "rejected"}.`);
          router.push("/users");
        },
        onError: () => {
          toast.error("Failed to update verification status.");
        }
      }
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FCFBF7]">
        <p className="text-[#053560] font-bold">Loading verification details...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FCFBF7]">
        <p className="text-[#053560] font-bold">User not found.</p>
      </div>
    );
  }

  const v = user.verification || {};

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

                    <div className="relative w-[250px] h-[230px] mt-4 rounded-xl overflow-hidden bg-gray-100">
                      {user.main_image ? (
                        <Image
                          src={user.main_image}
                          alt="selfie"
                          className="absolute object-cover object-center"
                          fill
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">No selfie</div>
                      )}
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[#053560]">
                      {user.first_name} {user.last_name} • front camera selfie
                    </p>
                  </div>

                  <div className="rounded-[24px] bg-[#FCFBF7] border border-[#EEE7DC] p-6 space-y-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Liveness signal
                      </p>
                      <p className="text-sm text-[#053560]">
                        {v.liveness_passed ? "High • liveness check passed" : "Pending / Failed"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Captured on
                      </p>
                      <p className="text-sm text-[#053560]">
                        {user.last_active ? new Date(user.last_active).toLocaleString() : "Unknown device"}
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
                      {v.id_document_type || "ID Document"}
                    </span>
                    <div className="relative rounded-[20px] bg-[#F8F9FA] aspect-[4/3] flex items-center justify-center overflow-hidden mb-4 border border-[#EEE7DC] mt-4">
                      {v.id_document_image ? (
                        <Image src={v.id_document_image} alt="ID Document" fill className="object-contain" />
                      ) : (
                        <div className="w-4/5 h-3/5 bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex gap-4">
                          <div className="w-16 h-20 bg-[#D4C5B0]/30 rounded-md" />
                          <div className="flex-1 space-y-2 py-1">
                            <div className="h-2 w-full bg-[#E9E4DB] rounded" />
                            <div className="h-2 w-3/4 bg-[#E9E4DB] rounded" />
                            <div className="h-2 w-1/2 bg-[#E9E4DB] rounded" />
                            <div className="h-2 w-full bg-[#E9E4DB] rounded" />
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#053560] text-center">
                      {v.id_document_type || "ID"} • front document scan
                    </p>
                  </div>

                  <div className="rounded-[24px] bg-[#FCFBF7] border border-[#EEE7DC] p-6 space-y-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        OCR full name
                      </p>
                      <p className="text-sm text-[#053560]">{v.id_full_name || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        DOB extracted
                      </p>
                      <p className="text-sm text-[#053560]">{v.id_dob || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Decision Panel  */}
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
                    {user.first_name} {user.last_name}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-10">
                    <span className="flex justify-center items-center rounded-full bg-[#F5ECE2] text-[#A7653D] border border-[#E9D0BE] px-3 py-1 text-xs font-medium h-7">
                      {user.id_verified ? "ID Verified" : "ID Pending"}
                    </span>
                    <span className="flex justify-center items-center rounded-full bg-[#E4F2EA] text-[#1F6B4F] border border-[#B9DCCB] px-3 py-1 text-xs font-medium h-7">
                      {v.selfie_matched ? "Selfie matched" : "Selfie mismatch"}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Profile ID
                      </p>
                      <p className="text-sm text-[#053560]">
                        CH-{user.id.toString().slice(-4).toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Document type
                      </p>
                      <p className="text-sm text-[#053560]">
                        {v.id_document_type || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Document status
                      </p>
                      <p className="text-sm text-[#053560]">
                        {user.id_verified ? "Approved" : "Ready for approval"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Selfie confidence
                      </p>
                      <p className="text-sm text-[#053560]">
                        {v.selfie_confidence ? `${Math.round(v.selfie_confidence * 100)}% similarity` : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        OCR result
                      </p>
                      <p className="text-sm text-[#053560]">
                        {v.ocr_status || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6F6457] mb-1">
                        Risk notes
                      </p>
                      <p className="text-sm text-[#053560]">
                        No prior escalations or conduct flags
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-10">
                  <div className="flex justify-center itemse-center gap-3 w-full">
                    <button 
                      disabled={updateMutation.isPending}
                      onClick={() => handleDecision(true)}
                      className="px-6 flex justify-center items-center rounded-full bg-[#E4F2EA] text-[#1F6B4F] border border-[#B9DCCB] py-3 text-xs font-medium hover:bg-[#E4F2EA]/80 transition-all h-7 whitespace-nowrap w-[134px] disabled:opacity-50"
                    >
                      {updateMutation.isPending ? "..." : "Approve document"}
                    </button>
                    <button 
                      disabled={updateMutation.isPending}
                      onClick={() => handleDecision(false)}
                      className="rounded-full bg-[#F4E7EB] text-[#63203A] border border-[#E6C8D3] py-3 text-xs flex justify-center items-center font-medium hover:bg-[#F4E7EB]/80 transition-all h-7 px-6 w-[60px] disabled:opacity-50"
                    >
                      Reject
                    </button>
                    <button 
                      className="rounded-full bg-[#F5ECE2] text-[#A7653D] border border-[#E9D0BE] py-3 text-xs flex justify-center items-center font-medium hover:bg-[#F5ECE2]/80 transition-all h-7 whitespace-nowrap px-6 w-[125px]"
                    >
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
