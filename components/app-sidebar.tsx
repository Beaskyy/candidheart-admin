"use client";

import {
  LayoutDashboard,
  Users,
  Heart,
  ShieldCheck,
  CreditCard,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Bell,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mainNavItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    isActive: true,
  },
  {
    title: "Users",
    icon: Users,
    href: "/users",
    badge: "2.4k",
  },
  {
    title: "Matches",
    icon: Heart,
    href: "/matches",
  },
  {
    title: "Verification",
    icon: ShieldCheck,
    href: "/verification",
    badge: "12",
    badgeVariant: "destructive" as const,
  },
  {
    title: "Subscriptions",
    icon: CreditCard,
    href: "/subscriptions",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/messages",
  },
];

const secondaryNavItems = [
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "Help Center",
    icon: HelpCircle,
    href: "/help",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C8102E]">
            <Heart className="h-5 w-5 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              CandidHeart
            </span>
            <span className="text-[11px] text-muted-foreground">
              Admin Panel
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="px-3 py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className={`rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                      item.isActive
                        ? "bg-[#C8102E] text-white shadow-sm hover:bg-[#A60D25]"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-[18px] w-[18px]" />
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant={item.badgeVariant === "destructive" ? "destructive" : "secondary"}
                          className={`ml-auto h-5 px-1.5 text-[10px] font-semibold ${
                            item.isActive
                              ? "bg-white/20 text-white border-0"
                              : item.badgeVariant === "destructive"
                              ? "bg-red-100 text-red-600 border-0"
                              : "bg-muted text-muted-foreground border-0"
                          }`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-3" />

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
            Support
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="rounded-lg px-3 py-2.5 text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-[18px] w-[18px]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarSeparator className="mb-4" />
        <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="" />
            <AvatarFallback className="bg-[#C8102E] text-white text-xs font-semibold">
              AD
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium text-foreground">Admin</span>
            <span className="text-[11px] text-muted-foreground">
              admin@candidheart.com
            </span>
          </div>
          <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
