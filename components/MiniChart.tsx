"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MiniChart({ type }: { type: "bar" | "line" | "donut" }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (type === "bar") {
    const bars = [
      { height: 14, val: "3.2k" },
      { height: 22, val: "4.8k" },
      { height: 18, val: "4.1k" },
      { height: 30, val: "7.6k" },
      { height: 24, val: "6.0k" },
      { height: 36, val: "9.4k" },
    ];

    return (
      <div className="relative flex items-end">
        {hoveredIndex !== null && (
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-amber/40 bg-panel px-1.5 py-0.5 font-mono text-[9px] text-amber shadow-md z-10">
            {bars[hoveredIndex].val}
          </div>
        )}
        <svg viewBox="0 0 120 42" className="h-10 w-24 overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="barActiveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5C827" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {bars.map((b, i) => {
            const isLast = i === bars.length - 1;
            const isHovered = hoveredIndex === i;
            return (
              <motion.rect
                key={i}
                x={i * 19 + 4}
                width={13}
                rx={3}
                fill={isHovered || (hoveredIndex === null && isLast) ? "url(#barActiveGradient)" : "url(#barGradient)"}
                opacity={isHovered ? 1 : isLast ? 0.95 : 0.65}
                initial={{ y: 40, height: 0 }}
                whileInView={{ y: 40 - b.height, height: b.height }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer transition-all hover:scale-y-110 origin-bottom"
              />
            );
          })}
        </svg>
      </div>
    );
  }

  if (type === "line") {
    return (
      <div className="relative flex items-center">
        <svg viewBox="0 0 120 42" className="h-10 w-24 overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#F5C827" />
            </linearGradient>
            <linearGradient id="areaSubtle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <motion.polygon
            points="4,40 4,32 24,24 44,28 64,15 84,20 100,8 116,12 116,40"
            fill="url(#areaSubtle)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          {/* Glowing Line */}
          <motion.polyline
            points="4,32 24,24 44,28 64,15 84,20 100,8 116,12"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Apex Point with Pulse */}
          <motion.circle
            cx="116"
            cy="12"
            r="3.5"
            fill="#F5C827"
            initial={{ scale: 0 }}
            whileInView={{ scale: [1, 1.3, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          />
        </svg>
      </div>
    );
  }

  // Donut chart
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
        <circle cx="20" cy="20" r="15" fill="none" stroke="#232D3B" strokeWidth="5" />
        <motion.circle
          cx="20"
          cy="20"
          r="15"
          fill="none"
          stroke="#F5C827"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="94.2"
          initial={{ strokeDashoffset: 94.2 }}
          whileInView={{ strokeDashoffset: 94.2 * 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="20"
          cy="20"
          r="15"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="94.2"
          className="rotate-90 origin-center"
          initial={{ strokeDashoffset: 94.2 }}
          whileInView={{ strokeDashoffset: 94.2 * 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="absolute font-mono text-[9px] font-bold text-ink">75%</span>
    </div>
  );
}
