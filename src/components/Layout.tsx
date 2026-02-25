import "./globals.css";
import { ReactNode } from "react";
import { GeistSans, GeistMono } from "@/lib/fonts"; // your custom fonts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Gutensohn Portfolio",
  description: "Full-Stack Engineer portfolio showcasing architecture playbooks and projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags, favicon, etc. */}
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Global wrapper for motion-safe rendering */}
        <div className="min-h-screen w-full relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
