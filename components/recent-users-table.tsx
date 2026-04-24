"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, ArrowRight } from "lucide-react";

const recentUsers = [
  {
    id: 1,
    name: "Aisha Mohammed",
    email: "aisha.m@gmail.com",
    avatar: "",
    initials: "AM",
    status: "verified",
    plan: "Premium",
    joinDate: "Apr 22, 2026",
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    name: "Ibrahim Oladele",
    email: "ibrahim.o@yahoo.com",
    avatar: "",
    initials: "IO",
    status: "pending",
    plan: "Basic",
    joinDate: "Apr 21, 2026",
    location: "Ibadan, Nigeria",
  },
  {
    id: 3,
    name: "Fatimah Bello",
    email: "fatimah.b@outlook.com",
    avatar: "",
    initials: "FB",
    status: "verified",
    plan: "Premium",
    joinDate: "Apr 20, 2026",
    location: "Abuja, Nigeria",
  },
  {
    id: 4,
    name: "Yusuf Adeyemi",
    email: "yusuf.a@gmail.com",
    avatar: "",
    initials: "YA",
    status: "unverified",
    plan: "Basic",
    joinDate: "Apr 19, 2026",
    location: "Kano, Nigeria",
  },
  {
    id: 5,
    name: "Khadijah Sanni",
    email: "khadijah.s@gmail.com",
    avatar: "",
    initials: "KS",
    status: "verified",
    plan: "Premium",
    joinDate: "Apr 18, 2026",
    location: "London, UK",
  },
  {
    id: 6,
    name: "Abdul Rahman",
    email: "abdul.r@hotmail.com",
    avatar: "",
    initials: "AR",
    status: "pending",
    plan: "Basic",
    joinDate: "Apr 17, 2026",
    location: "Accra, Ghana",
  },
];

const statusConfig = {
  verified: {
    label: "Verified",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  pending: {
    label: "Pending",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  unverified: {
    label: "Unverified",
    className: "bg-red-50 text-red-700 border-red-200",
  },
};

const planConfig = {
  Premium: {
    className: "bg-[#C8102E]/10 text-[#C8102E] border-[#C8102E]/20",
  },
  Basic: {
    className: "bg-slate-50 text-slate-600 border-slate-200",
  },
};

export function RecentUsersTable() {
  return (
    <Card className="border border-border/60 bg-card shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold text-foreground">
              Recent Users
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              Newly registered members
            </p>
          </div>
          <button className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[12px] font-medium text-[#C8102E] transition-colors hover:bg-[#C8102E]/5">
            View All
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-border/60">
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  User
                </th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                  Plan
                </th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                  Location
                </th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hidden sm:table-cell">
                  Joined
                </th>
                <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {recentUsers.map((user) => {
                const status = statusConfig[user.status as keyof typeof statusConfig];
                const plan = planConfig[user.plan as keyof typeof planConfig];
                return (
                  <tr
                    key={user.id}
                    className="group transition-colors hover:bg-muted/30"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback className="bg-muted text-[11px] font-semibold text-muted-foreground">
                            {user.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-[13px] font-medium text-foreground">
                            {user.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-semibold px-2 py-0.5 ${status.className}`}
                      >
                        {status.label}
                      </Badge>
                    </td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-semibold px-2 py-0.5 ${plan.className}`}
                      >
                        {user.plan}
                      </Badge>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-[12px] text-muted-foreground">
                        {user.location}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell">
                      <span className="text-[12px] text-muted-foreground">
                        {user.joinDate}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="rounded-md p-1.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 hover:bg-muted hover:text-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
