"use client";
import Navbar from "../components/Navbar";
import CommandBar from "../components/CommandBar";
import QuickAction from "../components/QuickAction";
import MetricCard from "../components/MetricCard";
import InsightsPanel from "../components/InsightsPanel";
import ActivityItem from "../components/ActivityItem";
import AttendanceOverview from "../components/AttendanceOverview";
import FeesOverview from "../components/FeesOverview";
import AdmissionsSummary from "../components/AdmissionsSummary";
import ExamsAcademics from "../components/ExamsAcademics";
import StaffDashboard from "../components/StaffDashboard";
import TransportOverview from "../components/TransportOverview";
import InventorySnapshot from "../components/InventorySnapshot";
import RecentNotices from "../components/RecentNotices";
import QuickCreateActions from "../components/QuickCreateActions";
import TimetableSummary from "../components/TimetableSummary";

import { Receipt, CalendarCheck2, Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function HomeView() {
  const toPts = (arr) => arr.map((v) => ({ v }));
  const metrics = [
    { title: "Students", value: "1248", delta: "+3.2%", data: toPts([4, 6, 5, 7, 8, 9, 11]) },
    { title: "Attendance", value: "96.5%", delta: "-0.6%", data: toPts([98, 96, 97, 95, 96, 96.5]) },
    { title: "Fees Collected", value: "78,420", delta: "+1.1%", data: toPts([72, 74, 76, 77, 78, 79]) },
    { title: "New Admissions", value: "32", delta: "+4", data: toPts([12, 14, 18, 22, 28, 32]) },
  ];
  const insights = [
    "Attendance dropped in Grade 7 by 2%",
    "High fee collection from Grade 10",
    "Homework completion rose 8%",
    "Bus route 3 often delayed",
    "Staff onboarding pending",
    "PTA meeting next Friday",
  ];
  const activities = [
    { icon: Receipt, text: "Invoice #2341 paid" },
    { icon: CalendarCheck2, text: "New admission: Priya" },
    { icon: Mail, text: "Notice sent to parents" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <div className="max-w-7xl py-4 mx-auto px-6 space-y-6">
        <CommandBar />

        <QuickCreateActions />

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <AttendanceOverview />
              <FeesOverview />
              <AdmissionsSummary />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <ExamsAcademics />
              <StaffDashboard />
              <TransportOverview />
              <InventorySnapshot />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <RecentNotices />
              <TimetableSummary />
            </div>

           
            <div className="grid sm:grid-cols-2 gap-6">
              {metrics.map((m, i) => (
                <MetricCard key={i} title={m.title} value={m.value} delta={m.delta} data={m.data} />
              ))}
            </div>
          </div>

          <InsightsPanel items={insights} />
        </div>

        <Card className="rounded-2xl bg-white/70 dark:bg-[rgba(15,23,42,0.52)]/80 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-[0_8px_40px_rgba(12,18,30,0.12)]">
          <CardHeader className="pb-2">
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {activities.map((a, i) => (
              <ActivityItem key={i} icon={a.icon} text={a.text} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}