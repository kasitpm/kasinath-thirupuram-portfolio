"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import MiniChart from "./MiniChart";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.05);
    setRotateY(x * 0.05);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="transition-transform duration-200 ease-out h-full"
    >
      <Wrapper
        {...wrapperProps}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-panel/90 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-amber/50 hover:bg-panel2/90 hover:shadow-cardHover ${
          project.link ? "cursor-pointer" : ""
        }`}
      >
        {/* Glow sheen on hover */}
        <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-amber/10 via-transparent to-blue/5" />

        <div>
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-ink transition-colors group-hover:text-amber">
                  {project.title}
                </h3>
                {project.link && (
                  <span className="text-xs text-mute transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber">
                    ↗
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-[11px] text-mute">{project.period}</p>
            </div>
            <MiniChart type={project.chart} />
          </div>

          {/* Description */}
          <p className="mb-6 text-[13.5px] leading-relaxed text-mute group-hover:text-ink/90 transition-colors">
            {project.description}
          </p>
        </div>

        {/* Footer with stack & metric */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line/60 pt-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-line bg-panel3/60 px-2 py-0.5 font-mono text-[11px] text-ink/80 transition-colors group-hover:border-lineHover"
              >
                {s}
              </span>
            ))}
          </div>

          {project.metric && (
            <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-teal">
              {project.metric}
            </span>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
