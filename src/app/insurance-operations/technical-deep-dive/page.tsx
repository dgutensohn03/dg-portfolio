import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const repo = "https://github.com/dgutensohn03/dotnet-insurance-dashboard";

function Code({ title, lang = "C#", children }: { title: string; lang?: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-3">
        <span className="font-mono text-xs text-slate-400">{title}</span>
        <span className="rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-slate-500">{lang}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 text-[#d4d4d4]"><code>{children}</code></pre>
    </div>
  );
}
const K=({children}:{children:React.ReactNode})=><span className="text-[#c586c0]">{children}</span>;
const T=({children}:{children:React.ReactNode})=><span className="text-[#4ec9b0]">{children}</span>;
const M=({children}:{children:React.ReactNode})=><span className="text-[#dcdcaa]">{children}</span>;
const S=({children}:{children:React.ReactNode})=><span className="text-[#ce9178]">{children}</span>;
const V=({children}:{children:React.ReactNode})=><span className="text-[#9cdcfe]">{children}</span>;
const C=({children}:{children:React.ReactNode})=><span className="text-[#6a9955]">{children}</span>;

const serviceContract = <><K>public interface</K> <T>IInsuranceDataService</T>{`\n{\n    `}<T>Task</T>{`<`}<T>IReadOnlyList</T>{`<`}<T>Claim</T>{`>> `}<M>GetClaimsAsync</M>{`();\n    `}<T>Task</T>{`<`}<T>Claim</T>{`> `}<M>UpdateClaimAsync</M>{`(`}<T>Claim</T>{` `}<V>claim</V>{`);\n    `}<T>Task</T>{`<`}<T>DashboardSummary</T>{`> `}<M>GetSummaryAsync</M>{`();\n}`}</>;
const filtering = <><K>var</K>{` `}<V>q</V>{` = claims.`}<M>Where</M>{`(c =>\n    !minExposure.HasValue || c.Amount >= minExposure);\n\n`}<V>q</V>{` = q.`}<M>Where</M>{`(c =>\n    !lossFrom.HasValue || c.LossDate >= lossFrom);\n\n`}<K>return</K>{` ascending\n    ? q.`}<M>OrderBy</M>{`(c => c.Amount)\n    : q.`}<M>OrderByDescending</M>{`(c => c.Amount);`}</>;
const saveFlow = <><K>var</K>{` `}<V>updated</V>{` = `}<K>await</K>{` DataService.`}<M>UpdateClaimAsync</M>{`(editClaim);\n`}<K>await</K>{` `}<M>Refresh</M>{`();\nselectedClaim = claims.`}<M>FirstOrDefault</M>{`(c => c.Id == updated.Id);`}</>;
const summary = <><K>var</K>{` `}<V>activeClaims</V>{` = claims.`}<M>Where</M>{`(c => !c.IsArchived);\n`}<K>var</K>{` `}<V>exposure</V>{` = activeClaims\n    .`}<M>Where</M>{`(c => c.Status != `}<S>"Closed"</S>{`)\n    .`}<M>Sum</M>{`(c => c.Amount);`}</>;
const e2e = <>{`await page.`}<M>getByRole</M>{`(`}<S>"button"</S>{`, { name: `}<S>"Edit claim"</S>{` }).`}<M>click</M>{`();\nawait page.`}<M>getByLabel</M>{`(`}<S>"Exposure"</S>{`).`}<M>fill</M>{`(`}<S>"75000"</S>{`);\nawait page.`}<M>getByRole</M>{`(`}<S>"button"</S>{`, { name: `}<S>"Save changes"</S>{` }).`}<M>click</M>{`();\n`}<C>// Navigate to Overview and assert the recalculated exposure.</C></>;

export default function DeepDive() {
  return (
    <div className="case-study case-base min-h-screen text-[var(--fg)]">
      <header className="sticky top-0 z-50 px-4 py-3"><nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3"><Link href="/insurance-operations" className="inline-flex items-center gap-2 text-sm text-[var(--muted)]"><ArrowLeft size={16}/>Case study</Link><a href={repo} target="_blank" rel="noreferrer" className="text-[var(--muted)]" aria-label="View InsureOps source on GitHub"><Github size={18}/></a></nav></header>
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--accent)]">InsureOps · Technical deep dive</p><h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl">Follow the code from interaction to derived business data.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">The main case study explains the product and engineering decisions. This page follows the Blazor client, typed service boundary, ASP.NET Core API, repositories, calculated metrics, and browser tests through the implementation.</p>
        <section className="mt-16"><h2 className="text-3xl font-semibold">Repository structure</h2><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Presentation, transport, domain models, persistence, and verification have distinct responsibilities without adding layers only for appearance.</p><div className="mt-6"><Code title="solution structure" lang="TREE"><>{`InsuranceDashboard\n├── `}<T>InsuranceDashboard.Client</T><C>{`   # Blazor workflows + services`}</C>{`\n├── `}<T>InsuranceDashboard.Api</T><C>{`      # HTTP endpoints + repositories`}</C>{`\n├── `}<T>InsuranceDashboard.Shared</T><C>{`   # typed domain models`}</C>{`\n├── `}<T>InsuranceDashboard.Tests</T><C>{`    # xUnit behavior tests`}</C>{`\n└── `}<T>e2e</T><C>{`                         # Playwright product tests`}</C></></Code></div></section>
        <section className="mt-20"><h2 className="text-3xl font-semibold">1. The UI depends on a contract</h2><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Blazor pages ask for insurance operations, not a specific persistence mechanism. The public GitHub Pages build can use deterministic browser data while full-stack mode uses HTTP.</p><div className="mt-6"><Code title="IInsuranceDataService.cs">{serviceContract}</Code></div></section>
        <section className="mt-20"><h2 className="text-3xl font-semibold">2. Table state is derived, not duplicated</h2><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Search, lifecycle, severity, date and exposure ranges, and sortable headers compose over the same claim collection.</p><div className="mt-6"><Code title="Claims.razor · filtering" lang="Razor / C#">{filtering}</Code></div></section>
        <section className="mt-20"><h2 className="text-3xl font-semibold">3. Editing crosses the full stack</h2><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">A save travels through the service contract, reaches the API and repository in full-stack mode, refreshes the record collection, and changes KPIs derived from that data.</p><div className="mt-6 grid gap-4 lg:grid-cols-2"><Code title="Claims.razor · save">{saveFlow}</Code><Code title="summary calculation">{summary}</Code></div></section>
        <section className="mt-20"><h2 className="text-3xl font-semibold">4. Lifecycle is a domain decision</h2><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Claims and customers archive and restore instead of disappearing through a generic delete. A production implementation could extend that boundary with actor identity, reason codes, retention rules, and immutable audit events.</p></section>
        <section className="mt-20"><h2 className="text-3xl font-semibold">5. Test the business flow</h2><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">The browser test proves a user-visible consequence: edit claim exposure, save, return to Overview, and verify the derived KPI reflects the changed record.</p><div className="mt-6"><Code title="insureops.spec.ts" lang="Playwright">{e2e}</Code></div></section>
        <section className="mt-20 rounded-3xl border border-[var(--accent)]/25 bg-[var(--accent)]/[.05] p-7 sm:p-10"><h2 className="text-3xl font-semibold">Engineering evidence, not framework exercises.</h2><p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">The implementation connects boundaries, state, lifecycle, derived data, accessibility decisions, and verification in a working product.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/insurance-operations" className="btn-solid">Back to case study</Link><a href={repo} target="_blank" rel="noreferrer" className="btn">View source <ExternalLink size={15}/></a></div></section>
      </main>
    </div>
  );
}
