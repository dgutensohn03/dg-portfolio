"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, GitPullRequest, ShieldCheck, TestTube2, Workflow } from "lucide-react";

const signals = [
  { icon: Workflow, label: "Lifecycle workflow" },
  { icon: TestTube2, label: "Automated verification" },
  { icon: GitPullRequest, label: "Review-driven delivery" },
];

export default function AILifecycleFeature() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="glass relative mb-10 overflow-hidden rounded-2xl"
    >
      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr_.75fr] lg:p-10">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--bg)]/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              <Bot size={14} aria-hidden="true" /> Engineering case study
            </span>
            <span className="text-xs text-[var(--muted)]">High Colorado</span>
          </div>
          <h3 className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-[var(--fg)] sm:text-3xl">
            AI-Assisted Engineering Across the Project Lifecycle
          </h3>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--muted)]">
            How I used an agentic workflow to investigate, scope, implement, test, and review a reliable route-persistence feature while retaining ownership of every engineering decision.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {signals.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-lg border border-[var(--hairline)] bg-[var(--bg)]/45 px-3 py-2 text-xs text-[var(--muted)]">
                <Icon size={16} className="text-[var(--accent)]" aria-hidden="true" /> {label}
              </span>
            ))}
          </div>
          <Link href="/ai-assisted-lifecycle" className="btn-solid group mt-8" aria-label="Read the AI-assisted engineering lifecycle case study">
            Read the case study
            <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="flex min-h-56 items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-[var(--hairline)] bg-[var(--bg)]/70 p-5 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4">
              <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Quality gate</p><p className="mt-1 text-sm font-semibold">Ready for review</p></div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent)] text-white"><ShieldCheck size={21} aria-hidden="true" /></span>
            </div>
            <dl className="mt-4 grid grid-cols-3 gap-3">
              <div><dt className="text-[10px] text-[var(--muted)]">Unit tests</dt><dd className="mt-1 text-xl font-semibold">5/5</dd></div>
              <div><dt className="text-[10px] text-[var(--muted)]">Browser flows</dt><dd className="mt-1 text-xl font-semibold">2</dd></div>
              <div><dt className="text-[10px] text-[var(--muted)]">Checks</dt><dd className="mt-1 text-xl font-semibold">4</dd></div>
            </dl>
            <p className="mt-5 font-mono text-[10px] text-[var(--muted)]">investigate → plan → build → verify → review</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
