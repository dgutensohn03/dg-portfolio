"use client";

import { motion } from "framer-motion";

type Props = { light?: boolean };

export default function AnimatedBackground({ light = false }: Props) {
  const shapes = Array.from({ length: 5 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {shapes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: 100 + i * 40,
            height: 100 + i * 40,
            top: `${10 + i * 15}%`,
            left: `${20 + i * 15}%`,
            backgroundColor: light ? "#FCEA10" : "#0EA5E9",
          }}
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15 + i * 3 }}
        />
      ))}
    </div>
  );
}
