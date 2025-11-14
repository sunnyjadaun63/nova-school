import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CommandBar() {
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <div className="flex items-center gap-3 rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 px-5 py-4 transition focus-within:ring-2 focus-within:ring-neutral-700/60">
        <Search className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        <Input
          placeholder="Ask AI or search students, fees, attendance…"
          className="bg-transparent border-0 focus-visible:ring-0 text-lg text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
        />
      </div>
    </div>
  );
}