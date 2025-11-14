"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserPlus, TrendingUp, UserX, Users } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function AdmissionsSummary() {
  const newAd = "32";
  const enquiries = "68";
  const transfers = "3";
  const dropouts = "1";
  const data = [12, 14, 18, 22, 28, 32].map((v) => ({ v }));
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><UserPlus className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Admissions Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{newAd}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">New admissions</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{enquiries}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Enquiries this week</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3"><UserX className="h-4 w-4 text-neutral-700 dark:text-neutral-300" /><div><div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Transfers</div><div className="text-xs text-neutral-500 dark:text-neutral-400">{transfers}</div></div></div>
            <div className="flex items-center gap-3"><Users className="h-4 w-4 text-neutral-700 dark:text-neutral-300" /><div><div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Dropouts</div><div className="text-xs text-neutral-500 dark:text-neutral-400">{dropouts}</div></div></div>
          </div>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                <defs><linearGradient id="ad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0A0A0A" stopOpacity={0.15} /><stop offset="95%" stopColor="#0A0A0A" stopOpacity={0} /></linearGradient></defs>
                <Line type="monotone" dataKey="v" stroke="#0A0A0A" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}