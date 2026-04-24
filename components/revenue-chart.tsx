"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 280000, subscriptions: 85 },
  { month: "Feb", revenue: 320000, subscriptions: 92 },
  { month: "Mar", revenue: 350000, subscriptions: 108 },
  { month: "Apr", revenue: 310000, subscriptions: 95 },
  { month: "May", revenue: 380000, subscriptions: 115 },
  { month: "Jun", revenue: 420000, subscriptions: 128 },
  { month: "Jul", revenue: 390000, subscriptions: 120 },
  { month: "Aug", revenue: 450000, subscriptions: 135 },
  { month: "Sep", revenue: 410000, subscriptions: 125 },
  { month: "Oct", revenue: 480000, subscriptions: 142 },
  { month: "Nov", revenue: 460000, subscriptions: 138 },
  { month: "Dec", revenue: 520000, subscriptions: 155 },
];

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
        <p className="text-xs font-medium text-foreground mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs text-muted-foreground">
            <span
              className="inline-block h-2 w-2 rounded-full mr-1.5"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}:{" "}
            <span className="font-semibold text-foreground">
              {entry.name === "Revenue"
                ? `₦${(entry.value / 1000).toFixed(0)}k`
                : entry.value}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export function RevenueChart() {
  return (
    <Card className="border border-border/60 bg-card shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold text-foreground">
              Revenue Overview
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              Monthly subscription revenue
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1">
            <span className="text-[11px] font-semibold text-emerald-700">
              +18.7% YoY
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#9CA3AF" }}
                dy={8}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#9CA3AF" }}
                dx={-8}
                tickFormatter={(value) => `₦${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="revenue"
                name="Revenue"
                fill="#C8102E"
                radius={[6, 6, 0, 0]}
                maxBarSize={36}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
