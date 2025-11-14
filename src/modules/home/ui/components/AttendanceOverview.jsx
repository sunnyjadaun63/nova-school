"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, UserX, Users } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function AttendanceOverview() {
  const today = "96.5%";
  const classes = [{ name: "Grade 7", pct: 94 }, { name: "Grade 8", pct: 97 }, { name: "Grade 9", pct: 96 }, { name: "Grade 10", pct: 98 }];
  const late = 12;
  const absent = 24;
  const data = [96, 95, 97, 96, 96.5, 97, 96.5];
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Attendance Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-semibold">{today}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-500">Today’s attendance</div>
            </div>
            <div className="h-16 w-full ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.map((v) => ({ v }))} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="att" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0A0A0A" stopOpacity={0.15} /><stop offset="95%" stopColor="#0A0A0A" stopOpacity={0} /></linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke="#0A0A0A" strokeWidth={2} fill="url(#att)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-neutral-600 dark:text-neutral-400" /><div><div className="text-sm font-semibold">Late</div><div className="text-xs text-neutral-500 dark:text-neutral-500">{late}</div></div></div>
            <div className="flex items-center gap-2"><UserX className="h-4 w-4 text-neutral-700 dark:text-neutral-300" /><div><div className="text-sm font-semibold">Absent</div><div className="text-xs text-neutral-500 dark:text-neutral-500">{absent}</div></div></div>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-500">Class-wise snapshot</div>
          <div className="space-y-2">
            {classes.map((c) => (
              <div key={c.name} className="flex items-center justify-between">
                <span className="text-sm">{c.name}</span>
                <span className="text-sm font-semibold">{c.pct}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}