"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Award, BookOpen } from "lucide-react";

export default function ExamsAcademics() {
  const upcoming = [{ subject: "Maths", date: "15 Nov" }, { subject: "Science", date: "16 Nov" }];
  const pending = 4;
  const top = [{ grade: "Grade 10", avg: 94 }, { grade: "Grade 9", avg: 91 }];
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><BookOpen className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Exams & Academics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">Upcoming tests</div>
          <div className="space-y-2">
            {upcoming.map((e) => (
              <div key={e.subject} className="flex items-center justify-between"><div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-neutral-700 dark:text-neutral-300" /><span className="text-sm text-neutral-900 dark:text-neutral-100">{e.subject}</span></div><span className="text-xs text-neutral-500 dark:text-neutral-400">{e.date}</span></div>
            ))}
          </div>
          <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Award className="h-4 w-4 text-neutral-700 dark:text-neutral-300" /><span className="text-sm">Pending evaluations</span></div><span className="text-sm font-semibold">{pending}</span></div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">Top-performing grades</div>
          <div className="space-y-2">
            {top.map((g) => (
              <div key={g.grade} className="flex items-center justify-between"><span className="text-sm text-neutral-800 dark:text-neutral-200">{g.grade}</span><span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{g.avg}%</span></div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}