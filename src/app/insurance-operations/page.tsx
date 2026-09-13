"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  ExternalLink,
  Github,
  Layers3,
  RefreshCw,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";

const live = "https://dgutensohn03.github.io/dotnet-insurance-dashboard";
const chapters = ["Product", "Architecture", "One claim", "Lifecycle", "UI", "Testing", "Delivery", "Tradeoffs", "Interview"];

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">
      <span className="font-mono text-base">{n}</span>
      <span className="h-px w-8 bg-[var(--accent)]" />
      {children}
    </p>
  );
}

function Section({ id, n, title, children, tint = false }: { id: string; n: string; title: string; children: React.ReactNode; tint?: boolean }) {
  return (
    <section id={id} className={`${tint ? "case-band border-y border-[var(--hairline)]" : "case-base"} scroll-mt-32 px-5 py-20 sm:px-6 sm:py-24 lg:py-28`}>
      <div className="mx-auto max-w-7xl">
        <Label n={n}>{title}</Label>
        {children}
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-5 sm:p-6">
      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--accent)]">{title}</p>
      <div className="mt-3 text-sm leading-7 text-[var(--muted)]">{children}</div>
    </div>
  );
}

function Code({ title, children }: { title: string; children: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#09111f] shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-white/20" /><i className="h-2.5 w-2.5 rounded-full bg-white/20" /><i className="h-2.5 w-2.5 rounded-full bg-white/20" /></div>
        <span className="font-mono text-[10px] text-slate-500">{title}</span>
      </div>
      <pre className="overflow-x-auto p-5 text-[12px] leading-7 text-slate-300"><code>{children}</code></pre>
    </div>
  );
}

