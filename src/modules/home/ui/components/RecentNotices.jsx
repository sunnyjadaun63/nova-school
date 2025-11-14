"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bell, Mail, Megaphone } from "lucide-react";

export default function RecentNotices() {
  const notices = [
    { type: "Parent", text: "PTA meeting on Friday", icon: Mail },
    { type: "Staff", text: "Submit lesson plans by Monday", icon: Bell },
    { type: "General", text: "Bus route changes effective tomorrow", icon: Megaphone },
  ];
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><Bell className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Recent Notices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {notices.map((n, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1"><n.icon className="h-4 w-4 text-neutral-700 dark:text-neutral-300" /></div>
              <div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{n.type}</div>
                <div className="text-sm text-neutral-900 dark:text-neutral-100">{n.text}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}