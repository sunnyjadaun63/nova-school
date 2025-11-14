import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Sparkline from "./Sparkline";

export default function MetricCard({ title, value, delta, data }) {
  const up = !(delta || "").includes("-");
  const badge = up
    ? "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
    : "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200";
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-neutral-600 dark:text-neutral-400">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">{value}</div>
            <div className={`text-xs px-2 py-1 rounded-full ${badge}`}>{delta}</div>
          </div>
          <div className="h-16 mt-3">
            <Sparkline data={data} up={up} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}