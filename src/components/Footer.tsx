"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, BriefcaseBusiness } from "lucide-react";

const footerLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/dgutensohn03",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-gutensohn",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dgutensohn@icloud.com",
    external: false,
  },
  {
    icon: BriefcaseBusiness,
    label: "Experience",
    href: "/experience/",
    external: false,
    internal: true,
  },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 pt-3 pb-3 sm:pt-4 sm:pb-4 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center">
        <nav aria-label="Footer links" className="flex items-center justify-center gap-5 sm:gap-6 mb-2">
          {footerLinks.map(({ icon: Icon, label, href, external, internal }) => {
            const className = "relative group text-[var(--fg)]/70 hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cursor-pointer p-2 rounded-lg hover:-translate-y-[2px] hover:drop-shadow-[0_0_6px_rgba(var(--accent-rgb),0.45)] flex items-center justify-center";
            const children = (
              <>
                <span aria-hidden="true" className="pointer-events-none absolute left-1/2 -translate-x-1/2 -mt-[60px] px-3 py-[3px] text-[11px] rounded-md backdrop-blur-md bg-[var(--glass)]/70 text-[var(--fg)]/85 border border-[var(--hairline)] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                  {label}
                </span>
                <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
              </>
            );
            return internal ? (
              <Link key={label} href={href} aria-label={label} title={label} className={className}>
                {children}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className={className}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {children}
              </a>
            );
          })}
        </nav>
        <p className="text-[10px] text-[var(--muted)] opacity-60 px-4 leading-snug max-w-lg">
          *Demo links open in a secure external window and are provided strictly for demonstration purposes. All content remains the property of the respective clients.
        </p>
      </div>
    </footer>
  );
}
