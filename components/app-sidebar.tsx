"use client";

import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  CreditCard,
  Heart,
  MessageSquare,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Overview", icon: LayoutDashboard, href: "/" },
  { title: "Users & Profiles", icon: Users, href: "/users" },
  { title: "Verification", icon: ShieldCheck, href: "/verification" },
  { title: "Payments", icon: CreditCard, href: "/payments" },
  { title: "Matchmaking", icon: Heart, href: "/matchmaking" },
  { title: "Chat & Messaging", icon: MessageSquare, href: "/chat" },
  { title: "Devices & Config", icon: Smartphone, href: "/devices" },
];

export function AppSidebar() {
  const { openMobile, setOpenMobile, isMobile } = useSidebar();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const SidebarContent = (
    <div className="flex flex-col h-full bg-[#053560] text-white">
      {/* Branding */}
      <div className="px-6 pt-7 pb-10">
        <h1 className="text-[28px] font-bold text-[#F3F1E3]">CandidHeart</h1>
        <small className="text-xs text-[#C8D7E7] font-medium">
          Admin Console
        </small>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-2">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <a
              key={item.title}
              href={item.href}
              className={`flex items-center h-11 gap-3 px-4 py-2.5 border border-[#2A5376] rounded-[16px] text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-[#F3F1E3] text-[#053560]"
                  : "text-[#F3F1E3] hover:text-white/90 hover:bg-white/5"
              }`}
            >
              <span>{item.title}</span>
            </a>
          );
        })}
      </nav>

      {/* Live Status */}
      <div className="px-5 pb-6 mt-auto">
        <div className="space-y-1">
          <p className="text-[11px] text-white/40 font-medium">Live status</p>
          <p className="text-[15px] font-semibold text-white leading-tight">
            4 systems healthy
          </p>
          <span className="inline-flex items-center gap-1 mt-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
            <CheckCircle2 className="h-3 w-3" />
            No incidents
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-[236px] min-h-screen bg-[#053560] text-white shrink-0">
        {SidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent side="left" className="p-0 w-[280px] bg-[#053560] border-none [&>button]:text-white">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Access the admin dashboard navigation</SheetDescription>
          </SheetHeader>
          {SidebarContent}
        </SheetContent>
      </Sheet>
    </>
  );
}
