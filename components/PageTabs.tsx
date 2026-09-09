"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TABS = [
  { id: "overview", label: "Overview", icon: "👤" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "📊" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

export default function PageTabs() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Navigation Dock"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-4"
    >
      <div className="flex items-center gap-1 rounded-2xl border border-line/80 bg-panel/90 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`relative flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-[13px] ${
                isActive ? "text-ink font-semibold" : "text-mute hover:text-ink hover:bg-panel2/50"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="dockPill"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className="absolute inset-0 rounded-xl bg-panel2 border border-line"
                />
              )}
              <span className="relative text-xs sm:text-sm">{tab.icon}</span>
              <span className="relative hidden xs:inline">{tab.label}</span>
              {isActive && (
                <motion.span
                  layoutId="dockIndicator"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-amber shadow-[0_0_8px_rgba(245,200,39,0.8)]"
                />
              )}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
