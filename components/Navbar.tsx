"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-line/70 bg-canvas/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5 sm:px-8">
        {/* Brand identity */}
        <a href="#overview" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber/30 bg-panel2 font-mono text-xs font-bold text-amber shadow-sm transition-all group-hover:scale-105 group-hover:border-amber group-hover:shadow-[0_0_12px_rgba(245,200,39,0.3)]">
            BK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-ink group-hover:text-amber transition-colors">
                {profile.name}
              </span>
              <span className="hidden font-mono text-[11px] text-mute sm:inline">
                / {profile.title}
              </span>
            </div>
          </div>
        </a>

        {/* Live availability status */}
        <div className="hidden items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-[11px] text-teal md:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          Open for Opportunities
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-amber hover:text-amber"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <span className="text-teal font-bold">✓</span>
                  <span className="text-teal">Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    className="h-3.5 w-3.5 text-mute"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute right-0 top-full mt-2 whitespace-nowrap rounded-md border border-teal/40 bg-panel px-2.5 py-1 font-mono text-[10px] text-teal shadow-lg"
                >
                  {profile.email} copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-panel text-mute transition-colors hover:border-blue hover:text-blue"
            aria-label="LinkedIn Profile"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
            </svg>
          </a>

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-panel text-mute transition-colors hover:border-ink hover:text-ink"
              aria-label="GitHub Profile"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.header>
  );
}
