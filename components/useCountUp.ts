"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

/**
 * Animates a numeric prefix of a string (e.g. "7" or "2nd" -> counts "2")
 * up from 0 on mount. Non-numeric strings are returned as-is.
 */
export function useCountUp(value: string, durationSec = 1.2, delaySec = 0) {
  const match = value.match(/^\d+/);
  const [display, setDisplay] = useState(match ? "0" : value);
  const started = useRef(false);

  useEffect(() => {
    if (!match || started.current) return;
    started.current = true;
    const target = parseInt(match[0], 10);
    const suffix = value.slice(match[0].length);

    const controls = animate(0, target, {
      duration: durationSec,
      delay: delaySec,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return display;
}
