"use client"
"use client";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

export default function Sparkline({ data, up = true }) {
  const stroke = up ? "#06B6D4" : "#F43F5E";
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 6, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={stroke} stopOpacity={0.25} />
            <stop offset="95%" stopColor={stroke} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="v" stroke={stroke} strokeWidth={2} fill="url(#spark)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}