import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { learnArticles } from "@/data/learn";

export default function LearnFeature() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--accent)]">Learn</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">A closer look at how technology works.</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">Tutorials, case studies, technical guides, and visual explainers drawn from the systems I design and build.</p>
      </div>

      <div className="mt-9 grid gap-4 lg:grid-cols-3">
        {learnArticles.map((article) => (
          <Link key={article.slug} href={`/learn/${article.slug}`} className="group rounded-2xl border border-[var(--hairline)] bg-[var(--bg)]/60 p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]">
            <div className="flex items-center justify-between text-xs text-[var(--muted)]">
              <span className="font-mono text-[var(--accent)]">{article.number}</span>
              <span className="inline-flex items-center gap-1"><Clock size={13}/>{article.readTime}</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[.14em] text-[var(--accent)]">{article.category}</p>
            <h3 className="mt-3 text-xl font-semibold leading-snug">{article.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{article.summary}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)]">Read article <ArrowRight size={15}/></span>
          </Link>
        ))}
      </div>

      <Link href="/learn" className="btn mt-7"><BookOpen size={17}/>Explore Learn <ArrowRight size={15}/></Link>
    </div>
  );
}
