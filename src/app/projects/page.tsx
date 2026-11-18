import type { Metadata } from "next";
import Link from "next/link";
import projects from "@/data/projects";
import { ArrowLeft, ArrowUpRight, FolderOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "All Projects | Daniel Gutensohn",
  description: "A curated archive of enterprise platforms, web applications, learning systems, and frontend engineering work by Daniel Gutensohn.",
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/dg-portfolio" : "");

const companion = {
  title: "InsureOps — Insurance Operations Platform",
  role: "Full-Stack .NET Engineer",
  shortDescription: "An interactive operations system demonstrating editable domain workflows, calculated metrics, and browser testing.",
  description: "An operations dashboard with editable workflows and calculated portfolio metrics.",
  link: "/insurance-operations/",
  github: "https://github.com/dgutensohn03/dotnet-insurance-dashboard",
  image: "./images/projects/insurance/insureops-dashboard-card.svg",
  tags: [".NET", "Blazor", "Full-stack"],
};

export default function ProjectsArchive() {
  const all = [...projects, companion];
  return <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
    <header className="border-b border-[var(--hairline)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 sm:px-8" aria-label="Archive navigation">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--accent)]"><ArrowLeft size={17}/> Back to selected work</Link>
        <Link href="/learn/" className="text-sm font-bold hover:text-[var(--accent)]">Learn & articles</Link>
      </nav>
    </header>
    <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]"><FolderOpen size={17}/> Full project archive</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">More work, neatly organized.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">Explore additional production platforms, enterprise learning experiences, and experimental software. The homepage highlights three projects; this archive keeps the broader body of work accessible.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {all.map(project=>{
          const href = project.link?.startsWith("/dg-portfolio/") ? project.link.slice("/dg-portfolio".length) : project.link;
          const isInternal = !!href?.startsWith("/");
          return <article key={project.title} className="flex flex-col overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)]">
            {project.image && <div className="h-48 overflow-hidden bg-[var(--case-band)]"><img src={base+"/"+project.image.replace(/^\.\//, "")} alt={project.title} className="h-full w-full object-cover" loading="lazy"/></div>}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--accent)]">{project.role}</p>
              <h2 className="mt-3 text-xl font-bold">{project.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{project.shortDescription ?? project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags?.slice(0,3).map(tag=><span key={tag} className="rounded-md border border-[var(--hairline)] px-2 py-1 text-xs">{tag}</span>)}</div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-[var(--accent)]">
                {href && (isInternal ? <Link href={href} className="inline-flex items-center gap-1 hover:underline">View details <ArrowUpRight size={15}/></Link> : <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">Visit project <ArrowUpRight size={15}/></a>)}
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">Source code ↗</a>}
              </div>
            </div>
          </article>;
        })}
      </div>
      <div className="mt-12 rounded-xl border border-[var(--hairline)] bg-[var(--case-band)] p-6"><h2 className="font-bold">Looking for a technical deep dive?</h2><p className="mt-2 text-[var(--muted)]">Start with the LRS Analytics case study for React, TypeScript, component architecture, data visualization, and interactive reporting.</p><Link href="/lrs-analytics-case-study/" className="mt-4 inline-flex items-center gap-2 font-bold text-[var(--accent)] hover:underline">Read LRS Analytics case study <ArrowUpRight size={16}/></Link></div>
    </div>
  </main>;
}
