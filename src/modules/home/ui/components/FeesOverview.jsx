"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { DollarSign, Clock, AlertCircle } from "lucide-react";

export default function FeesOverview() {
  const collected = "₹78,420";
  const pending = "₹12,300";
  const due = "15";
  const defaulters = "23";
  const data = [{ m: "Jan", v: 65000 }, { m: "Feb", v: 72000 }, { m: "Mar", v: 78420 }];
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><DollarSign className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Fees Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{collected}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Collected this month</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{pending}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Pending fees</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
              <div>
                <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Upcoming due</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{due}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <AlertCircle className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
              <div>
                <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Defaulters</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{defaulters}</div>
              </div>
            </div>
          </div>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                <defs><linearGradient id="fee" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0A0A0A" stopOpacity={0.15} /><stop offset="95%" stopColor="#0A0A0A" stopOpacity={0} /></linearGradient></defs>
                <Bar dataKey="v" fill="url(#fee)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}