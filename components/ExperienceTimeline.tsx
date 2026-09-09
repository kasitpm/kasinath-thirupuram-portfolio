"use client";

import { motion } from "framer-motion";
import { experience, achievements } from "@/data/profile";
import Reveal from "./Reveal";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {/* Experience Item */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-line hover:border-amber/50 transition-colors">
        {experience.map((job, idx) => (
          <Reveal key={job.role} delay={idx * 0.1}>
            {/* Timeline milestone node */}
            <div className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-canvas">
              <span className="h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_10px_rgba(245,200,39,0.8)]" />
            </div>

            <div className="rounded-2xl border border-line bg-panel/90 p-6 shadow-card transition-all hover:border-amber/40 hover:bg-panel2">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line/50 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-ink">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-mute">{job.org}</p>
                </div>
                <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-xs font-semibold text-amber">
                  {job.period}
                </span>
              </div>

              {/* Key Highlights badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md border border-line bg-panel3/70 px-2.5 py-1 font-mono text-[11px] text-ink">
                  ⚡ Power BI & DAX
                </span>
                <span className="rounded-md border border-line bg-panel3/70 px-2.5 py-1 font-mono text-[11px] text-teal">
                  🔄 Auto-Refresh Pipelines
                </span>
                <span className="rounded-md border border-line bg-panel3/70 px-2.5 py-1 font-mono text-[11px] text-blue">
                  📊 Stakeholder Walkthroughs
                </span>
              </div>

              {/* Detailed bullets */}
              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[14px] leading-relaxed text-mute"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Achievements Section */}
      <div>
        <div className="mb-6 flex items-center gap-2">
          <span className="text-lg">🏆</span>
          <h3 className="font-mono text-xs uppercase tracking-wider text-mute">
            Honors & Research Papers
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {achievements.map((a, i) => {
            const isDatathon = a.title.includes("Datathon");
            return (
              <Reveal
                key={a.title}
                delay={i * 0.08}
                className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  isDatathon
                    ? "border-amber/40 bg-gradient-to-b from-panel2 to-panel hover:border-amber shadow-[0_4px_20px_rgba(245,200,39,0.1)]"
                    : "border-line bg-panel hover:border-lineHover"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-mute">
                    <span>{isDatathon ? "🥈 2nd Runner-Up" : "📄 Paper Presentation"}</span>
                    <span className="text-amber">2026</span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold leading-snug text-ink group-hover:text-amber transition-colors">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-mute">
                    {a.detail}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-line/40 font-mono text-[11px] text-teal">
                  Kristu Jayanti University
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
