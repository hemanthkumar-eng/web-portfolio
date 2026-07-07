"use client";

import { motion } from "framer-motion";

/**
 * Ambient orbital clusters used as a site-wide background theme.
 * Renders faint, slowly rotating rings with drifting "electrons" in the
 * corners of the viewport, behind all page content.
 */

const CLUSTER_RINGS = [
  {
    id: "r1",
    d: "M10,100 a90,70 0 1,0 180,0 a90,70 0 1,0 -180,0",
    rotate: 18,
    dur: "24s",
    dot: "#43e0e8",
    r: 2.2,
  },
  {
    id: "r2",
    d: "M28,100 a72,88 0 1,0 144,0 a72,88 0 1,0 -144,0",
    rotate: -28,
    dur: "30s",
    reverse: true,
    dot: "#8b7bff",
    r: 2,
  },
  {
    id: "r3",
    d: "M20,100 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0",
    rotate: 55,
    dur: "20s",
    dot: "#6f9bff",
    r: 1.8,
  },
];

function OrbitCluster({
  suffix,
  className,
  spin = 150,
  reverseSpin = false,
}: {
  suffix: string;
  className: string;
  spin?: number;
  reverseSpin?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
      animate={{ rotate: reverseSpin ? -360 : 360 }}
      transition={{ duration: spin, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id={`bg-og-${suffix}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#43e0e8" />
          <stop offset="50%" stopColor="#6f9bff" />
          <stop offset="100%" stopColor="#8b7bff" />
        </linearGradient>
        <filter
          id={`bg-gl-${suffix}`}
          x="-120%"
          y="-120%"
          width="340%"
          height="340%"
        >
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {CLUSTER_RINGS.map((o) => (
        <g key={o.id} transform={`rotate(${o.rotate} 100 100)`}>
          <path
            id={`${o.id}-${suffix}`}
            d={o.d}
            stroke={`url(#bg-og-${suffix})`}
            strokeWidth="0.7"
            strokeOpacity="0.4"
          />
          <circle r={o.r} fill={o.dot} filter={`url(#bg-gl-${suffix})`}>
            <animateMotion
              dur={o.dur}
              repeatCount="indefinite"
              keyPoints={o.reverse ? "1;0" : "0;1"}
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#${o.id}-${suffix}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
    </motion.svg>
  );
}

export function OrbitBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <OrbitCluster
        suffix="tr"
        className="absolute -right-40 -top-52 h-[38rem] w-[38rem] opacity-40"
        spin={150}
      />
      <OrbitCluster
        suffix="bl"
        className="absolute -bottom-56 -left-44 h-[42rem] w-[42rem] opacity-[0.32]"
        spin={185}
        reverseSpin
      />
    </div>
  );
}
