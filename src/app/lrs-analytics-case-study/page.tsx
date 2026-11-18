import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LRS Analytics Dashboard | Frontend Engineering Case Study",
  description: "A frontend engineering case study covering React, TypeScript, reusable UI components, Plotly data visualization, accessibility, and an interactive portfolio reconstruction."
};

const demo = "https://dgutensohn03.github.io/LRS-Analytics/";
const repository = "https://github.com/dgutensohn03/LRS-Analytics";
const home = "/dg-portfolio/#projects";

const decisions = [
  {
    index: "01",
    title: "Share logic instead of duplicating dashboards",
    detail: "A single filtered collection drives KPI cards, program comparisons, charts, and individual records. This keeps related views consistent and makes the relationship between summary metrics and underlying events inspectable."
  },
  {
    index: "02",
    title: "Build reusable, typed interface patterns",
    detail: "StatCard, Panel, SelectField, Progress, and chart components separate presentation from data transformation. TypeScript contracts keep component inputs explicit and make future dashboard views easier to extend."
  },
  {
    index: "03",
    title: "Keep the data model separate from the UI",
    detail: "Filtering, program aggregation, percentage formatting, and CSV generation live in reusable utility functions. Views compose these functions rather than reproducing calculations."
  },
  {
    index: "04",
    title: "Design for investigation, not just reporting",
    detail: "Searchable learners, activity histories, statement filters, pagination, sorting, a details drawer, and CSV export allow users to move from high-level trends to the event records behind them."
  }
];

const evidence = [
  ["Reusable UI components", "Typed card, panel, filter, and progress primitives with shared visual language."],
  ["Interactive data exploration", "Search, sorting, filtering, paging, structured record inspection, and export."],
  ["Responsive layouts", "A compact navigation pattern and adaptable dashboard layouts for smaller screens."],
  ["Accessible foundations", "Explicit input labels, semantic tables, button names, and keyboard access to explorer rows."],
  ["Data visualization", "Plotly activity and assessment charts, performance comparisons, and calculated KPIs."],
  ["Verification", "Vitest-based test setup alongside type-check and build scripts in the public reconstruction."]
];

function SectionHeading({eyebrow,title,children}:{eyebrow:string;title:string;children?:React.ReactNode}) {
  return <div className="max-w-3xl"><p className="text-xs font-bold tracking-[.18em] uppercase text-[var(--accent)]">{eyebrow}</p><h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)]">{title}</h2>{children&&<div className="mt-4 text-base leading-8 text-[var(--muted)]">{children}</div>}</div>;
}

