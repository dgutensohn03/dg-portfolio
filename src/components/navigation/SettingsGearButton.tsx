"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

interface Props {
  active: boolean;
  onClick: () => void;
}

const SettingsGearButton = forwardRef<HTMLButtonElement, Props>(({ active, onClick }, ref) => (
  <motion.button
    ref={ref}
    onClick={onClick}
    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 dark:hover:bg-black/40 transition"
    animate={{ rotate: active ? 20 : 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <Settings size={20} className={active ? "text-orange-400" : "text-[var(--fg)]/85"} />
  </motion.button>
));

SettingsGearButton.displayName = "SettingsGearButton";
export default SettingsGearButton;