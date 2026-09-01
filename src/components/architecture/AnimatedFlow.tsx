"use client";

import { motion } from "framer-motion";

type Node = {
  id: string;
  label: string;
  description: string;
};

type Props = {
  nodes: Node[];
};

export default function AnimatedFlow({ nodes }: Props) {
  return (
    <div className="relative grid grid-cols-2 gap-8">
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="p-6 bg-white rounded-xl shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          title={node.description}
        >
          <h3 className="font-semibold text-xl">{node.label}</h3>
        </motion.div>
      ))}
    </div>
  );
}
