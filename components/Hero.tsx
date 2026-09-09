"use client";

import { motion, type Variants } from "framer-motion";
import { profile, kpis } from "@/data/profile";
import KpiCard from "./KpiCard";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:px-8 sm:pt-24"
    >
      {/* Availability Beacon */}
      <motion.div
        variants={item}
        className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 font-mono text-xs text-teal shadow-[0_0_16px_rgba(20,184,166,0.15)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
        </span>
        <span>Open to Pan-India Data Analyst Roles</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        variants={item}
        className="max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl"
      >
        Hi, I'm <span className="text-shimmer">{profile.name}</span>
      </motion.h1>

      <motion.div variants={item} className="mt-4 flex items-center gap-3">
        <span className="font-mono text-base font-semibold text-amber sm:text-xl">
          {profile.title}
        </span>
        <span className="h-1 w-1 rounded-full bg-line" />
        <span className="font-mono text-xs text-mute sm:text-sm">
          BCA Analytics · Kristu Jayanti
        </span>
      </motion.div>

      <motion.p
        variants={item}
        className="mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg"
      >
        Transforming raw transactional & operational data into interactive
        dashboards that empower executive decisions — specializing in{" "}
        <strong className="text-ink font-semibold">Power BI</strong>,{" "}
        <strong className="text-ink font-semibold">Power Query & DAX</strong>,{" "}
        <strong className="text-ink font-semibold">SQL</strong>, and{" "}
        <strong className="text-ink font-semibold">Python</strong>.
      </motion.p>

      {/* Action Buttons */}
      <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-amber to-amber/90 px-6 py-3 text-sm font-bold text-canvas shadow-[0_0_20px_rgba(245,200,39,0.3)] transition-all hover:shadow-[0_0_30px_rgba(245,200,39,0.5)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            View Projects
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>

        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl border border-line bg-panel px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-amber hover:text-amber"
        >
          Contact Me
        </motion.a>

        <motion.a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl border border-line bg-panel px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
        >
          LinkedIn ↗
        </motion.a>
      </motion.div>

      {/* KPI Stats Bar with 3D Tilt */}
      <motion.dl
        variants={item}
        className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-xl sm:grid-cols-4"
      >
        {kpis.map((kpi, i) => (
          <KpiCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            note={kpi.note}
            delay={0.3 + i * 0.08}
          />
        ))}
      </motion.dl>
    </motion.header>
  );
}
