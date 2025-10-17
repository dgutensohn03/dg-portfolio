import { motion } from "framer-motion";

export default function SystemNodes({ className = "", animate = false }: { className?: string; animate?: boolean }) {
  const Path = animate ? motion.line : "line";
  const Circle = animate ? motion.circle : "circle";

  return (
    <svg
      viewBox="0 0 100 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      className={className}
    >
      <Circle
        cx="10"
        cy="10"
        r="3"
        initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
        animate={animate ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
      <Path
        x1="13"
        y1="10"
        x2="40"
        y2="10"
        initial={animate ? { pathLength: 0 } : undefined}
        animate={animate ? { pathLength: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <Circle
        cx="43"
        cy="10"
        r="3"
        initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
        animate={animate ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <Path
        x1="46"
        y1="10"
        x2="73"
        y2="10"
        initial={animate ? { pathLength: 0 } : undefined}
        animate={animate ? { pathLength: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <Circle
        cx="76"
        cy="10"
        r="3"
        initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
        animate={animate ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
    </svg>
  );
}
