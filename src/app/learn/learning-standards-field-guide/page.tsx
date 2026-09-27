import Link from "next/link";
import { ArrowRight, Layers3, Radio, Route, SearchCheck } from "lucide-react";
import {
  ArticleFooter,
  ArticleHero,
  Eyebrow,
  LearningFrame,
  LearnNav,
} from "@/components/learn/LearnShell";

const jobs = [
  { icon: Layers3, name: "Package", question: "How does content move into a platform?", examples: "SCORM, Common Cartridge" },
  { icon: Route, name: "Launch", question: "How does the right learner open the activity?", examples: "SCORM, AICC, cmi5, LTI" },
  { icon: Radio, name: "Record", question: "What happened, and where is it stored?", examples: "SCORM runtime, AICC HACP, xAPI, Caliper" },
  { icon: SearchCheck, name: "Interpret", question: "When does activity count as complete or successful?", examples: "SCORM status, cmi5 moveOn, reporting rules" },
];

const comparison = [
  ["AICC (HACP)", "LMS course launch and tracking", "HTTP messages between an assignable unit and LMS", "Legacy course interoperability; confirm the LMS supports the exact AICC profile"],
  ["SCORM 1.2", "Packaged LMS course and runtime", "Manifest/package plus browser JavaScript API", "Conventional LMS course with completion, score, and resume"],
  ["SCORM 2004", "SCORM course with richer sequencing", "Package, runtime API, and sequencing/navigation rules", "An LMS that supports the required 2004 edition and sequencing behavior"],
  ["xAPI", "Experience data exchange", "Statements sent to an LRS over an HTTP API", "Activity across systems or outside a traditional LMS launch"],
  ["cmi5", "LMS launch and completion rules using xAPI", "Course structure, authorized launch, xAPI statements, and LRS", "Launchable LMS content with defined xAPI completion behavior"],
  ["LTI 1.3", "External learning tool integration", "Secure platform-to-tool launch and services", "A tool hosted outside the LMS, with identity, roles, and optional grade services"],
];

const deepDive = [
  {
    id: "aicc", title: "AICC: the older LMS conversation", tag: "Legacy launch + tracking",
    text: "AICC describes several computer-managed instruction specifications. In many LMS projects, ‘AICC support’ means the web-based AGR-010 / HACP approach: an LMS launches an assignable unit (AU), and the AU exchanges defined course-management data with the LMS over HTTP. That history explains why an externally hosted course can sometimes be launched through a small AICC descriptor instead of uploading the entire experience.",
    distinction: "Check the specific AICC profile and LMS implementation. ‘AICC-compliant’ alone does not prove that a given package, launch pattern, or report will behave as expected.",
  },
  {
    id: "scorm12", title: "SCORM 1.2: portable course, familiar runtime", tag: "Package + LMS API",
    text: "SCORM 1.2 combines a content package and manifest with a run-time environment. The LMS launches a shareable content object (SCO); the SCO finds the LMS JavaScript API in its browser context, initializes a session, reads or writes data such as lesson status, score, and suspend data, then commits and finishes. A ZIP file is a common delivery form, but the ZIP itself is not the tracking mechanism.",
    distinction: "The SCO reports through the LMS API. SCORM 1.2 does not directly send xAPI statements to an LRS. A separate bridge may translate SCORM data into xAPI, but that is an implementation choice.",
  },
  {
    id: "scorm2004", title: "SCORM 2004: separate outcomes and planned paths", tag: "Package + runtime + sequencing",
    text: "SCORM 2004 adds a formal sequencing and navigation model to the content and runtime concepts. It separates completion from success, which lets a course report that a learner finished an activity without implying that they passed. The LMS applies rules for movement among activities. There are multiple editions of SCORM 2004, so a version label should include the edition when compatibility matters.",
    distinction: "Validate the actual LMS edition and sequencing support. A course that launches and records a score has not thereby proven that its sequencing rules work.",
  },
  {
    id: "xapi", title: "xAPI: evidence from more than an LMS course", tag: "Experience data",
    text: "xAPI defines a statement model and API for recording experiences in a Learning Record Store (LRS). A statement has an actor, verb, and object; result, context, and other properties add the detail needed for interpretation. The source can be a course, simulation, mobile app, or another system. The LRS stores and returns statements, but xAPI alone does not define a universal LMS course package, launch procedure, or rule for when an LMS marks a course complete.",
    distinction: "Choose stable identifiers and a shared statement contract. Receiving a statement proves storage, not that downstream reports will classify it correctly.",
  },
  {
    id: "tincan", title: "Tin Can API: an earlier name for xAPI", tag: "Terminology",
    text: "‘Tin Can API’ is the earlier project name commonly used for the Experience API. In vendor menus, a ‘Tin Can’ publishing option usually signals xAPI output, but that label does not establish which xAPI version, launch convention, or reporting behavior the product supports.",
    distinction: "Ask what is exported, how it launches, where statements go, and how completion reaches the LMS. A Tin Can package should not be assumed to be cmi5.",
  },
  {
    id: "cmi5", title: "cmi5: xAPI with an LMS contract", tag: "LMS launch + xAPI",
    text: "cmi5 is an xAPI profile for LMS-launched assignable units. It defines course structure for import, a launch flow that supplies the AU with learner and LRS information, required statements, and rules the LMS uses to determine satisfaction. The moveOn condition specifies the completion/pass combination required for the learner to move on. The AU sends xAPI statements to an LRS; the LMS uses the defined cmi5 behavior to interpret them.",
    distinction: "It solves a narrower problem than xAPI in general: predictable launch and reporting for LMS-managed learning. Confirm the LMS supports cmi5 import, launch, LRS integration, and the expected moveOn rules.",
  },
];

