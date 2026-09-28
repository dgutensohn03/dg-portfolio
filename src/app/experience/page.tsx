import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  Blocks,
  Braces,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  GraduationCap,
  Gamepad2,
  GitBranch,
  Layers3,
  Mail,
  Network,
  Play,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience | Daniel Gutensohn",
  description:
    "Daniel Gutensohn's engineering experience, impact, capabilities, and career history across frontend, full-stack, UX, and learning technology.",
};

const impact = [
  {
    icon: Layers3,
    title: "From ambiguity to architecture",
    copy: "I translate business goals and user needs into practical system designs, delivery plans, and maintainable component patterns.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data people can act on",
    copy: "I turn complex activity and performance data into clear dashboards, workflows, and decisions—not just visualizations.",
  },
  {
    icon: Accessibility,
    title: "Quality built into the system",
    copy: "Accessibility, responsive behavior, performance, and resilient states are engineering requirements from the start.",
  },
  {
    icon: Users,
    title: "Leadership through clarity",
    copy: "I strengthen teams through estimation, code review, mentoring, technical direction, and close collaboration with clients and product partners.",
  },
];

const careerTimeline = [
  {
    number: "01",
    stage: "Frontend foundations",
    project: "R2",
    client: "McGraw Hill",
    employer: "Xcelerate Media",
    icon: Code2,
    summary: "Built interactive educational experiences by translating visual designs and content requirements into dependable browser-based interfaces.",
    contribution: "This work established my foundation in semantic structure, styling systems, interaction logic, and the details required to deliver consistent experiences across browsers.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    image: null,
    imageAlt: "McGraw Hill R2 project screenshot",
  },
  {
    number: "02",
    stage: "Experience systems",
    project: "PEAK Performance",
    client: "Procter & Gamble",
    employer: "Xcelerate Media",
    icon: GitBranch,
    summary: "Helped shape a video-led hiring and performance experience built for a large enterprise audience.",
    contribution: "I moved beyond individual screens into connected experience design—organizing scenarios, branching decisions, feedback, and multimedia into a coherent system learners could navigate with confidence.",
    stack: ["Branching scenarios", "Video", "Systems design", "Enterprise learning"],
    image: null,
    imageAlt: "P&G PEAK Performance project screenshot",
  },
  {
    number: "03",
    stage: "Interactive engineering",
    project: "Phaser Learning Game",
    client: "Marathon Petroleum",
    employer: "Xcelerate Media",
    icon: Gamepad2,
    summary: "Applied frontend development to a game-based experience designed to make learning active, responsive, and memorable.",
    contribution: "I worked with game states, interaction mechanics, feedback, scoring, and progression—expanding my understanding of how interface behavior can motivate people and reinforce decisions.",
    stack: ["Phaser", "JavaScript", "Game mechanics", "Animation"],
    image: null,
    imageAlt: "Marathon Phaser learning game screenshot",
  },
  {
    number: "04",
    stage: "Enterprise delivery",
    project: "HCC Annual Training",
    client: "Johnson & Johnson / Janssen",
    employer: "Xcelerate Media",
    icon: BriefcaseBusiness,
    summary: "Delivered structured learning for a complex healthcare environment where clarity, consistency, and careful review mattered.",
    contribution: "The project strengthened my ability to translate dense, regulated content into an understandable experience while collaborating across design, subject-matter, quality, and client stakeholders.",
    stack: ["Healthcare", "Compliance", "Information design", "Quality assurance"],
    image: "/images/projects/janssen/janssen-hcc-annual-thumb-title.jpg",
    imageAlt: "Johnson & Johnson Janssen HCC annual training",
  },
  {
    number: "05",
    stage: "Product engineering",
    project: "VCERT Training Portal",
    client: "Valvoline",
    employer: "LHT Learning",
    icon: Layers3,
    summary: "Engineered a persistent training product with reusable interfaces, authenticated users, personalized experiences, and cloud-connected data.",
    contribution: "I helped move the work from stand-alone learning experiences to an extensible application—building component patterns and features for progress, challenges, rewards, notifications, and user-specific journeys.",
    stack: ["React", "TypeScript", "Firebase Auth", "NoSQL", "Cloud Functions"],
    image: "/images/projects/valvoline/valvoline-vcert-thumb-title.jpg",
    imageAlt: "Valvoline VCERT training portal",
  },
  {
    number: "06",
    stage: "Full-stack ownership",
    project: "LRS & Analytics Platform",
    client: "Enterprise learning platform",
    employer: "LHT Learning",
    icon: ChartNoAxesCombined,
    summary: "Built a data-rich platform that transformed xAPI learning activity into useful progress, completion, assessment, and engagement insights.",
    contribution: "I worked across the product—from interface architecture and interactive visualizations to APIs, authentication, cloud functions, relational data, queries, deployment, estimation, and technical direction.",
    stack: ["React / Next.js", "Plotly", "REST APIs", "PostgreSQL", "OAuth 2.0", "xAPI"],
    image: "/images/projects/analytics/analytics-dashboard_data.jpeg",
    imageAlt: "Learning record store analytics dashboard",
  },
];

