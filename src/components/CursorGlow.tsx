"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  React.useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 200;
      const offsetY = (event.clientY / innerHeight - 0.5) * 200;

      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <div className="absolute -inset-40 opacity-60 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.3),transparent_55%)] blur-3xl" />
      </div>
    </motion.div>
  );
}
