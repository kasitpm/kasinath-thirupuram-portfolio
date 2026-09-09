"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups, certifications } from "@/data/profile";
import Reveal from "./Reveal";

const CERT_COLORS: Record<string, { border: string; bg: string; text: string }> = {
  Qlik: { border: "border-emerald/40", bg: "bg-emerald/10", text: "text-emerald" },
  MongoDB: { border: "border-emerald/40", bg: "bg-emerald/10", text: "text-emerald" },
  UiPath: { border: "border-amber/40", bg: "bg-amber/10", text: "text-amber" },
  Salesforce: { border: "border-blue/40", bg: "bg-blue/10", text: "text-blue" },
  NPTEL: { border: "border-blue/40", bg: "bg-blue/10", text: "text-blue" },
  "NASSCOM-Aligned": { border: "border-teal/40", bg: "bg-teal/10", text: "text-teal" },
  "ITC Infotech": { border: "border-amber/40", bg: "bg-amber/10", text: "text-amber" },
};

export default function SkillsSection() {
  const [search, setSearch] = useState("");

  const getBadgeColor = (issuer: string) => {
    for (const key in CERT_COLORS) {
      if (issuer.includes(key)) return CERT_COLORS[key];
    }
    return { border: "border-line", bg: "bg-panel2", text: "text-mute" };
  };

  return (
    <div className="space-y-12">
      {/* Skill Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search skill (e.g. Power BI, SQL, Python)..."
            className="w-full rounded-xl border border-line bg-panel px-4 py-2.5 pl-10 font-mono text-xs text-ink placeholder-mute transition-colors focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
          />
          <svg
            className="absolute left-3.5 top-3 h-4 w-4 text-mute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="font-mono text-xs text-mute">
          14+ Verified Competencies
        </div>
      </div>

      {/* Skill Groups */}
      <div className="grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group, groupIdx) => (
          <Reveal
            key={group.group}
            delay={groupIdx * 0.08}
            className="rounded-2xl border border-line bg-panel/80 p-5 shadow-card backdrop-blur-sm transition-colors hover:border-lineHover"
          >
            <div className="mb-4 flex items-center justify-between border-b border-line/60 pb-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber">
                {group.group}
              </h3>
              <span className="font-mono text-[11px] text-mute">
                {group.skills.length} tools
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => {
                const matches = search && s.toLowerCase().includes(search.toLowerCase());
                return (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
                      matches
                        ? "border-amber bg-amber/20 text-amber font-bold shadow-[0_0_12px_rgba(245,200,39,0.3)]"
                        : "border-line bg-panel2 text-ink hover:border-lineHover hover:bg-panel3"
                    }`}
                  >
                    {s}
                  </motion.span>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Certifications Subsection */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">📜</span>
            <h3 className="font-mono text-xs uppercase tracking-wider text-mute">
              Industry Certifications & Badges (7)
            </h3>
          </div>
          <span className="font-mono text-[11px] text-teal">
            Verified Credentials
          </span>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const badge = getBadgeColor(c.issuer);
            return (
              <Reveal
                key={c.name}
                delay={i * 0.05}
                className="group relative flex flex-col justify-between rounded-xl border border-line bg-panel p-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:bg-panel2 shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold ${badge.border} ${badge.bg} ${badge.text}`}
                    >
                      {c.issuer.split(" ")[0]}
                    </span>
                    <span className="font-mono text-[10.5px] text-mute">
                      {c.date}
                    </span>
                  </div>

                  <h4 className="mt-3 text-sm font-semibold text-ink group-hover:text-amber transition-colors">
                    {c.name}
                  </h4>
                </div>

                <div className="mt-3 flex items-center gap-1.5 pt-2 border-t border-line/40 text-[11px] font-mono text-mute">
                  <span>Issuer:</span>
                  <span className="text-ink/80 truncate">{c.issuer}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
