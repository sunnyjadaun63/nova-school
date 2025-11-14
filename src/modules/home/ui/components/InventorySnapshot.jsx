"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Package, BookOpen, Shirt, Wrench } from "lucide-react";

export default function InventorySnapshot() {
  const books = 45;
  const uniforms = 120;
  const maintenance = 3;
  return (
    <div className="p-[1px] rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/40">
      <Card className="rounded-2xl bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-neutral-200/40 dark:border-neutral-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] animate-in fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><Package className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />Inventory Snapshot</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{books}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Books issued today</div></div>
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{uniforms}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Uniform stock</div></div>
            <div className="text-center space-y-1"><div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{maintenance}</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Asset maintenance</div></div>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">Low stock alerts</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between"><span className="text-sm">Science Lab kits</span><span className="text-xs text-neutral-600 dark:text-neutral-400">Low</span></div>
            <div className="flex items-center justify-between"><span className="text-sm">Sports equipment</span><span className="text-xs text-neutral-600 dark:text-neutral-400">Reorder</span></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}