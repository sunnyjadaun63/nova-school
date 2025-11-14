"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, UserCheck, UserX } from "lucide-react";

export default function StaffDashboard() {
  const present = 42;
  const onLeave = 5;
  const needSub = 2;
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><Users className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Staff Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{present}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Present</div></div>
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{onLeave}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">On Leave</div></div>
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{needSub}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Need Substitute</div></div>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">Substitute teacher alerts</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between"><span className="text-sm">Grade 7 – Maths</span><span className="text-xs text-neutral-600 dark:text-neutral-400">Alert</span></div>
            <div className="flex items-center justify-between"><span className="text-sm">Grade 9 – Physics</span><span className="text-xs text-neutral-600 dark:text-neutral-400">Alert</span></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}