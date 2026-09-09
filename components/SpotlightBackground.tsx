"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SpotlightBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Ambient background glowing orbs */}
      <div className="ambient-orb -top-40 -right-40 h-[500px] w-[500px] bg-amber/20 animate-float" />
      <div className="ambient-orb top-1/3 -left-40 h-[450px] w-[450px] bg-teal/15 animate-float-slow" />
      <div className="ambient-orb -bottom-40 right-1/4 h-[550px] w-[550px] bg-blue/15 animate-float" />

      {/* Interactive cursor spotlight */}
      {mounted && (
        <motion.div
          className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
          style={{
            x: springX,
            y: springY,
            background:
              "radial-gradient(circle, rgba(245, 200, 39, 0.12) 0%, rgba(20, 184, 166, 0.08) 40%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
