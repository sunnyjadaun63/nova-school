"use client";
import { Button } from "@/components/ui/button";
import { UserPlus, CheckCircle, Send, FileText } from "lucide-react";

export default function QuickCreateActions() {
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <div className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in p-4">
        <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Quick Create</div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="ghost" className="rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"><UserPlus className="mr-2 h-4 w-4" />Add Student</Button>
          <Button variant="ghost" className="rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"><CheckCircle className="mr-2 h-4 w-4" />Mark Attendance</Button>
          <Button variant="ghost" className="rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"><Send className="mr-2 h-4 w-4" />Send Notice</Button>
          <Button variant="ghost" className="rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"><FileText className="mr-2 h-4 w-4" />Generate Fee Slip</Button>
        </div>
      </div>
    </div>
  );
}