"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "./useCountUp";

export default function KpiCard({
  label,
  value,
  note,
  delay,
}: {
  label: string;
  value: string;
  note: string;
  delay: number;
}) {
  const display = useCountUp(value, 1.1, delay);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.08);
    setRotateY(x * 0.08);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="group relative overflow-hidden bg-panel/95 p-5 transition-all duration-200 hover:bg-panel2 hover:z-10"
    >
      {/* Top subtle glow on hover */}
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b from-amber/15 via-transparent to-transparent" />

      <div className="flex items-center justify-between">
        <dt className="font-mono text-[11px] uppercase tracking-wider text-mute transition-colors group-hover:text-amber">
          {label}
        </dt>
        <span className="h-1.5 w-1.5 rounded-full bg-line transition-colors group-hover:bg-amber" />
      </div>

      <dd className="mt-3 font-mono text-3xl font-bold text-ink tick-mono sm:text-4xl transition-transform duration-200 group-hover:translate-x-0.5">
        {display}
      </dd>

      <dd className="mt-2 text-xs leading-relaxed text-mute group-hover:text-ink/80 transition-colors">
        {note}
      </dd>
    </motion.div>
  );
}
