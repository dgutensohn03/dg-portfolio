import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  UserRound,
} from "lucide-react";
import PrintButton from "./PrintButton";

export function LearnNav({ article = false }: { article?: boolean }) {
  return (
    <header className="print-hidden sticky top-0 z-50 px-4 py-3">
      <nav
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3"
        aria-label="Learn navigation"
      >
        <Link
          href={article ? "/learn" : "/"}
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)]"
        >
          <ArrowLeft size={16} />
          {article ? "All Learn articles" : "Portfolio"}
        </Link>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
          <BookOpen size={15} />
          Learn
        </span>
        {article ? <PrintButton /> : <span className="w-[72px]" />}
      </nav>
    </header>
  );
}

export function ArticleHero({
  category,
  title,
  intro,
  readTime,
}: {
  category: string;
  title: string;
  intro: string;
  readTime: string;
}) {
  return (
    <section className="print-cover px-5 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-5xl">
        <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-[var(--accent)]">
          {category}
        </span>
        <h1 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,5.75rem)] font-semibold leading-[.95] tracking-[-.055em]">
          {title}
        </h1>
        <p className="print-hero-intro mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
          {intro}
        </p>
        <div className="print-hero-meta mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[var(--hairline)] pt-5 text-sm text-[var(--muted)]">
          <span className="inline-flex items-center gap-2">
            <UserRound size={15} />
            Daniel Gutensohn
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={15} />
            Updated September 2026
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 size={15} />
            {readTime} read
          </span>
        </div>
        <div className="print-only mt-8 text-sm text-slate-600">
          <p>
            Technical communication portfolio ·
            dgutensohn03.github.io/dg-portfolio
          </p>
        </div>
      </div>
    </section>
  );
}

export function LearningFrame({
  outcomes,
  sections,
}: {
  outcomes: string[];
  sections: { href: string; label: string }[];
}) {
  return (
    <section className="print-overview case-band border-y border-[var(--hairline)] px-5 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <Eyebrow>What you will be able to do</Eyebrow>
          <ul className="mt-5 space-y-3">
            {outcomes.map((x) => (
              <li
                key={x}
                className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
                />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <nav
          aria-label="On this page"
          className="print-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-5"
        >
          <p className="text-sm font-semibold">On this page</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {sections.map((x) => (
              <a
                key={x.href}
                href={x.href}
                className="rounded-full border border-[var(--hairline)] px-3 py-2 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {x.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

export function PracticalToolkit({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <details className="toolkit group rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] shadow-sm open:border-[var(--accent)]/40">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 marker:hidden sm:p-6">
        <span className="flex items-start gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
            <ClipboardCheck size={20} />
          </span>
          <span>
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[var(--accent)]">
              Practical toolkit
            </span>
            <span className="mt-1 block font-semibold">{title}</span>
            <span className="mt-1 block text-sm font-normal leading-6 text-[var(--muted)]">
              {description}
            </span>
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className="shrink-0 text-[var(--accent)] transition-transform group-open:rotate-180"
          size={20}
        />
      </summary>
      <div className="border-t border-[var(--hairline)] px-5 pb-6 pt-5 sm:px-6">
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-[var(--muted)]">
          Included automatically when you save this article as a PDF.
        </p>
      </div>
    </details>
  );
}

export function ArticleFooter({
  currentSlug,
  references,
}: {
  currentSlug: string;
  references: { label: string; href: string }[];
}) {
  const related = [
    ["activity-to-insight", "From Activity to Insight"],
    ["missing-completion", "The Case of the Missing Completion"],
    [
      "enterprise-system-training",
      "Designing Training for a Complex Enterprise System",
    ],
  ].filter(([slug]) => slug !== currentSlug);
  return (
    <section className="case-base px-5 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>References and standards</Eyebrow>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
              {references.map((x) => (
                <li key={x.label}>
                  <a
                    className="print-reference-link underline decoration-[var(--hairline)] underline-offset-4 hover:text-[var(--accent)]"
                    href={x.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="print-hidden">
            <Eyebrow>Continue learning</Eyebrow>
            <div className="mt-5 space-y-3">
              {related.map(([slug, title]) => (
                <Link
                  key={slug}
                  href={`/learn/${slug}`}
                  className="group flex items-center justify-between rounded-xl border border-[var(--hairline)] bg-[var(--case-card)] p-4 text-sm font-semibold hover:border-[var(--accent)]"
                >
                  {title}
                  <ArrowRight
                    size={16}
                    className="group-hover:text-[var(--accent)]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <ConfidentialityNote />
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--accent)]">
      {children}
    </p>
  );
}

export function ConfidentialityNote() {
  return (
    <p className="border-t border-[var(--hairline)] pt-6 text-sm leading-6 text-[var(--muted)]">
      Based on real enterprise learning technology work. Client names,
      identifiers, and implementation details have been modified to protect
      confidentiality.
    </p>
  );
}
