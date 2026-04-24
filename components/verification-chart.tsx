"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Identity", value: 1820, color: "#C8102E" },
  { name: "Health", value: 1540, color: "#10B981" },
  { name: "Faith", value: 1680, color: "#6366F1" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const entry = payload[0];
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
        <p className="text-xs font-medium text-foreground">
          <span
            className="inline-block h-2 w-2 rounded-full mr-1.5"
            style={{ backgroundColor: entry.payload.color }}
          />
          {entry.name}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          <span className="font-semibold text-foreground">{entry.value.toLocaleString()}</span> verified
        </p>
      </div>
    );
  }
  return null;
}

export function VerificationChart() {
  return (
    <Card className="border border-border/60 bg-card shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold text-foreground">
          Verification Status
        </CardTitle>
        <p className="text-xs text-muted-foreground mt-0.5">
          Three pillars verification breakdown
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          <div className="relative h-[160px] w-[160px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={72}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-foreground">75%</span>
              <span className="text-[10px] text-muted-foreground">Verified</span>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            {data.map((item) => {
              const percentage = Math.round((item.value / total) * 100);
              return (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[12px] font-medium text-foreground">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[12px] font-semibold text-foreground">
                      {item.value.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
