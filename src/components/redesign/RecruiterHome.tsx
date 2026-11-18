"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, ArrowUpRight, BookOpen, Github, Linkedin, Mail, Code2, Layers3, Activity } from "lucide-react";
import { learnArticles } from "@/data/learn";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/dg-portfolio" : "");
const image = (path: string) => base + "/" + path.replace(/^\.\//, "").replace(/^\//, "");
const tools = ["React", "TypeScript", "Next.js", "JavaScript", "CSS / Sass", "Accessibility", "Data visualization"];

const selected = [
  {
    label: "01 / Featured case study",
    title: "LRS Analytics Dashboard",
    description: "I engineered the React component architecture, charts, and filtering logic that make complex learning data understandable.",
    tags: ["React", "TypeScript", "Plotly"],
    image: "./images/projects/analytics/learning-analytics-thumb.jpg",
    caseStudy: "/lrs-analytics-case-study/",
    demo: "https://dgutensohn03.github.io/LRS-Analytics/",
    alt: "Learning analytics application interface"
  },
  {
    label: "02 / Product engineering",
    title: "High Colorado",
    description: "A mountain-exploration application combining responsive interface design, interactive maps, external data, and practical trail-planning features.",
    tags: ["Next.js", "TypeScript", "Maps & APIs"],
    github: "https://github.com/dgutensohn03/High-Colorado",
    caseStudy: "/ai-assisted-lifecycle/",
    alt: "High Colorado engineering project"
  },
  {
    label: "03 / Enterprise software",
    title: "VCert Certification Platform",
    description: "A React and TypeScript training platform with personalized pathways, progress tracking, challenges, and administrative workflows.",
    tags: ["React", "TypeScript", "Firebase"],
    image: "./images/projects/valvoline/valvoline-vcert-thumb-title.jpg",
    archive: "/projects/",
    alt: "VCert enterprise certification portal"
  }
];

export default function RecruiterHome() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-[var(--bg)] focus:px-4 focus:py-2">Skip to content</a>
      <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[var(--bg)]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Daniel Gutensohn home"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--fg)] text-sm font-extrabold text-[var(--bg)]">DG</span><span className="hidden sm:block">Daniel Gutensohn</span></Link>
          <nav aria-label="Main navigation" className="flex items-center gap-4 text-sm font-semibold sm:gap-7">
            <a href="#work" className="hover:text-[var(--accent)]">Work</a>
            <Link href="/projects/" className="hidden hover:text-[var(--accent)] sm:inline">All projects</Link>
            <Link href="/learn/" className="hover:text-[var(--accent)]">Learn</Link>
            <Link href="/experience/" className="hidden hover:text-[var(--accent)] sm:inline">Experience</Link>
            <a href="#contact" className="rounded-lg bg-[var(--fg)] px-3 py-2 text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-[var(--accent)]">Frontend & full-stack engineer · 10+ years in production</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-[-.055em] sm:text-6xl lg:text-7xl">Thoughtful engineering,<br/><span className="text-[var(--accent)]">real-world impact.</span></h1>
          <div className="mt-7 min-h-10 text-lg font-semibold sm:text-2xl">
            <TypeAnimation sequence={["Frontend Engineer", 2100, "Full-Stack Developer", 2100, "React & TypeScript Builder", 2100, "UX-Focused Engineer", 2100, "Creative Problem Solver", 2100]} speed={55} repeat={Infinity} cursor={true} />
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">I build accessible, responsive web applications with React and TypeScript—turning complex workflows and data into clear, useful experiences.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 font-bold text-white hover:opacity-90">Explore my work <ArrowRight size={18}/></a>
            <Link href="/experience/" className="inline-flex items-center gap-2 rounded-xl border border-[var(--hairline)] px-5 py-3 font-bold hover:border-[var(--accent)]">Experience & background <ArrowUpRight size={17}/></Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 border-t border-[var(--hairline)] pt-5">{tools.map(t=><span key={t} className="rounded-lg bg-[var(--case-band)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">{t}</span>)}</div>
        </section>

        <section id="work" className="scroll-mt-24 bg-[var(--case-base)] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]">Selected work</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Three projects. Real engineering.</h2><p className="mt-3 max-w-2xl text-[var(--muted)]">A focused look at the interfaces, systems, and experiences I've designed and built.</p></div>
              <Link href="/projects/" className="inline-flex shrink-0 items-center gap-2 font-bold text-[var(--accent)] hover:underline">Explore all projects <ArrowRight size={17}/></Link>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {selected.map((project,i)=><article key={project.title} className={`group overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] shadow-sm ${i===0?"lg:col-span-2":""}`}>
                <div className={i===0?"grid lg:grid-cols-2":""}>
                  <div className={`relative overflow-hidden bg-[#172339] ${i===0?"min-h-64 lg:min-h-[380px]":"h-56"}`}>
                    {project.image ? <img src={image(project.image)} alt={project.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" /> : <div className="flex h-full flex-col justify-between bg-gradient-to-br from-[#102a3d] via-[#234c58] to-[#728b74] p-7 text-white"><span className="text-xs font-bold uppercase tracking-[.18em] text-white/80">Built for the mountains</span><div><span className="text-6xl font-bold tracking-[-.06em]">14,000'</span><p className="mt-2 text-xl font-semibold">High Colorado</p></div><span className="text-sm text-white/80">Maps · Weather · Trail planning</span></div>}
                  </div>
                  <div className={`flex flex-col p-6 sm:p-8 ${i===0?"lg:justify-center lg:p-10":""}`}>
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">{project.label}</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
                    <p className="mt-4 leading-7 text-[var(--muted)]">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(t=><span key={t} className="rounded-md border border-[var(--hairline)] px-2.5 py-1 text-xs font-semibold">{t}</span>)}</div>
                    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
                      <Link href={project.caseStudy ?? project.archive ?? "/projects/"} className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:underline">{project.caseStudy?"Read case study":"View project details"} <ArrowUpRight size={16}/></Link>
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">Live demo <ArrowUpRight size={16}/></a>}
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">GitHub <ArrowUpRight size={16}/></a>}
                    </div>
                  </div>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]">How I work</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Design-minded.<br/>Engineering-led.</h2></div>
          <div><p className="text-lg leading-8 text-[var(--muted)]">I've spent more than a decade building production software—from interfaces and reusable component systems to APIs and analytics platforms. I care about code quality because it makes the user experience more dependable.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div><Code2 className="text-[var(--accent)]"/><h3 className="mt-3 font-bold">Build</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">React, TypeScript, accessible UI, and maintainable frontend systems.</p></div>
              <div><Layers3 className="text-[var(--accent)]"/><h3 className="mt-3 font-bold">Connect</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">APIs, complex data, component boundaries, and reporting workflows.</p></div>
              <div><Activity className="text-[var(--accent)]"/><h3 className="mt-3 font-bold">Refine</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Performance, accessibility, responsiveness, and real-world behavior.</p></div>
            </div>
            <Link href="/experience/" className="mt-8 inline-flex items-center gap-2 font-bold text-[var(--accent)] hover:underline">See professional experience <ArrowRight size={17}/></Link>
          </div>
        </section>

        <section className="bg-[var(--case-band)] py-16 sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]"><BookOpen size={16}/> Writing & insights</div><h2 className="mt-3 text-2xl font-bold sm:text-3xl">The thinking behind the code.</h2><p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">Technical guides, engineering lessons, and practical explanations drawn from projects I've built.</p><p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">{learnArticles.length} existing articles are preserved in the Learn library.</p></div>
            <Link href="/learn/" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--hairline)] bg-[var(--case-card)] px-5 py-3 font-bold hover:border-[var(--accent)]">Explore all articles <ArrowRight size={17}/></Link>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"><p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]">Let's connect</p><h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">Have a frontend challenge worth solving?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">I'm interested in hands-on remote frontend and full-stack engineering roles where design, code, and real-world impact matter.</p><div className="mt-8 flex flex-wrap gap-4"><a href="mailto:dgutensohn@icloud.com" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 font-bold text-white"><Mail size={18}/> Email me</a><a href="https://github.com/dgutensohn03" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[var(--hairline)] px-5 py-3 font-bold"><Github size={18}/> GitHub</a><a href="https://www.linkedin.com/in/daniel-gutensohn-a2860a71" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[var(--hairline)] px-5 py-3 font-bold"><Linkedin size={18}/> LinkedIn</a></div></section>
      </main>
      <footer className="!relative !z-auto !pointer-events-auto border-t border-[var(--hairline)] px-5 py-7 text-sm text-[var(--muted)]"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3"><span>© {new Date().getFullYear()} Daniel Gutensohn</span><span>Thoughtful engineering, real-world impact.</span></div></footer>
    </div>
  );
}
