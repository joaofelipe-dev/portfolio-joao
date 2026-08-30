"use client";
import { motion } from "motion/react";

interface DrawPath {
  d: string;
  delay: number;
}

interface IconGroupProps {
  transform: string;
  colorClass: string;
  opacityClass: string;
  paths: DrawPath[];
  duration?: number;
}

const DrawGroup = ({
  transform,
  colorClass,
  opacityClass,
  paths,
  duration = 1.2,
}: IconGroupProps) => (
  <g transform={transform} className={`${colorClass} ${opacityClass}`}>
    {paths.map((path, index) => (
      <motion.path
        key={index}
        d={path.d}
        fill="none"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration, delay: path.delay, ease: "easeInOut" }}
      />
    ))}
  </g>
);

export default function SvgDraw() {
  return (
    <svg
      viewBox="0 0 1000 700"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {/* Orbit central */}
      <DrawGroup
        transform="translate(500 350) scale(8)"
        colorClass="stroke-[var(--secondary)]"
        opacityClass="opacity-15"
        duration={2.4}
        paths={[
          { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0", delay: 0 },
          { d: "M17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0", delay: 0.3 },
          { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0", delay: 0.3 },
          { d: "M10.4 21.9a10 10 0 0 0 9.941-15.131", delay: 0.6 },
          { d: "M13.5 2.1a10 10 0 0 0-9.941 15.131", delay: 0.9 },
        ]}
      />

      {/* GitBranch */}
      <DrawGroup
        transform="translate(110 140) scale(2.6)"
        colorClass="stroke-[var(--primary)]"
        opacityClass="opacity-45"
        paths={[
          { d: "M6 3v12", delay: 0.3 },
          { d: "M15 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0", delay: 0.5 },
          { d: "M3 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0", delay: 0.5 },
          { d: "M18 9a9 9 0 0 1-9 9", delay: 0.7 },
        ]}
      />

      {/* Cpu */}
      <DrawGroup
        transform="translate(760 140) scale(2.6)"
        colorClass="stroke-[var(--secondary)]"
        opacityClass="opacity-45"
        paths={[
          { d: "M4 4h16v16H4z", delay: 0.6 },
          { d: "M9 9h6v6H9z", delay: 0.9 },
          { d: "M15 2v2", delay: 1.0 },
          { d: "M15 20v2", delay: 1.0 },
          { d: "M2 15h2", delay: 1.1 },
          { d: "M2 9h2", delay: 1.1 },
          { d: "M20 15h2", delay: 1.1 },
          { d: "M20 9h2", delay: 1.1 },
          { d: "M9 2v2", delay: 1.2 },
          { d: "M9 20v2", delay: 1.2 },
        ]}
      />

      {/* GitCommit */}
      <DrawGroup
        transform="translate(140 480) scale(2.4)"
        colorClass="stroke-[var(--secondary)]"
        opacityClass="opacity-45"
        paths={[
          { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0", delay: 1.0 },
          { d: "M3 12h6", delay: 1.2 },
          { d: "M15 12h6", delay: 1.3 },
        ]}
      />

      {/* Database */}
      <DrawGroup
        transform="translate(740 480) scale(2.4)"
        colorClass="stroke-[var(--tertiary)]"
        opacityClass="opacity-45"
        paths={[
          { d: "M12 2a9 3 0 1 0 0 6a9 3 0 1 0 0-6z", delay: 1.1 },
          { d: "M3 5v14a9 3 0 0 0 18 0V5", delay: 1.4 },
          { d: "M3 12a9 3 0 0 0 18 0", delay: 1.6 },
        ]}
      />

      {/* GitMerge */}
      <DrawGroup
        transform="translate(250 300) scale(2.2)"
        colorClass="stroke-[var(--tertiary)]"
        opacityClass="opacity-45"
        paths={[
          { d: "M6 21V9a9 9 0 0 0 9 9", delay: 1.2 },
          { d: "M3 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0", delay: 1.4 },
          { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0", delay: 1.5 },
        ]}
      />

      {/* Server */}
      <DrawGroup
        transform="translate(690 300) scale(2.2)"
        colorClass="stroke-[var(--primary)]"
        opacityClass="opacity-40"
        paths={[
          { d: "M2 2h20v8H2z", delay: 1.3 },
          { d: "M2 14h20v8H2z", delay: 1.6 },
          { d: "M5.5 6a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0-1 0", delay: 1.8 },
          { d: "M5.5 18a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0-1 0", delay: 1.9 },
        ]}
      />
    </svg>
  );
}