export default function LrsAnalyticsCaseStudy() {
  return (
    <main className="case-study min-h-screen text-[var(--fg)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-9 lg:px-12 py-7">
        <nav aria-label="Case study navigation" className="flex items-center justify-between gap-4 text-sm">
          <a href={home} className="font-semibold hover:underline underline-offset-4">← Back to projects</a>
          <a href={repository} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Source code ↗</a>
        </nav>
      </div>

      <header className="case-base border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-9 lg:px-12 pt-10 pb-16 sm:pt-14 sm:pb-20">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[var(--accent)]">Featured case study · Frontend engineering</p>
          <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-extrabold tracking-tight">Making complex learning data understandable.</h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-8 text-[var(--muted)]">How I engineered a React and TypeScript interface that turns learning activity into useful dashboards, interactive charts, and explainable learner insights.</p>
          <div className="mt-7 flex flex-wrap gap-2">{["React","TypeScript","JavaScript","HTML & CSS","Plotly","Data filtering","Accessible UI"].map(t=><span key={t} className="rounded-full border border-[var(--hairline)] bg-[var(--case-card)] px-3 py-1.5 text-xs font-semibold">{t}</span>)}</div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg bg-[var(--accent)] px-5 py-3 font-semibold text-white hover:opacity-90">Explore the live demo ↗</a>
            <a href={repository} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-[var(--hairline)] px-5 py-3 font-semibold hover:border-[var(--accent)]">View GitHub repository ↗</a>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-5 border-t border-[var(--hairline)] pt-7 sm:grid-cols-3">
            <div><dt className="text-xs uppercase tracking-wider text-[var(--muted)]">My contribution</dt><dd className="mt-2 font-semibold">Frontend architecture, components, charts, filters</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-[var(--muted)]">Original project</dt><dd className="mt-2 font-semibold">Private production learning analytics platform</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-[var(--muted)]">Public demonstration</dt><dd className="mt-2 font-semibold">Independent reconstruction with synthetic records</dd></div>
          </dl>
        </div>
      </header>

      <section className="case-band border-b border-[var(--hairline)] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-9 lg:px-12">
          <SectionHeading eyebrow="Interactive product preview" title="Explore the interface, not just a screenshot."><p>The live reconstruction is embedded below. Use the actual controls to inspect the overview, performance views, learner records, and component patterns. If the embed is restricted by your browser, open the demo directly.</p></SectionHeading>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] shadow-xl">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--hairline)] px-4 py-3"><span className="text-sm font-semibold">LRS Analytics · Interactive reconstruction</span><a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--accent)] hover:underline">Open full screen ↗</a></div>
            <iframe title="Interactive LRS Analytics Dashboard portfolio reconstruction" src={demo} loading="lazy" className="block h-[440px] w-full sm:h-[600px] lg:h-[720px]" />
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">This preview loads the public demo, not the private client application. The sample learners, learning programs, metrics, and events are fictional.</p>
        </div>
      </section>

      <section className="case-base py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-9 lg:px-12 grid gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <SectionHeading eyebrow="The challenge" title="From raw learning activity to decisions."><p>The original platform combined activity from multiple learning experiences. A list of xAPI-style events alone was not useful to stakeholders who needed to understand participation, completion, and assessment trends.</p><p>The interface needed to make those metrics easy to navigate while still letting people investigate how the numbers were produced.</p></SectionHeading>
          <div className="grid gap-4">
            <article className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6"><h3 className="text-lg font-bold">The audience</h3><p className="mt-2 leading-7 text-[var(--muted)]">Learning teams, program owners, and analysts monitoring engagement and results across different courses.</p></article>
            <article className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6"><h3 className="text-lg font-bold">The frontend problem</h3><p className="mt-2 leading-7 text-[var(--muted)]">Turn dense event data into coherent views with reusable controls, traceable calculations, and responsive interactions.</p></article>
            <article className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6"><h3 className="text-lg font-bold">My ownership</h3><p className="mt-2 leading-7 text-[var(--muted)]">I personally built the shared React UI components, chart components, frontend architecture, and data-filtering logic in the original work.</p></article>
          </div>
        </div>
      </section>

      <section className="case-band py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-9 lg:px-12">
          <SectionHeading eyebrow="Engineering decisions" title="Practical tradeoffs behind the interface."><p>The public reconstruction makes the frontend decisions visible in code and interaction, rather than treating the dashboard as a static design.</p></SectionHeading>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">{decisions.map(d=><article key={d.index} className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6 sm:p-7"><span className="text-sm font-bold text-[var(--accent)]">{d.index}</span><h3 className="mt-3 text-xl font-bold">{d.title}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{d.detail}</p></article>)}</div>
        </div>
      </section>

      <section className="case-base py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-9 lg:px-12">
          <SectionHeading eyebrow="Architecture & code" title="A clear path from event to insight."><p>The production system used cloud services and an authenticated reporting platform. The public demo isolates the frontend experience and uses a local synthetic dataset so anyone can explore it safely.</p></SectionHeading>
          <div className="mt-9 grid gap-3 lg:grid-cols-3">
            <div className="rounded-xl border border-[var(--hairline)] bg-[var(--case-card)] p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Data model</p><h3 className="mt-2 text-lg font-bold">Synthetic xAPI-style statements</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Learner, program, verb, date, result, score, and source records</p></div>
            <div className="rounded-xl border border-[var(--hairline)] bg-[var(--case-card)] p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Domain functions</p><h3 className="mt-2 text-lg font-bold">Filtering & aggregation</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Shared filters, program statistics, summary metrics, sorting, and CSV serialization</p></div>
            <div className="rounded-xl border border-[var(--hairline)] bg-[var(--case-card)] p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Presentation</p><h3 className="mt-2 text-lg font-bold">React components & Plotly</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Dashboard cards, charts, tables, learner profiles, detail drawer, and responsive navigation</p></div>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">{evidence.map(([title,description])=><div key={title} className="border-b border-[var(--hairline)] py-4"><h3 className="font-bold">{title}</h3><p className="mt-1 leading-7 text-[var(--muted)]">{description}</p></div>)}</div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-[var(--accent)]"><a href={repository+"/blob/main/src/App.tsx"} target="_blank" rel="noopener noreferrer" className="hover:underline">Read the view architecture ↗</a><a href={repository+"/blob/main/src/lib/analytics.ts"} target="_blank" rel="noopener noreferrer" className="hover:underline">Read the filtering logic ↗</a><a href={repository+"/blob/main/src/components/UI.tsx"} target="_blank" rel="noopener noreferrer" className="hover:underline">Read the component code ↗</a></div>
        </div>
      </section>

      <section className="case-band py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-9 lg:px-12">
          <SectionHeading eyebrow="What I learned" title="Useful reporting needs explainable behavior."><p>Charts become more useful when the same filters drive every view, metrics are defined clearly, and users can trace aggregate results to the underlying events.</p><p>It also matters to separate a portfolio demonstration from production claims: this version intentionally omits live authentication, production APIs, customer data, and real tenant boundaries. Those capabilities should not be inferred from the demo.</p></SectionHeading>
          <div className="mt-9 rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6 sm:p-8"><h3 className="text-lg font-bold">Original private product vs. public reconstruction</h3><div className="mt-5 grid gap-8 sm:grid-cols-2"><div><p className="font-semibold">Original work</p><p className="mt-2 leading-7 text-[var(--muted)]">Production learning analytics involving React, TypeScript, Plotly, reporting APIs, data integration, Microsoft authentication, and backend services. Client code and data remain private.</p></div><div><p className="font-semibold">What you can inspect</p><p className="mt-2 leading-7 text-[var(--muted)]">A standalone React and TypeScript application with fabricated records, interactive reporting workflows, reusable components, chart patterns, and public source code.</p></div></div></div>
          <div className="mt-10 flex flex-wrap gap-3"><a href={demo} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--accent)] px-5 py-3 font-semibold text-white hover:opacity-90">Try the live demo ↗</a><a href={repository} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[var(--hairline)] px-5 py-3 font-semibold hover:border-[var(--accent)]">Inspect the code ↗</a><a href={home} className="rounded-lg border border-[var(--hairline)] px-5 py-3 font-semibold hover:border-[var(--accent)]">Browse more projects</a></div>
        </div>
      </section>
    </main>
  );
}
