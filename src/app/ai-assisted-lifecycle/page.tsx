import Link from "next/link";
import {
  ArrowLeft, Bot, Check, CheckCircle2, ClipboardCheck, Code2, Database,
  ExternalLink, GitCompareArrows, Github, Lightbulb, ListChecks, Search,
  ShieldCheck, TestTube2, Workflow,
} from "lucide-react";

const lifecycle = [
  { icon: Search, step: "01", title: "Investigate", detail: "Trace the architecture and existing state flow before editing." },
  { icon: ListChecks, step: "02", title: "Plan", detail: "Define acceptance criteria and revise scope using repository evidence." },
  { icon: Code2, step: "03", title: "Implement", detail: "Extract a focused, typed persistence boundary." },
  { icon: TestTube2, step: "04", title: "Verify", detail: "Exercise behavior with unit, browser, lint, and type checks." },
  { icon: GitCompareArrows, step: "05", title: "Review", detail: "Inspect the diff, challenge weak tests, and document limitations." },
];

const verification = [
  "Restores valid selections in itinerary order",
  "Removes duplicate and unknown peak IDs",
  "Recovers safely from malformed JSON",
  "Gives shared URL state explicit precedence",
  "Supports an intentionally empty shared trip",
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]"><span className="h-px w-8 bg-[var(--accent)]" />{children}</p>;
}

export default function AILifecyclePage() {
  return (
    <div className="min-h-screen text-[var(--fg)]">
      <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3" aria-label="Case study navigation">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)]"><ArrowLeft size={17} />Back to portfolio</Link>
          <span className="text-xs text-[var(--muted)]">DG · Case Study</span>
        </nav>
      </header>

      <main>
        <section className="px-6 pb-20 pt-16 sm:pt-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--bg)]/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]"><Bot size={15} />Engineering case study</span>
              <span className="text-xs text-[var(--muted)]">High Colorado · 2026</span>
            </div>
            <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">AI-Assisted Engineering<span className="block text-[var(--accent)]">Across the Project Lifecycle</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">Using an agentic workflow to investigate, scope, implement, test, and review a production feature while retaining ownership of architecture, quality, and every final decision.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://github.com/dgutensohn03/High-Colorado" target="_blank" rel="noreferrer" className="btn-solid"><Github size={17} />View repository<ExternalLink size={14} /></a>
              <a href="#lifecycle" className="btn"><Workflow size={17} />Explore the workflow</a>
            </div>
          </div>
        </section>

        <section id="lifecycle" className="border-y border-[var(--hairline)] bg-[var(--bg)]/40 px-6 py-14">
          <div className="mx-auto max-w-6xl"><Label>The lifecycle</Label>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-5">
              {lifecycle.map(({ icon: Icon, step, title, detail }) => <article key={title} className="bg-[var(--bg)] p-5"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]"><Icon size={20} /></span><span className="font-mono text-xs text-[var(--muted)]">{step}</span></div><h2 className="mt-6 text-lg font-semibold">{title}</h2><p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{detail}</p></article>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:py-28"><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div><Label>The challenge</Label><h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Reliable route restoration needed a stronger boundary.</h2><p className="mt-5 leading-relaxed text-[var(--muted)]">High Colorado saved multi-peak itineraries in the browser, but its restoration path trusted persisted input. The feature worked under ideal conditions without protecting the planner from stale or malformed state.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{["Malformed browser data could disrupt initialization.","Renamed or retired peak IDs could survive restoration.","Shared links did not represent an empty trip clearly.","The repository lacked repeatable quality gates."].map((x,i)=><div key={x} className="rounded-xl border border-[var(--hairline)] bg-[var(--bg)]/55 p-5"><span className="font-mono text-xs text-[var(--accent)]">0{i+1}</span><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{x}</p></div>)}</div>
        </div></section>

        <section className="border-y border-[var(--hairline)] bg-[var(--bg)]/35 px-6 py-20 lg:py-28"><div className="mx-auto max-w-6xl"><Label>Engineering decisions</Label><div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[{icon:ClipboardCheck,title:"Scope from evidence",text:"Repository investigation kept the change focused and avoided an unrelated framework migration."},{icon:Database,title:"Validate at the boundary",text:"A typed state module validates storage and URL input, removes stale identifiers, and recovers safely."},{icon:ShieldCheck,title:"Portable agent context",text:"Repository instructions document architecture, constraints, verification commands, and definition of done."}].map(({icon:Icon,title,text})=><article key={title} className="rounded-2xl border border-[var(--hairline)] bg-[var(--bg)]/60 p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]"><Icon size={22} /></span><h2 className="mt-6 text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{text}</p></article>)}
        </div></div></section>

        <section className="px-6 py-20 lg:py-28"><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
          <div><Label>Verification</Label><h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Tests designed around behavior, not implementation details.</h2><div className="mt-8 space-y-3">{verification.map(x=><div key={x} className="flex items-center gap-3 rounded-xl border border-[var(--hairline)] bg-[var(--bg)]/55 px-4 py-3"><Check size={17} className="text-[var(--accent)]"/><span className="text-sm text-[var(--muted)]">{x}</span></div>)}</div></div>
          <div className="rounded-2xl border border-[var(--hairline)] bg-[#0f172a] p-6 text-slate-100 shadow-2xl"><p className="font-mono text-xs text-slate-400">quality.pipeline</p><div className="mt-6 space-y-4 font-mono text-xs">{["TypeScript strict check","ESLint static analysis","Vitest · 5 tests passed","Playwright · 2 browser flows","Git diff validation"].map((x,i)=><div key={x} className="flex justify-between gap-4"><span className="text-slate-300">0{i+1} &nbsp;{x}</span><span className="text-emerald-400">PASS</span></div>)}</div></div>
        </div></section>

        <section className="border-y border-[var(--hairline)] bg-[var(--bg)]/40 px-6 py-16"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] lg:grid-cols-4">{[["5/5","Unit tests"],["2","Browser flows"],["5","Scripts parsed"],["4","CI quality stages"]].map(([v,l])=><div key={l} className="bg-[var(--bg)] p-6 sm:p-8"><CheckCircle2 size={20} className="text-[var(--accent)]"/><p className="mt-5 text-3xl font-semibold">{v}</p><p className="mt-2 text-sm text-[var(--muted)]">{l}</p></div>)}</div></section>

        <section className="px-6 py-20 text-center lg:py-28"><div className="mx-auto max-w-4xl"><span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]"><Lightbulb size={24}/></span><h2 className="mt-7 text-3xl font-semibold sm:text-5xl">AI accelerated the work. Engineering judgment governed it.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">I remained accountable for scope, architecture, accessibility, safety constraints, test quality, and the final diff. The agent supplied leverage; evidence and review determined what shipped.</p><Link href="/" className="btn mt-9"><ArrowLeft size={17}/>Return to portfolio</Link></div></section>
      </main>
    </div>
  );
}
