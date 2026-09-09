"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MetricTab = "marketing" | "datathon" | "pipeline";

interface ChartPoint {
  label: string;
  value: number;
  secondary?: string;
}

const TABS: { id: MetricTab; label: string; icon: string; tool: string }[] = [
  { id: "marketing", label: "Marketing Intelligence", icon: "📊", tool: "Power BI · DAX" },
  { id: "datathon", label: "Datathon Model", icon: "📈", tool: "Qlik · Python" },
  { id: "pipeline", label: "Rental DB System", icon: "⚡", tool: "SQL Server · VB" },
];

const DATA: Record<
  MetricTab,
  {
    title: string;
    description: string;
    kpis: { label: string; value: string; delta: string }[];
    points: ChartPoint[];
    type: "bar" | "line" | "donut";
  }
> = {
  marketing: {
    title: "Global Marketing Campaign Performance",
    description: "Real-time pipeline tracking lead conversions across multi-channel campaigns with DAX auto-refresh.",
    kpis: [
      { label: "Campaign ROI", value: "4.8x", delta: "+38% YoY" },
      { label: "Lead Conversion", value: "14.2%", delta: "+3.6% QoQ" },
      { label: "Auto Refresh", value: "Daily", delta: "100% Uptime" },
    ],
    points: [
      { label: "Jan", value: 38, secondary: "3.8k Leads" },
      { label: "Feb", value: 52, secondary: "5.2k Leads" },
      { label: "Mar", value: 45, secondary: "4.5k Leads" },
      { label: "Apr", value: 72, secondary: "7.2k Leads" },
      { label: "May", value: 64, secondary: "6.4k Leads" },
      { label: "Jun", value: 89, secondary: "8.9k Leads" },
    ],
    type: "bar",
  },
  datathon: {
    title: "Datathon Predictive Model Accuracy",
    description: "Award-winning statistical modeling benchmark from the Qlik Inter-Institutional Datathon 2026.",
    kpis: [
      { label: "Precision", value: "98.4%", delta: "Top 2%" },
      { label: "AUC / ROC", value: "0.96", delta: "High Fit" },
      { label: "Placement", value: "2nd RU", delta: "Podium" },
    ],
    points: [
      { label: "v1.0", value: 65, secondary: "Baseline 65%" },
      { label: "v1.2", value: 74, secondary: "Feature Eng 74%" },
      { label: "v1.5", value: 83, secondary: "Cross-Val 83%" },
      { label: "v2.0", value: 92, secondary: "Hyper-tune 92%" },
      { label: "Final", value: 98, secondary: "Optimal 98.4%" },
    ],
    type: "line",
  },
  pipeline: {
    title: "Hawkins Wheels Rental Throughput",
    description: "Relational schema query optimization handling vehicle check-outs, booking logs, and billing.",
    kpis: [
      { label: "Query P99", value: "12ms", delta: "-45% Latency" },
      { label: "Transactions", value: "100%", delta: "ACID Compliant" },
      { label: "Tables", value: "12 Rel", delta: "3NF Schema" },
    ],
    points: [
      { label: "Bookings", value: 42, secondary: "42% Volume" },
      { label: "Billing", value: 28, secondary: "28% Volume" },
      { label: "Fleet", value: 18, secondary: "18% Volume" },
      { label: "Reports", value: 12, secondary: "12% Volume" },
    ],
    type: "donut",
  },
};

