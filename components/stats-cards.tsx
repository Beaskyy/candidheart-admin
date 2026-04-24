"use client";

import { Users, Heart, ShieldCheck, TrendingUp, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Users",
    value: "2,420",
    change: "+12.5%",
    trend: "up" as const,
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    description: "vs last month",
  },
  {
    title: "Active Matches",
    value: "186",
    change: "+8.2%",
    trend: "up" as const,
    icon: Heart,
    iconBg: "bg-rose-50",
    iconColor: "text-[#C8102E]",
    description: "vs last month",
  },
  {
    title: "Pending Verifications",
    value: "12",
    change: "-3.1%",
    trend: "down" as const,
    icon: ShieldCheck,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    description: "vs last month",
  },
  {
    title: "Revenue",
    value: "₦4.2M",
    change: "+18.7%",
    trend: "up" as const,
    icon: DollarSign,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    description: "vs last month",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="group relative overflow-hidden border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-border"
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <p className="text-[13px] font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      stat.trend === "up"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {stat.change}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {stat.description}
                  </span>
                </div>
              </div>
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg} transition-transform duration-300 group-hover:scale-110`}
              >
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
