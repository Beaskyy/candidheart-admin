"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, ShieldCheck, UserPlus, CreditCard, MessageSquare, AlertTriangle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "match",
    icon: Heart,
    iconBg: "bg-rose-50",
    iconColor: "text-[#C8102E]",
    title: "New match created",
    description: "Aisha M. & Ibrahim O. were matched",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "verification",
    icon: ShieldCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Identity verified",
    description: "Fatimah B. passed ID verification",
    time: "15 min ago",
  },
  {
    id: 3,
    type: "signup",
    icon: UserPlus,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "New user signup",
    description: "Yusuf A. registered from Kano",
    time: "32 min ago",
  },
  {
    id: 4,
    type: "subscription",
    icon: CreditCard,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Premium upgrade",
    description: "Khadijah S. upgraded to Premium plan",
    time: "1 hr ago",
  },
  {
    id: 5,
    type: "report",
    icon: AlertTriangle,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Profile reported",
    description: "A user profile was flagged for review",
    time: "2 hrs ago",
  },
  {
    id: 6,
    type: "message",
    icon: MessageSquare,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    title: "Support ticket",
    description: "New support request from Abdul R.",
    time: "3 hrs ago",
  },
];

export function ActivityFeed() {
  return (
    <Card className="border border-border/60 bg-card shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold text-foreground">
              Recent Activity
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              Latest platform events
            </p>
          </div>
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-0">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="group flex items-start gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-muted/30"
            >
              <div
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${activity.iconBg} transition-transform duration-200 group-hover:scale-110`}
              >
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-foreground">
                  {activity.title}
                </p>
                <p className="text-[11px] text-muted-foreground truncate">
                  {activity.description}
                </p>
              </div>
              <span className="shrink-0 text-[11px] text-muted-foreground/70 mt-0.5">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
