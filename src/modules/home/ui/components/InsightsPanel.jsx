import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InsightsPanel({ items = [] }) {
  return (
    <div className="sticky top-24 p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Insights</CardTitle>
            <Button variant="ghost" className="hover:-translate-y-0.5 transition">View all</Button>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {items.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-700 dark:bg-neutral-300" />
                <span className="text-sm text-neutral-800 dark:text-neutral-200">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <Input placeholder="Summarize today’s school activity" className="bg-white/60 dark:bg-transparent border-neutral-300 dark:border-neutral-700" />
            <Button className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Ask</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}