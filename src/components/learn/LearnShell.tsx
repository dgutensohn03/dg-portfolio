import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import PrintButton from "./PrintButton";

export function LearnNav({ article = false }: { article?: boolean }) {
  return <header className="print-hidden sticky top-0 z-50 px-4 py-3"><nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3" aria-label="Learn navigation"><Link href={article ? "/learn" : "/"} className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)]"><ArrowLeft size={16}/>{article ? "All Learn articles" : "Portfolio"}</Link><span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-[var(--accent)]"><BookOpen size={15}/>Learn</span>{article ? <PrintButton/> : <span className="w-[72px]"/>}</nav></header>;
}

export function ArticleHero({ category, title, intro, readTime }: { category: string; title: string; intro: string; readTime: string }) {
  return <section className="px-5 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20"><div className="mx-auto max-w-5xl"><div className="flex flex-wrap items-center gap-3 text-xs"><span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 font-semibold uppercase tracking-[.14em] text-[var(--accent)]">{category}</span><span className="text-[var(--muted)]">{readTime} read</span></div><h1 className="mt-7 max-w-5xl text-[clamp(3rem,8vw,6.4rem)] font-semibold leading-[.95] tracking-[-.055em]">{title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">{intro}</p></div></section>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--accent)]">{children}</p>;
}

export function ConfidentialityNote() {
  return <p className="border-t border-[var(--hairline)] pt-6 text-sm leading-6 text-[var(--muted)]">Based on real enterprise learning technology work. Client names, identifiers, and implementation details have been modified to protect confidentiality.</p>;
}
