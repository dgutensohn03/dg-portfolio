import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Clock,
  Network,
  SearchCheck,
  Layers3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LearnNav } from "@/components/learn/LearnShell";
import { learnArticles } from "@/data/learn";

const categories = [
  "Case Studies",
  "Tutorials",
  "Technical Guides",
  "Visual Explainers",
];

const articleVisuals: Record<
  string,
  { icon: LucideIcon; label: string; nodes: readonly string[] }
> = {
  "learning-standards-field-guide": {
    icon: Layers3,
    label: "INTEROPERABILITY MAP",
    nodes: ["Launch", "Track", "Exchange"],
  },
  "activity-to-insight": {
    icon: Activity,
    label: "SYSTEM PATH",
    nodes: ["Event", "LRS", "Decision"],
  },
  "missing-completion": {
    icon: SearchCheck,
    label: "DIAGNOSTIC PATH",
    nodes: ["Experience", "Evidence", "Rule"],
  },
  "enterprise-system-training": {
    icon: Network,
    label: "DESIGN PATH",
    nodes: ["Evidence", "Practice", "Measure"],
  },
};

export default function LearnPage() {
  return (
    <div className="case-study min-h-screen text-[var(--fg)]">
      <LearnNav />
      <main>
        <section className="px-5 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--accent)]">
              Learn
            </p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,7vw,5.75rem)] font-semibold leading-[.94] tracking-[-.055em]">
              Make complex technology
              <br />
              <span className="text-[var(--accent)]">
                useful and understandable.
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              A growing collection of case studies, tutorials, technical guides,
              and visual explainers about the systems I build, the decisions
              behind them, and the lessons worth sharing.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-[var(--hairline)] px-3 py-1.5 text-xs text-[var(--muted)]"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="case-band border-y border-[var(--hairline)] px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {learnArticles.map((article) => {
              const visual = articleVisuals[article.slug];
              const VisualIcon = visual.icon;
              return (
              <Link
                key={article.slug}
                href={`/learn/${article.slug}`}
                className="learn-card group flex flex-col overflow-hidden rounded-3xl border border-[var(--hairline)] bg-[var(--case-card)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="relative min-h-40 overflow-hidden border-b border-[var(--hairline)] bg-[var(--accent)]/[.06] p-5">
                  <div className="flex items-center justify-between text-[var(--accent)]">
                    <VisualIcon className="learn-card-icon" size={25} />
                    <span className="text-[11px] font-bold tracking-[.13em]">
                      VISUAL PREVIEW · {visual.label}
                    </span>
                  </div>
                  <div className="mt-10 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                    {visual.nodes.map((node, index) => (
                      <div key={node} className="contents">
                        <span className="rounded-lg border border-[var(--accent)]/25 bg-[var(--case-card)] px-2 py-2 text-center text-xs font-semibold">
                          {node}
                        </span>
                        {index < visual.nodes.length - 1 && (
                          <ArrowRight aria-hidden="true" className="text-[var(--accent)]/55" size={14} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[var(--accent)]">
                      {article.category}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)]">
                      <Clock size={13} />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight">
                    {article.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {article.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold group-hover:text-[var(--accent)]">
                    Open article <ArrowRight className="learn-card-arrow" size={15} />
                  </span>
                </div>
              </Link>
            )})}
          </div>
        </section>
      </main>
    </div>
  );
}
