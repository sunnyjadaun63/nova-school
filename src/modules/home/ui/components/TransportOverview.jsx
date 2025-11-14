"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bus, Clock, AlertCircle } from "lucide-react";

export default function TransportOverview() {
  const running = 8;
  const delayed = 2;
  const notBoarded = 5;
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><Bus className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Transport Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{running}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Running</div></div>
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{delayed}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Delayed</div></div>
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{notBoarded}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Not Boarded</div></div>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">Bus delays</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between"><span className="text-sm">Route 3</span><span className="text-xs text-neutral-600 dark:text-neutral-400">+10 min</span></div>
            <div className="flex items-center justify-between"><span className="text-sm">Route 7</span><span className="text-xs text-neutral-600 dark:text-neutral-400">+5 min</span></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}