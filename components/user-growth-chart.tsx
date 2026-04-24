"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 1200, activeUsers: 890 },
  { month: "Feb", users: 1350, activeUsers: 980 },
  { month: "Mar", users: 1480, activeUsers: 1100 },
  { month: "Apr", users: 1520, activeUsers: 1050 },
  { month: "May", users: 1690, activeUsers: 1200 },
  { month: "Jun", users: 1820, activeUsers: 1350 },
  { month: "Jul", users: 1950, activeUsers: 1420 },
  { month: "Aug", users: 2050, activeUsers: 1580 },
  { month: "Sep", users: 2180, activeUsers: 1650 },
  { month: "Oct", users: 2280, activeUsers: 1720 },
  { month: "Nov", users: 2350, activeUsers: 1800 },
  { month: "Dec", users: 2420, activeUsers: 1890 },
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
            {entry.name}: <span className="font-semibold text-foreground">{entry.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export function UserGrowthChart() {
  return (
    <Card className="border border-border/60 bg-card shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold text-foreground">
              User Growth
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              Total vs Active users over time
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C8102E]" />
              <span className="text-[11px] text-muted-foreground">Total</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C8102E]/30" />
              <span className="text-[11px] text-muted-foreground">Active</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C8102E" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#C8102E" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C8102E" stopOpacity={0.05} />
                  <stop offset="95%" stopColor="#C8102E" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="users"
                name="Total Users"
                stroke="#C8102E"
                strokeWidth={2}
                fill="url(#colorUsers)"
              />
              <Area
                type="monotone"
                dataKey="activeUsers"
                name="Active Users"
                stroke="#C8102E"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                fill="url(#colorActive)"
                opacity={0.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