const additionalClients = ["Safelite", "Southern California Edison", "Diageo", "Smirnoff", "Honda", "AEP"];

const capabilities = [
  {
    icon: Code2,
    label: "Frontend & UX engineering",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Responsive UI", "Design systems", "WCAG 2.1 AA"],
  },
  {
    icon: Network,
    label: "Platforms & data",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL / SQL", "Firebase / NoSQL", "OAuth 2.0", "Google Cloud Functions"],
  },
  {
    icon: Blocks,
    label: "Learning technology",
    items: ["xAPI", "SCORM 1.2 / 2004", "AICC", "LMS / LRS integration", "Learning analytics", "Adaptive experiences"],
  },
  {
    icon: Braces,
    label: "Quality & delivery",
    items: ["Jest", "Vitest", "Playwright", "GitHub Actions", "Docker", "CI/CD", "Performance", "Cross-browser testing"],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
      <span className="h-px w-8 bg-[var(--accent)]" />
      {children}
    </p>
  );
}

export default function ExperiencePage() {
  return (
    <div className="case-study min-h-screen text-[var(--fg)]">
      <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3" aria-label="Experience navigation">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
            <ArrowLeft size={17} /> Back to portfolio
          </Link>
          <span className="hidden text-xs text-[var(--muted)] sm:block">DG · Experience</span>
        </nav>
      </header>

      <main>
        <section className="px-6 pb-20 pt-16 sm:pt-24 lg:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--case-card)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              <BriefcaseBusiness size={15} /> Career · Capabilities · Impact
            </div>
            <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Engineering useful systems
              <span className="block text-[var(--accent)]">from idea through impact.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              I’m a senior frontend and full-stack engineer with 10+ years of experience turning complex, people-centered problems into accessible products, scalable platforms, and clearer ways of working.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#projects" className="btn-solid">Explore selected work <ArrowRight size={16} /></Link>
              <a href="mailto:dgutensohn@icloud.com" className="btn"><Mail size={17} /> Start a conversation</a>
            </div>
          </div>
        </section>

        <section className="case-band border-y border-[var(--hairline)] px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>How I create value</Eyebrow>
            <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2 lg:grid-cols-4">
              {impact.map(({ icon: Icon, title, copy }) => (
                <article key={title} className="bg-[var(--case-card)] p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]"><Icon size={21} /></span>
                  <h2 className="mt-6 text-lg font-semibold">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Career progression</Eyebrow>
            <div className="mt-6 max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">From building interfaces to architecting complete products.</h2>
              <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">A selection of projects that marks how my responsibilities, technical range, and ownership grew over time.</p>
            </div>

            <div className="relative mt-14">
              <div className="absolute bottom-0 left-[19px] top-0 w-px bg-[var(--hairline)] md:left-1/2 md:-translate-x-px" aria-hidden="true" />
              <ol className="space-y-12 md:space-y-20">
                {careerTimeline.map((item, index) => {
                  const Icon = item.icon;
                  const copyFirst = index % 2 === 0;
                  return (
                    <li key={item.project} className="relative pl-14 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                      <span className="absolute left-0 top-0 z-10 grid h-10 w-10 place-items-center rounded-full border border-[var(--accent)] bg-[var(--case-base)] text-[var(--accent)] shadow-[0_0_0_7px_var(--case-base)] md:left-1/2 md:-translate-x-1/2" aria-hidden="true">
                        <Icon size={17} />
                      </span>

                      <div className={`${copyFirst ? "md:col-start-1 md:row-start-1" : "md:col-start-2 md:row-start-1"} ${copyFirst ? "md:text-right" : ""}`}>
                        <p className="font-mono text-xs font-medium tracking-[0.16em] text-[var(--accent)]">{item.number} · {item.stage}</p>
                        <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{item.project}</h3>
                        <p className="mt-2 font-medium">{item.client}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{item.employer}</p>
                        <p className="mt-5 leading-relaxed text-[var(--muted)]">{item.summary}</p>
                        <div className={`mt-5 rounded-xl border border-[var(--hairline)] bg-[var(--case-card)] p-4 ${copyFirst ? "md:text-left" : ""}`}>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">How I grew</p>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.contribution}</p>
                        </div>
                        <div className={`mt-5 flex flex-wrap gap-2 ${copyFirst ? "md:justify-end" : ""}`}>
                          {item.stack.map((skill) => <span key={skill} className="rounded-full border border-[var(--hairline)] px-3 py-1 text-xs text-[var(--muted)]">{skill}</span>)}
                        </div>
                      </div>

                      <div className={`${copyFirst ? "md:col-start-2 md:row-start-1" : "md:col-start-1 md:row-start-1"} mt-7 md:mt-0`}>
                        <div className="overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] shadow-[0_22px_60px_rgba(15,23,42,.08)]">
                          <div className="flex h-9 items-center gap-1.5 border-b border-[var(--hairline)] px-4" aria-hidden="true">
                            <span className="h-2 w-2 rounded-full bg-[var(--accent)]/70" /><span className="h-2 w-2 rounded-full bg-[var(--hairline)]" /><span className="h-2 w-2 rounded-full bg-[var(--hairline)]" />
                          </div>
                          {item.image ? (
                            <div className="relative aspect-[16/10] bg-[var(--case-band)]">
                              <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
                            </div>
                          ) : (
                            <div className="grid aspect-[16/10] place-items-center bg-[linear-gradient(135deg,var(--case-band),var(--case-card))] p-8 text-center">
                              <div>
                                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]"><Play size={20} /></span>
                                <p className="mt-4 text-sm font-semibold">Project screenshot</p>
                                <p className="mt-1 text-xs text-[var(--muted)]">Ready for original or sanitized imagery</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="mt-20 rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Additional enterprise work</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">Along the way, I also contributed to digital experiences for organizations across automotive, energy, consumer goods, and workforce development.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {additionalClients.map((client) => <span key={client} className="rounded-lg bg-[var(--accent)]/8 px-4 py-2 text-sm font-medium">{client}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="case-band border-y border-[var(--hairline)] px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Capabilities</Eyebrow>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {capabilities.map(({ icon: Icon, label, items }) => (
                <article key={label} className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-6 sm:p-7">
                  <div className="flex items-center gap-3"><Icon size={21} className="text-[var(--accent)]" /><h2 className="text-lg font-semibold">{label}</h2></div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((item) => <span key={item} className="rounded-lg bg-[var(--accent)]/8 px-3 py-2 text-sm text-[var(--muted)]">{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <Eyebrow>What guides the work</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">Technology is most valuable when it helps people move forward.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">I care about the details because they shape trust: a workflow that makes sense, an interface everyone can use, architecture a team can extend, and a solution that continues creating value after launch.</p>
            </div>
            <aside className="rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-7">
              <Sparkles size={23} className="text-[var(--accent)]" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Education</p>
              <div className="mt-4 flex gap-3"><GraduationCap size={21} className="mt-0.5 shrink-0 text-[var(--accent)]" /><div><p className="font-semibold">Bachelor of Science</p><p className="mt-1 text-sm text-[var(--muted)]">Computer Science</p></div></div>
              <p className="mt-7 border-t border-[var(--hairline)] pt-6 text-sm leading-relaxed text-[var(--muted)]">Based in Littleton, Colorado · Available for remote engineering opportunities.</p>
            </aside>
          </div>
        </section>

        <section className="case-band border-t border-[var(--hairline)] px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-5xl">Have a complex problem worth solving?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">I’m interested in thoughtful teams building products and platforms with meaningful, lasting impact.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3"><a href="mailto:dgutensohn@icloud.com" className="btn-solid"><Mail size={17} /> Let’s talk</a><Link href="/" className="btn"><ArrowLeft size={17} /> Return to portfolio</Link></div>
          </div>
        </section>
      </main>
    </div>
  );
}
