"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, User, DoorOpen } from "lucide-react";

export default function TimetableSummary() {
  const today = [
    { subject: "Maths", teacher: "Mr. Sharma", room: "101" },
    { subject: "Physics", teacher: "Ms. Patel", room: "Lab 2" },
  ];
  const available = 3;
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><Calendar className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Timetable Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">Today's classes</div>
          <div className="space-y-2">
            {today.map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2"><div className="text-sm text-neutral-900 dark:text-neutral-100">{c.subject}</div></div>
                <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400"><User className="h-3 w-3 text-neutral-600 dark:text-neutral-400" />{c.teacher}<DoorOpen className="h-3 w-3 text-neutral-600 dark:text-neutral-400" />{c.room}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between"><span className="text-sm text-neutral-800 dark:text-neutral-200">Room availability</span><span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{available} free</span></div>
        </CardContent>
      </Card>
    </div>
  );
}