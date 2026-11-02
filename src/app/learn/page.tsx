"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity, ArrowRight, CalendarDays, Clock, Network, SearchCheck, Layers3, Search, RotateCcw
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LearnNav } from "@/components/learn/LearnShell";
import { learnArticles } from "@/data/learn";

const categories = ["All", "Case Study", "Tutorial", "Technical Guide", "Visual Explainer"] as const;
const articleVisuals: Record<string, { icon: LucideIcon; label: string; nodes: readonly string[] }> = {
  "learning-standards-field-guide": { icon: Layers3, label: "INTEROPERABILITY MAP", nodes: ["Launch", "Track", "Exchange"] },
  "activity-to-insight": { icon: Activity, label: "SYSTEM PATH", nodes: ["Event", "LRS", "Decision"] },
  "missing-completion": { icon: SearchCheck, label: "DIAGNOSTIC PATH", nodes: ["Experience", "Evidence", "Rule"] },
  "enterprise-system-training": { icon: Network, label: "DESIGN PATH", nodes: ["Evidence", "Practice", "Measure"] },
  "working-smarter-with-ai": { icon: SearchCheck, label: "PROMPT PATH", nodes: ["Question", "Context", "Improve"] },
};
const formatDate = (date: string) => new Date(date + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function LearnPage() {
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest" | "title" | "shortest">("newest");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return learnArticles.filter((a) =>
      (category === "All" || a.category === category) &&
      (!q || (a.title + " " + a.summary + " " + a.category).toLowerCase().includes(q))
    ).sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "shortest") return parseInt(a.readTime) - parseInt(b.readTime);
      // Never invent historical publish dates: undated articles follow dated ones.
      if (!a.publishedAt && !b.publishedAt) return a.title.localeCompare(b.title);
      if (!a.publishedAt) return 1;
      if (!b.publishedAt) return -1;
      return sort === "oldest" ? a.publishedAt.localeCompare(b.publishedAt) : b.publishedAt.localeCompare(a.publishedAt);
    });
  }, [category, search, sort]);

  return (
    <div className="case-study min-h-screen text-[var(--fg)]">
      <LearnNav />
      <main>
        <section className="px-5 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--accent)]">Learn</p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,7vw,5.75rem)] font-semibold leading-[.94] tracking-[-.055em]">
              Make complex technology<br/><span className="text-[var(--accent)]">useful and understandable.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Case studies, tutorials, technical guides, and visual explainers about the systems I build, the decisions behind them, and lessons worth sharing.
            </p>
          </div>
        </section>
        <section className="case-band border-y border-[var(--hairline)] px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex flex-col gap-5 rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <label className="min-w-0 flex-1">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[.12em] text-[var(--muted)]">Search articles</span>
                  <span className="flex items-center gap-2 rounded-xl border border-[var(--hairline)] px-3 focus-within:border-[var(--accent)]">
                    <Search size={18} aria-hidden="true" className="shrink-0 text-[var(--muted)]" />
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search by topic or keyword..." className="w-full min-w-0 bg-transparent py-3 text-sm outline-none placeholder:text-[var(--muted)]" />
                  </span>
                </label>
                <label className="sm:w-52">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[.12em] text-[var(--muted)]">Sort by</span>
                  <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}
                    className="w-full rounded-xl border border-[var(--hairline)] bg-[var(--case-card)] px-3 py-3 text-sm text-[var(--fg)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]">
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="title">Title A–Z</option>
                    <option value="shortest">Shortest read</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
                {categories.map((x) => <button key={x} type="button" onClick={() => setCategory(x)}
                  aria-pressed={category === x}
                  className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${category === x ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--hairline)] text-[var(--muted)] hover:border-[var(--accent)]"}`}>
                  {x === "All" ? "All articles" : x + "s"}
                </button>)}
              </div>
            </div>
            <div aria-live="polite" className="mb-5 text-sm text-[var(--muted)]">
              Showing {filtered.length} of {learnArticles.length} articles
            </div>
            {filtered.length === 0 ? <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] px-6 py-16 text-center">
              <p className="text-xl font-semibold">No articles match your search.</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Try another keyword or clear the filters.</p>
              <button type="button" onClick={() => { setCategory("All"); setSearch(""); setSort("newest"); }} className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent)]"><RotateCcw size={15}/>Clear filters</button>
            </div> : <div className="grid gap-5 md:grid-cols-2">
              {filtered.map((article) => {
                const visual = articleVisuals[article.slug];
                const VisualIcon = visual?.icon ?? Layers3;
                return (
                  <Link key={article.slug} href={`/learn/${article.slug}`}
                    className="learn-card group flex flex-col overflow-hidden rounded-3xl border border-[var(--hairline)] bg-[var(--case-card)] transition hover:-translate-y-1 hover:border-[var(--accent)]">
                    <div className="relative min-h-40 overflow-hidden border-b border-[var(--hairline)] bg-[var(--accent)]/[.06] p-5">
                      <div className="flex items-center justify-between gap-3 text-[var(--accent)]">
                        <VisualIcon className="learn-card-icon shrink-0" size={25}/>
                        <span className="text-right text-[10px] font-bold tracking-[.10em] sm:text-[11px]">VISUAL PREVIEW · {visual?.label ?? "ARTICLE"}</span>
                      </div>
                      <div className="mt-10 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                        {(visual?.nodes ?? ["Explore", "Learn", "Apply"]).map((node, index) => <div key={node} className="contents">
                          <span className="min-w-0 rounded-lg border border-[var(--accent)]/25 bg-[var(--case-card)] px-1 py-2 text-center text-[11px] font-semibold sm:px-2 sm:text-xs">{node}</span>
                          {index < 2 && <ArrowRight aria-hidden="true" className="text-[var(--accent)]/55" size={14}/>}
                        </div>)}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-bold uppercase tracking-[.14em] text-[var(--accent)]">{article.category}</span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)]"><Clock size={13}/>{article.readTime} read</span>
                      </div>
                      <h2 className="mt-4 text-2xl font-semibold leading-tight">{article.title}</h2>
                      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{article.summary}</p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted)]">
                        {article.publishedAt && <span className="inline-flex items-center gap-1.5"><CalendarDays size={13}/><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time></span>}
                        {article.author && <span>By {article.author}</span>}
                      </div>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold group-hover:text-[var(--accent)]">
                        Read article <ArrowRight className="learn-card-arrow" size={15}/>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>}
          </div>
        </section>
      </main>
    </div>
  );
}
