"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Email Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col justify-between rounded-2xl border border-line bg-panel p-7 shadow-card transition-all hover:border-amber/60 hover:bg-panel2"
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-[11px] font-semibold text-amber">
              Direct Inquiries
            </span>
            <span className="font-mono text-xs text-mute">⚡ ~24h reply</span>
          </div>

          <p className="mt-6 font-mono text-xl font-bold text-ink break-all group-hover:text-amber transition-colors">
            {profile.email}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mute">
            Looking for a Data Analyst to build production dashboards, clean pipelines, or extract business intelligence? Let's talk.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-line/50">
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-xl bg-amber px-4 py-2 font-mono text-xs font-bold text-canvas transition-opacity hover:opacity-90 shadow-[0_0_12px_rgba(245,200,39,0.25)]"
          >
            {copied ? (
              <>
                <span>✓</span>
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Address</span>
              </>
            )}
          </motion.button>

          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl border border-line bg-panel2 px-4 py-2 font-mono text-xs font-semibold text-ink transition-colors hover:border-ink"
          >
            Open Mail Client ↗
          </a>
        </div>
      </motion.div>

      {/* LinkedIn & Social Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col justify-between rounded-2xl border border-line bg-panel p-7 shadow-card transition-all hover:border-blue/60 hover:bg-panel2"
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-blue/30 bg-blue/10 px-3 py-1 font-mono text-[11px] font-semibold text-blue">
              Professional Network
            </span>
            <span className="font-mono text-xs text-teal">Open to Connect</span>
          </div>

          <p className="mt-6 text-xl font-bold text-ink group-hover:text-blue transition-colors">
            {profile.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mute">
            Connect for full-time Data Analyst opportunities, referrals, or discussions on Power BI, data engineering, and predictive models.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-line/50">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue px-4 py-2 font-mono text-xs font-bold text-white transition-opacity hover:opacity-90 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
          >
            <span>LinkedIn Profile</span>
            <span>↗</span>
          </a>

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-line bg-panel2 px-4 py-2 font-mono text-xs font-semibold text-ink transition-colors hover:border-ink"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