const adjacent = [
  ["LTI 1.3 + Advantage", "Connect a separately hosted tool to an LMS with a secure launch. Advantage services can add deep linking, roster/roles, and grades. It is a tool integration contract, not a replacement for xAPI statements.", "https://www.1edtech.org/standards/lti"],
  ["QTI", "Exchange assessment items and tests between systems. It answers a content portability question; the assessment delivery platform still determines how it launches and records learner activity.", "https://www.1edtech.org/standards/qti"],
  ["Common Cartridge", "Package and exchange course resources, assessments, and links across platforms. Thin Common Cartridge emphasizes links and metadata rather than embedding every resource.", "https://www.1edtech.org/standards/cc"],
  ["Caliper Analytics", "Describe learning and tool-usage events using 1EdTech metric profiles. It overlaps with xAPI in analytics purpose, but has its own event vocabulary and implementation model.", "https://www.1edtech.org/standards/caliper"],
];

export default function LearningStandardsFieldGuide() {
  return (
    <div className="case-study min-h-screen text-[var(--fg)]">
      <LearnNav article />
      <main>
        <ArticleHero
          category="Technical field guide"
          readTime="12 min"
          title="A Field Guide to Learning Standards"
          intro="SCORM, AICC, xAPI, Tin Can, and cmi5 are often listed together, but they solve different parts of the learning ecosystem. Use this guide to identify the job, follow the data, and ask the right integration questions."
        />
        <LearningFrame
          outcomes={[
            "Separate packaging, launch, tracking, and reporting concerns before choosing a standard.",
            "Explain what SCORM 1.2, SCORM 2004, AICC, xAPI, Tin Can, and cmi5 each provide.",
            "Identify when LTI, QTI, Common Cartridge, or Caliper belongs in the conversation.",
          ]}
          sections={[
            { href: "#map", label: "The map" },
            { href: "#one-event", label: "One event, different paths" },
            { href: "#compare", label: "Compare" },
            { href: "#deep-dive", label: "Deep dive" },
            { href: "#adjacent", label: "Adjacent standards" },
            { href: "#decision", label: "Choose the contract" },
          ]}
        />

        <section id="map" className="case-base px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Start with the job</Eyebrow>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold sm:text-5xl">Four questions before the acronym.</h2>
            <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">A platform may use more than one standard at once. Name the handoff you need first; then identify which contract governs it.</p>
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {jobs.map(({ icon: Icon, name, question, examples }, index) => (
                <article key={name} className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-5">
                  <div className="flex items-center justify-between text-[var(--accent)]"><Icon size={23} aria-hidden="true" /><span className="text-xs font-bold">0{index + 1}</span></div>
                  <h3 className="mt-5 text-xl font-semibold">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{question}</p>
                  <p className="mt-5 border-t border-[var(--hairline)] pt-3 text-xs font-semibold text-[var(--accent)]">{examples}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="one-event" className="case-band border-y border-[var(--hairline)] px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>One event, different paths</Eyebrow>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold sm:text-5xl">A learner completes an activity. What travels?</h2>
            <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">The same learner action can pass through very different contracts. These simplified examples show the boundary that matters; they are illustrative, not complete integration payloads.</p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {[
                ["SCORM 1.2", "SCO → browser API → LMS", "LMSSetValue('cmi.core.lesson_status', 'completed')", "A browser session writes a status to the LMS runtime. Reporting then depends on LMS interpretation and commit behavior."],
                ["SCORM 2004", "SCO → browser API → LMS", "SetValue('cmi.completion_status', 'completed')", "Completion and success are separate data elements. Sequencing may also affect activity and course-level state."],
                ["xAPI", "Activity → HTTP API → LRS", "actor + completed verb + object + context", "A statement is stored in the LRS. An LMS grade or completion is a separate decision unless another contract supplies it."],
                ["cmi5", "LMS launch → AU → LRS → LMS", "cmi5-defined statements + moveOn rule", "The launch establishes a managed attempt, and cmi5 rules tell the LMS how to determine satisfaction."],
              ].map(([name, path, example, consequence]) => (
                <article key={name} className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-semibold">{name}</h3><span className="text-xs font-semibold text-[var(--accent)]">{path}</span></div>
                  <code className="mt-4 block overflow-wrap-anywhere rounded-lg bg-[#0d1117] p-3 text-xs leading-6 text-orange-200">{example}</code>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{consequence}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-6 text-[var(--muted)]"><strong className="text-[var(--fg)]">AICC’s path:</strong> the AU exchanges CMI data with the LMS through its supported AICC mechanism. Ask which profile, launch method, and status fields the vendor implements before comparing its report with SCORM output.</p>
          </div>
        </section>

        <section id="compare" className="case-base px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>At a glance</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Compare the actual contracts.</h2>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)]">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-6">
                <thead className="bg-[var(--accent)]/8 text-[var(--accent)]"><tr><th scope="col" className="p-4">Standard</th><th scope="col" className="p-4">Primary job</th><th scope="col" className="p-4">Core mechanism</th><th scope="col" className="p-4">Use when</th></tr></thead>
                <tbody>{comparison.map(([name, job, mechanism, use]) => <tr key={name} className="border-t border-[var(--hairline)] align-top"><th scope="row" className="p-4 font-semibold">{name}</th><td className="p-4 text-[var(--muted)]">{job}</td><td className="p-4 text-[var(--muted)]">{mechanism}</td><td className="p-4 text-[var(--muted)]">{use}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Support depends on the specific LMS, content, edition, and implementation. A product label alone is never the integration test.</p>
          </div>
        </section>

        <section id="deep-dive" className="case-base px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Deep dive</Eyebrow>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold sm:text-5xl">Follow what each one promises.</h2>
            <div className="mt-9 grid gap-4 lg:grid-cols-2">
              {deepDive.map(({ id, title, tag, text, distinction }) => (
                <article id={id} key={id} className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6">
                  <span className="text-xs font-bold uppercase tracking-[.12em] text-[var(--accent)]">{tag}</span>
                  <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{text}</p>
                  <p className="mt-5 border-l-[3px] border-[var(--accent)] pl-4 text-sm leading-6"><strong>Verify in practice:</strong> {distinction}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="adjacent" className="case-band border-y border-[var(--hairline)] px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Beyond course tracking</Eyebrow>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold sm:text-5xl">Other standards worth knowing.</h2>
            <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">These appear alongside SCORM and xAPI in real platforms, but address different handoffs.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">{adjacent.map(([name, description, href]) => (
              <article key={name} className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6">
                <h3 className="text-xl font-semibold">{name}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{description}</p>
                <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer" href={href}>Official overview <ArrowRight size={15} aria-hidden="true" /></a>
              </article>
            ))}</div>
            <p className="mt-6 max-w-4xl text-sm leading-6 text-[var(--muted)]">For K–12 or higher education data exchange, OneRoster (rosters and grades), CASE (competency and standards identifiers), and Open Badges or Comprehensive Learner Records (portable achievements) are also relevant. They are outside this guide’s course-launch focus.</p>
          </div>
        </section>

        <section id="decision" className="case-base px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Apply the model</Eyebrow>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold sm:text-5xl">Choose the contract, then test the handoffs.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["An LMS-hosted course", "Start with SCORM when the LMS supports the required edition and course data. Test launch, resume, completion, success, score, and exit behavior."],
                ["A hosted external tool", "Use LTI 1.3 for secure tool launch and platform services; separately decide how detailed activity data will be captured."],
                ["Rich learning evidence", "Use xAPI and an LRS for event data. If the activity must be imported and launched as an LMS course, evaluate cmi5 support."],
              ].map(([title, detail]) => <article key={title} className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/5 p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{detail}</p></article>)}
            </div>
            <div className="mt-8 rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6">
              <h3 className="font-semibold">Questions I would settle before implementation</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--muted)] md:grid-cols-2">
                <li>What imports into the LMS, and which exact versions are supported?</li>
                <li>Who launches the activity, and how is learner identity established?</li>
                <li>Which system is the source of truth for completion and success?</li>
                <li>Where do events live, and who can query or reconcile them?</li>
                <li>How are interrupted sessions, retakes, and historical records handled?</li>
                <li>What end-to-end test proves the report matches the learner experience?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="case-band border-y border-[var(--hairline)] px-5 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl"><Eyebrow>See it in context</Eyebrow><div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link href="/learn/activity-to-insight" className="group rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-5 transition hover:border-[var(--accent)]"><span className="inline-flex items-center gap-2 text-sm font-semibold">From Activity to Insight <ArrowRight size={16} /></span><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Follow one xAPI event through an LRS and into a reporting decision.</p></Link>
            <Link href="/learn/missing-completion" className="group rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-5 transition hover:border-[var(--accent)]"><span className="inline-flex items-center gap-2 text-sm font-semibold">The Case of the Missing Completion <ArrowRight size={16} /></span><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Diagnose the contract between a valid event and a missing dashboard result.</p></Link>
          </div></div>
        </section>
        <ArticleFooter currentSlug="learning-standards-field-guide" references={[
          { label: "ADL: xAPI specification", href: "https://github.com/adlnet/xAPI-Spec" },
          { label: "IEEE: xAPI standardization work group", href: "https://sagroups.ieee.org/9274-1-1/" },
          { label: "xAPI.com: Tin Can and xAPI terminology", href: "https://xapi.com/tin-can-experience-api-xapi/" },
          { label: "AICC: cmi5 specification", href: "https://github.com/AICC/CMI-5_Spec_Current/blob/quartz/cmi5_spec.md" },
          { label: "AICC: guidance on CMI and AICC compliance", href: "https://www.aicc.org/pages/aicc_faq.html" },
          { label: "ADL: SCORM 2004 4th Edition conformance suite", href: "https://github.com/adlnet/SCORM-2004-4ed-Test-Suite" },
          { label: "1EdTech: LTI and LTI Advantage", href: "https://www.1edtech.org/standards/lti" },
          { label: "1EdTech: interoperability standards", href: "https://www.1edtech.org/specifications" },
        ]} />
      </main>
    </div>
  );
}