export default function InteractiveAnalyticsWidget() {
  const [activeTab, setActiveTab] = useState<MetricTab>("marketing");
  const [hoveredPoint, setHoveredPoint] = useState<ChartPoint | null>(null);

  const current = DATA[activeTab];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-panel/90 p-5 shadow-2xl backdrop-blur-md sm:p-6">
      {/* Top Header with live badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-amber/20">
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-ping" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
            Interactive BI Sandbox
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-2.5 py-1 font-mono text-[11px] text-mute">
          <span>Engine:</span>
          <span className="text-ink font-medium">{TABS.find((t) => t.id === activeTab)?.tool}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setHoveredPoint(null);
              }}
              className={`relative flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${
                isActive
                  ? "text-ink font-medium shadow-sm"
                  : "text-mute hover:text-ink hover:bg-panel2/60"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 rounded-lg border border-amber/40 bg-amber/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">{tab.icon}</span>
              <span className="relative">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main interactive area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {current.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-line/60 bg-panel2/80 p-3 transition-colors hover:border-amber/40"
              >
                <div className="font-mono text-[10.5px] uppercase tracking-wider text-mute">
                  {kpi.label}
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-ink tick-mono sm:text-2xl">
                  {kpi.value}
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-teal">
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Chart Area */}
          <div className="mt-5 rounded-xl border border-line/40 bg-panel3/30 p-4">
            <div className="flex items-center justify-between text-xs text-mute">
              <span className="font-mono text-[11px] text-ink/90">
                {current.title}
              </span>
              <span className="font-mono text-[10.5px] text-amber">
                {hoveredPoint ? `${hoveredPoint.label}: ${hoveredPoint.secondary}` : "Hover to inspect values"}
              </span>
            </div>

            {/* Render chart based on type */}
            <div className="mt-3 flex h-36 items-end justify-center pt-2">
              {current.type === "bar" && (
                <div className="flex h-full w-full items-end justify-between gap-2 px-2">
                  {current.points.map((p, idx) => {
                    const isHovered = hoveredPoint?.label === p.label;
                    return (
                      <div
                        key={p.label}
                        onMouseEnter={() => setHoveredPoint(p)}
                        onMouseLeave={() => setHoveredPoint(null)}
                        className="group flex flex-1 cursor-pointer flex-col items-center justify-end h-full"
                      >
                        <div className="relative w-full flex justify-center items-end h-[100px]">
                          {isHovered && (
                            <div className="absolute -top-7 whitespace-nowrap rounded border border-amber/40 bg-panel px-1.5 py-0.5 font-mono text-[10px] text-amber shadow-lg z-10">
                              {p.secondary}
                            </div>
                          )}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${p.value}%` }}
                            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className={`w-full max-w-[28px] rounded-t-md transition-all ${
                              isHovered
                                ? "bg-amber shadow-[0_0_14px_rgba(245,200,39,0.5)]"
                                : "bg-gradient-to-t from-blue/70 to-teal/90 opacity-80 group-hover:opacity-100"
                            }`}
                          />
                        </div>
                        <span className="mt-2 font-mono text-[10px] text-mute group-hover:text-ink">
                          {p.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {current.type === "line" && (
                <div className="relative h-full w-full px-2">
                  <svg viewBox="0 0 400 120" className="h-full w-full overflow-visible">
                    <defs>
                      <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5CD6C0" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#5CD6C0" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <motion.path
                      d="M 20,95 L 100,75 L 180,55 L 280,30 L 370,12 L 370,115 L 20,115 Z"
                      fill="url(#areaGlow)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    {/* Line */}
                    <motion.path
                      d="M 20,95 L 100,75 L 180,55 L 280,30 L 370,12"
                      fill="none"
                      stroke="#5CD6C0"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {/* Points */}
                    {[
                      { cx: 20, cy: 95, p: current.points[0] },
                      { cx: 100, cy: 75, p: current.points[1] },
                      { cx: 180, cy: 55, p: current.points[2] },
                      { cx: 280, cy: 30, p: current.points[3] },
                      { cx: 370, cy: 12, p: current.points[4] },
                    ].map((pt, i) => (
                      <g
                        key={i}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredPoint(pt.p)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      >
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r={hoveredPoint?.label === pt.p.label ? "7" : "4.5"}
                          className="fill-amber stroke-panel stroke-2 transition-all hover:scale-125"
                        />
                        <text
                          x={pt.cx}
                          y={115}
                          textAnchor="middle"
                          className="fill-mute text-[9px] font-mono"
                        >
                          {pt.p.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              )}

              {current.type === "donut" && (
                <div className="flex h-full w-full items-center justify-around gap-4 px-4">
                  <div className="relative flex h-28 w-28 items-center justify-center">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        className="stroke-panel2"
                        strokeWidth="12"
                        fill="none"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#F5C827"
                        strokeWidth="12"
                        strokeDasharray="238"
                        strokeDashoffset="138"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ strokeDashoffset: 238 }}
                        animate={{ strokeDashoffset: 138 }}
                        transition={{ duration: 1 }}
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#3B82F6"
                        strokeWidth="12"
                        strokeDasharray="238"
                        strokeDashoffset="180"
                        strokeLinecap="round"
                        fill="none"
                        className="rotate-[150deg] origin-center"
                        initial={{ strokeDashoffset: 238 }}
                        animate={{ strokeDashoffset: 180 }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </svg>
                    <div className="absolute text-center">
                      <div className="font-mono text-xs font-bold text-ink">3NF</div>
                      <div className="font-mono text-[9px] text-mute">Schema</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {current.points.map((p) => (
                      <div
                        key={p.label}
                        onMouseEnter={() => setHoveredPoint(p)}
                        onMouseLeave={() => setHoveredPoint(null)}
                        className="flex cursor-pointer items-center gap-2 font-mono text-xs hover:text-amber"
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            p.label === "Bookings"
                              ? "bg-amber"
                              : p.label === "Billing"
                              ? "bg-blue"
                              : "bg-teal"
                          }`}
                        />
                        <span className="text-mute">{p.label}:</span>
                        <span className="font-semibold text-ink">{p.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
