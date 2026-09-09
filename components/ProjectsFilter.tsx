"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

type Category = "all" | "bi" | "sql" | "research";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "bi", label: "Power BI & Dashboards" },
  { id: "sql", label: "Systems & SQL" },
  { id: "research", label: "Research & GNSS" },
];

export default function ProjectsFilter() {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "bi") return p.stack.includes("Power BI") || p.stack.includes("DAX");
    if (filter === "sql") return p.stack.includes("SQL Server") || p.stack.includes("VB.NET");
    if (filter === "research") return p.stack.includes("Research") || p.stack.includes("GNSS");
    return true;
  });

  return (
    <div>
      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = filter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`relative rounded-xl px-4 py-2 font-mono text-xs transition-all ${
                isActive
                  ? "text-ink font-semibold"
                  : "text-mute hover:text-ink hover:bg-panel2"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 rounded-xl border border-amber/40 bg-amber/15 shadow-sm"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence>
          {filtered.map((p, i) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