function Preview({ title, path = "" }: { title: string; path?: string }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-[22px] border border-[var(--hairline)] bg-[var(--case-card)] shadow-2xl shadow-black/10">
        <div className="flex items-center gap-2 border-b border-[var(--hairline)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--hairline)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--hairline)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--hairline)]" />
          <span className="ml-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--muted)]">InsureOps · {title}</span>
        </div>
        <div className="relative h-[430px] bg-white sm:h-[560px]">
          <iframe title={`InsureOps ${title} live preview`} src={`${live}${path}`} loading="lazy" className="h-full w-full border-0" />
        </div>
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs text-[var(--muted)]">
        <span>Live product preview — fictional demo data.</span>
        <a href={`${live}${path}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-[var(--accent)]">Open full screen <ExternalLink size={12} /></a>
      </figcaption>
    </figure>
  );
}

export default function InsuranceOperationsCaseStudy() {
  return (
    <div className="case-study min-h-screen text-[var(--fg)]">
      <header className="sticky top-0 z-50 px-3 py-3 sm:px-6">
        <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)]"><ArrowLeft size={16} />Portfolio</Link>
          <span className="text-[10px] font-bold tracking-[.22em] text-[var(--muted)]">DG · DO GOOD</span>
          <a href="https://github.com/dgutensohn03/dotnet-insurance-dashboard" target="_blank" rel="noreferrer" aria-label="View source on GitHub" className="text-[var(--muted)] hover:text-[var(--accent)]"><Github size={18} /></a>
        </nav>
      </header>

      <main>
        <section className="case-base px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-24">
          <div className="mx-auto max-w-7xl">
            <Label n="00">Full-stack engineering case study</Label>
            <h1 className="mt-7 max-w-6xl text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[92px]">
              Insurance operations,<span className="block text-[var(--accent)]">designed like a real product.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              InsureOps is a fictional operations platform built with C#/.NET 8, Blazor WebAssembly, and ASP.NET Core. The interesting part is not the dashboard itself; it is how product decisions, domain rules, component architecture, API boundaries, testing, and deployment fit together.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn-solid" href={live} target="_blank" rel="noreferrer">Open live dashboard <ExternalLink size={15} /></a>
              <a className="btn" href="#s1">Read the case study <ArrowRight size={16} /></a>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-4">
              {[["STACK", "C# · .NET 8 · Blazor · ASP.NET Core"], ["SCOPE", "Policies · claims · customers · analytics"], ["QUALITY", "xUnit · CI gate · responsive UX"], ["DOMAIN", "Recoverable archive / restore lifecycle"]].map(([h, t]) => (
                <div key={h} className="bg-[var(--case-card)] p-5 sm:p-6"><p className="text-xs font-bold text-[var(--accent)]">{h}</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{t}</p></div>
              ))}
            </div>
          </div>
        </section>

        <div className="sticky top-[76px] z-40 hidden border-y border-[var(--hairline)] bg-[var(--case-base)]/95 backdrop-blur-xl lg:block">
          <nav className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3">
            {chapters.map((chapter, i) => <a key={chapter} href={`#s${i + 1}`} className="whitespace-nowrap text-[10px] font-semibold text-[var(--muted)] hover:text-[var(--accent)]">{String(i + 1).padStart(2, "0")} {chapter}</a>)}
          </nav>
        </div>

        <Section id="s1" n="01" title="The product" tint>
          <div className="mt-8 grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold sm:text-5xl">Start with the operator, not the framework.</h2>
              <p className="mt-5 leading-7 text-[var(--muted)]">An operations user needs to answer a few questions quickly: What is the state of the portfolio? Which claims need attention? Which customer or policy am I looking at? What changed, and what can I safely do next?</p>
              <div className="mt-7 grid gap-3">
                <Card title="Product goal">Reduce the distance between operational data and an informed action. Tables stay dense enough for work, while drawers and modals preserve context instead of constantly navigating away.</Card>
                <Card title="Portfolio constraint">All data is fictional. The live GitHub Pages build uses deterministic in-browser demo data because static hosting cannot run the ASP.NET Core process.</Card>
              </div>
            </div>
            <Preview title="Operations overview" />
          </div>
        </Section>

        <Section id="s2" n="02" title="Architecture">
          <div className="mt-8">
            <h2 className="max-w-4xl text-3xl font-semibold sm:text-5xl">The UI does not know where its data comes from.</h2>
            <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">The central client boundary is <code>IInsuranceDataService</code>. The same Blazor pages can run against a browser-only demo implementation or an HTTP implementation that talks to ASP.NET Core.</p>
            <div className="mt-10 grid gap-3 md:grid-cols-4">
              {[[Layers3, "Blazor UI", "Pages, state, forms, drawers, modals"], [Workflow, "Service boundary", "One contract for data operations"], [RefreshCw, "ASP.NET Core", "HTTP routes and lifecycle commands"], [Database, "Repository", "Persistence boundary"]].map(([Icon, h, t]) => {
                const I = Icon as typeof Layers3;
                return <div key={String(h)} className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/[.045] p-5"><I className="text-[var(--accent)]" size={22} /><h3 className="mt-5 font-semibold">{String(h)}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{String(t)}</p></div>;
              })}
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <Code title="IInsuranceDataService.cs">{`Task<IReadOnlyList<Claim>> GetClaimsAsync();\nTask<Claim> AddClaimAsync(Claim claim);\nTask<Claim> ArchiveClaimAsync(int id);\nTask<Claim> RestoreClaimAsync(int id);\n\nTask<Customer> UpdateCustomerAsync(Customer customer);\nTask<Customer> ArchiveCustomerAsync(int id);\nTask<Customer> RestoreCustomerAsync(int id);`}</Code>
              <Card title="Why this boundary earns its keep">It isolates transport and hosting decisions from presentation code. GitHub Pages uses <code>DemoInsuranceDataService</code>; full-stack development uses <code>ApiInsuranceDataService</code>. I would remove an abstraction like this if it merely renamed calls without protecting a real boundary.</Card>
            </div>
          </div>
        </Section>

        <Section id="s3" n="03" title="Follow one claim" tint>
          <div className="mt-8 grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold sm:text-5xl">CLM-10482 makes the architecture concrete.</h2>
              <p className="mt-5 leading-7 text-[var(--muted)]">The demo intentionally keeps one stable record: policy <strong>POL-48392</strong>, claim <strong>CLM-10482</strong>, status <strong>Investigating</strong>, exposure <strong>$42,850</strong>. That gives the case study and live product one shared example.</p>
              <div className="mt-8 space-y-4">
                {[["01", "Repository", "Returns the typed Claim model"], ["02", "API", "Serializes it over HTTP in full-stack mode"], ["03", "Client service", "Returns Task<Claim> / collections to the page"], ["04", "LINQ", "Filters and prioritizes active exposure"], ["05", "Blazor", "Renders the table and selected detail drawer"]].map(([n, h, t]) => <div key={n} className="flex gap-4 border-b border-[var(--hairline)] pb-4"><span className="font-mono text-xs text-[var(--accent)]">{n}</span><div><strong className="text-sm">{h}</strong><p className="mt-1 text-sm text-[var(--muted)]">{t}</p></div></div>)}
              </div>
            </div>
            <Preview title="Claims operations" path="/claims" />
          </div>
        </Section>

        <Section id="s4" n="04" title="Domain lifecycle">
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold sm:text-5xl">CRUD verbs are not a domain model.</h2>
              <p className="mt-5 leading-7 text-[var(--muted)]">A first implementation exposed customer deletion. That was technically easy and domain-poor. Claims and customer relationships are records with history, so the design moved to recoverable lifecycle state.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[['ACTIVE', 'Normal operational workflows'], ['ARCHIVED', 'Retained but removed from active work'], ['RESTORED', 'Returned to active workflows']].map(([h, t]) => <div key={h} className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-5"><p className="text-xs font-bold text-[var(--accent)]">{h}</p><p className="mt-3 text-xs leading-5 text-[var(--muted)]">{t}</p></div>)}
              </div>
              <div className="mt-5"><Card title="Operational consequence">Archived claims are excluded from active claim workload, exposure, and analytics while remaining discoverable through Active / Archived / All filters. Restore reverses the lifecycle state rather than recreating data.</Card></div>
            </div>
            <div>
              <Code title="Claim.cs">{`public bool IsArchived { get; set; }\npublic DateTimeOffset? ArchivedAt { get; set; }\npublic DateTimeOffset LastUpdatedAt { get; set; }\n    = DateTimeOffset.UtcNow;`}</Code>
              <div className="mt-4"><Code title="DemoInsuranceDataService.cs">{`public Task<Claim> ArchiveClaimAsync(int id)\n{\n    var claim = _claims.First(c => c.Id == id);\n    claim.IsArchived = true;\n    claim.ArchivedAt = DateTimeOffset.UtcNow;\n    claim.LastUpdatedAt = DateTimeOffset.UtcNow;\n    return Task.FromResult(claim);\n}`}</Code></div>
              <div className="mt-4"><Card title="Production hardening">A real regulated system would persist immutable audit events, actor identity, reason codes, authorization decisions, retention policy, and concurrency rules. This portfolio implementation demonstrates the lifecycle boundary without pretending those controls already exist.</Card></div>
            </div>
          </div>
        </Section>

        <Section id="s5" n="05" title="Interaction design" tint>
          <div className="mt-8">
            <h2 className="max-w-4xl text-3xl font-semibold sm:text-5xl">Different tasks deserve different surfaces.</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Card title="Modal · create / edit">A focused form is temporary work with a clear commit or cancel decision. Validation, saving state, and destructive follow-up actions stay contained.</Card>
              <Card title="Drawer · inspect">Claim and customer details open beside the data table so operators keep list context and can move between records without navigating away.</Card>
              <Card title="Confirmation · archive">Archive is explicit and reversible. The copy explains the operational consequence instead of presenting a generic “Are you sure?” dialog.</Card>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <Preview title="Customers" path="/customers" />
              <div className="space-y-4">
                <Card title="Responsive behavior">Desktop dialogs are centered, detail drawers sit at the right edge, and smaller screens shift both patterns toward bottom-sheet behavior so the interaction remains usable without squeezing the form.</Card>
                <Card title="Accessibility contract">The implemented dialogs expose dialog semantics and accessible labels. The next hardening layer is full focus trapping/restoration plus automated keyboard and screen-reader regression coverage.</Card>
                <Card title="What I would not do">I would not turn every action into a popup. Filters, search, navigation, and persistent operational context remain inline. Modals are reserved for bounded tasks.</Card>
              </div>
            </div>
          </div>
        </Section>

        <Section id="s6" n="06" title="Testing and reliability">
          <div className="mt-8 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <TestTube2 size={30} className="text-[var(--accent)]" />
              <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">Tests protect behavior, not screenshots.</h2>
              <p className="mt-5 leading-7 text-[var(--muted)]">The first quality gate is xUnit coverage around deterministic portfolio behavior and lifecycle rules. GitHub Actions runs those tests before publishing the Blazor client.</p>
              <div className="mt-7"><Card title="Why not bolt on A/B testing?">This is an internal operations product. Unit, component, API integration, E2E, accessibility, and visual-regression testing provide a much stronger quality story. Experimentation belongs only where there is a real workflow hypothesis to measure.</Card></div>
            </div>
            <div>
              <Code title="DemoInsuranceDataServiceTests.cs">{`[Fact]\npublic async Task Claim_archive_is_recoverable()\n{\n    var service = new DemoInsuranceDataService();\n    var claim = (await service.GetClaimsAsync())\n        .Single(c => c.ClaimNumber == "CLM-10482");\n\n    await service.ArchiveClaimAsync(claim.Id);\n    Assert.True(claim.IsArchived);\n\n    await service.RestoreClaimAsync(claim.Id);\n    Assert.False(claim.IsArchived);\n}`}</Code>
              <div className="mt-4 grid gap-3 sm:grid-cols-2"><Card title="Implemented">xUnit lifecycle tests, stable demo record checks, summary calculation checks, CI test gate.</Card><Card title="Next production layer">bUnit component tests, WebApplicationFactory API integration tests, Playwright critical-path E2E, automated accessibility checks.</Card></div>
            </div>
          </div>
        </Section>

        <Section id="s7" n="07" title="Delivery" tint>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <ShieldCheck size={30} className="text-[var(--accent)]" />
              <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">A red build does not become a public build.</h2>
              <p className="mt-5 leading-7 text-[var(--muted)]">A workflow compile failure once blocked deployment when the test project was missing an xUnit namespace import. That was the quality gate doing its job: the public site stayed on the last known-good build until the test compile passed.</p>
              <div className="mt-7"><Card title="Static hosting tradeoff">GitHub Pages only serves the WebAssembly client. The deployment selects the demo service while local full-stack development exercises the actual ASP.NET Core path. CRUD/lifecycle changes in the public demo are intentionally session-only and reset on reload.</Card></div>
            </div>
            <Code title="deploy-pages.yml">{`- name: Run unit tests\n  run: dotnet test InsuranceDashboard.Tests/InsuranceDashboard.Tests.csproj -c Release\n\n- name: Publish Blazor client\n  run: dotnet publish InsuranceDashboard.Client/InsuranceDashboard.Client.csproj -c Release -o release\n\n# deploy only after the build job succeeds`}</Code>
          </div>
        </Section>

        <Section id="s8" n="08" title="Engineering tradeoffs">
          <div className="mt-8">
            <h2 className="max-w-4xl text-3xl font-semibold sm:text-5xl">The case study should say what is implemented — and what is not.</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <Card title="In-memory persistence">Excellent for a portable portfolio demo; not durable. Production would use transactional persistence and migrations.</Card>
              <Card title="Repository boundary">Useful here to show a replaceable persistence boundary. With EF Core, an extra repository layer can become redundant if it only mirrors DbSet.</Card>
              <Card title="Loss ratio">The UI uses a simplified demo signal. Production insurance reporting would align incurred loss and earned premium over the same period.</Card>
              <Card title="Relationships">The demo still stores customer display names on policies. A production schema should use stable customer IDs and enforce relationship integrity.</Card>
              <Card title="Security">Authentication, authorization, audit actor identity, and policy-based access are production requirements, not claims about this public demo.</Card>
              <Card title="Blazor WASM">Strong .NET component reuse and typed client code; tradeoffs include initial runtime payload and the requirement that privileged operations remain server-side.</Card>
            </div>
          </div>
        </Section>

        <Section id="s9" n="09" title="Interview map" tint>
          <div className="mt-8 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <h2 className="text-3xl font-semibold sm:text-5xl">A project I can explain from pixels to persistence.</h2>
              <p className="mt-5 leading-7 text-[var(--muted)]">The goal is not to memorize .NET vocabulary. It is to be able to start from an operator action, trace the code path, explain why each boundary exists, identify the tradeoff, and say what would change in production.</p>
              <div className="mt-8 flex flex-wrap gap-3"><a className="btn-solid" href={live} target="_blank" rel="noreferrer">Explore InsureOps <ExternalLink size={15} /></a><a className="btn" href="https://github.com/dgutensohn03/dotnet-insurance-dashboard" target="_blank" rel="noreferrer">Read the source <Github size={15} /></a></div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-2">
              {[["BLazor", "State ownership, forms, binding, lifecycle, component boundaries, responsive interaction patterns."], ["C# / .NET", "Strong typing, decimal, nullability, LINQ, async/await, shared models."], ["ASP.NET Core", "Minimal API routes, serialization, DI, HTTP semantics, CORS boundary."], ["Architecture", "Client service abstraction, repository tradeoffs, static demo vs full-stack mode."], ["Quality", "xUnit behavior tests, failure gating, next-level component/API/E2E strategy."], ["Product judgment", "Why archive/restore replaced destructive deletion and why claims are treated as retained records."]].map(([h, t]) => <div key={h} className="bg-[var(--case-card)] p-6"><p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--accent)]">{h}</p><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{t}</p></div>)}
            </div>
          </div>
        </Section>

        <section className="case-base px-5 py-20 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-[var(--hairline)] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-sm font-semibold">InsureOps · fictional engineering case study</p><p className="mt-1 text-xs text-[var(--muted)]">No real customer data. Not affiliated with any insurer.</p></div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">Back to portfolio <ArrowRight size={15} /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
