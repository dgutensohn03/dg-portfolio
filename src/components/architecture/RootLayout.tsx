"use client";

import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import { GeistSans, GeistMono } from "@/lib/fonts";
import { AnimatePresence, motion } from "framer-motion";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure client-only mount for motion/animated backgrounds
  useEffect(() => setMounted(true), []);

  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="root-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex flex-col"
          >
            {mounted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
