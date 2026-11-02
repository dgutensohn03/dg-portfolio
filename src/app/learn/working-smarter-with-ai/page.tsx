import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, UserRound, Lightbulb, AlertTriangle, BrainCircuit } from "lucide-react";
import { LearnNav } from "@/components/learn/LearnShell";

export const metadata: Metadata = {
  title: "Working Smarter with AI: Better Questions, Better Answers | Daniel Gutensohn",
  description: "A beginner-friendly guide to asking better AI questions, iterating on prompts, challenging assumptions, and learning by doing.",
  authors: [{ name: "Daniel Gutensohn" }],
  openGraph: {
    type: "article",
    title: "Working Smarter with AI: Better Questions, Better Answers",
    description: "A friendly field guide to better AI conversations—with tips, real examples, and a hands-on prompt challenge.",
    publishedTime: "2026-11-02T00:00:00-07:00",
    authors: ["Daniel Gutensohn"],
  },
};

function Tip({ kind = "tip", children }: { kind?: "tip" | "watch" | "try"; children: React.ReactNode }) {
  const Icon = kind === "watch" ? AlertTriangle : kind === "try" ? BrainCircuit : Lightbulb;
  const name = kind === "watch" ? "Watch out" : kind === "try" ? "Try it yourself" : "Helpful hint";
  return <aside className="my-8 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/[.07] p-5 sm:p-6">
    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[.1em] text-[var(--accent)]"><Icon size={18} aria-hidden="true" />{name}</h3>
    <div className="mt-3 space-y-3 text-[var(--fg)]">{children}</div>
  </aside>;
}
function Prompt({ children }: { children: React.ReactNode }) {
  return <blockquote className="my-5 rounded-xl border-l-4 border-[var(--accent)] bg-[var(--case-band)] px-5 py-4 font-medium leading-7 text-[var(--fg)]">{children}</blockquote>;
}
function Section({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="border-t border-[var(--hairline)] py-12 sm:py-16">
    <p className="text-xs font-bold uppercase tracking-[.15em] text-[var(--accent)]">Chapter {number}</p>
    <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
    <div className="mt-6 space-y-5 text-[1.06rem] leading-8 text-[var(--muted)]">{children}</div>
  </section>;
}
export default function WorkingSmarterWithAI() {
  return <div className="case-study min-h-screen text-[var(--fg)]">
    <LearnNav article />
    <main>
      <header className="px-5 pb-16 pt-12 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--accent)]">Learn / Practical AI Guide</p>
          <h1 className="mt-5 text-[clamp(2.8rem,7vw,5.4rem)] font-semibold leading-[.98] tracking-[-.055em]">Working smarter <span className="text-[var(--accent)]">with AI.</span></h1>
          <p className="mt-5 text-2xl font-semibold tracking-tight">Better questions. Better prompts. Better answers.</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">A beginner-friendly guide to turning fuzzy ideas into useful conversations—without memorizing magical commands or needing a computer science degree.</p>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-[var(--hairline)] pt-5 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><UserRound size={16}/> By Daniel Gutensohn</span>
            <span className="inline-flex items-center gap-2"><CalendarDays size={16}/> <time dateTime="2026-11-02">November 2, 2026</time></span>
            <span className="inline-flex items-center gap-2"><Clock3 size={16}/> 12 min read</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold"><span className="rounded-full border border-[var(--hairline)] px-3 py-2">AI literacy</span><span className="rounded-full border border-[var(--hairline)] px-3 py-2">Prompting</span><span className="rounded-full border border-[var(--hairline)] px-3 py-2">Problem solving</span></div>
        </div>
      </header>
      <div className="case-band border-y border-[var(--hairline)] px-5 py-8 sm:px-6">
        <nav aria-label="In this article" className="mx-auto max-w-4xl">
          <p className="text-sm font-bold">Jump to a chapter</p>
          <div className="mt-3 flex flex-wrap gap-2">{[
            ["clarity","Ask clearly"],["questions","Ask AI to ask"],["roles","Change the lens"],["followup","Follow up"],["options","Compare options"],["steps","Break it down"],["challenge","Challenge ideas"],["learn","Learn with AI"],["template","Prompt template"],["practice","Prompt makeover"]
          ].map(([id,label])=><a key={id} href={`#${id}`} className="rounded-full border border-[var(--hairline)] bg-[var(--case-card)] px-3 py-2 text-xs hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">{label}</a>)}</div>
        </nav>
      </div>
      <article className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="py-14 text-lg leading-8 text-[var(--muted)]">
          <p>You ask AI to “make me a website.” It produces a hero headline, three suspiciously enthusiastic feature cards, and a “Get Started” button. Technically, you got what you asked for. Was it what you wanted? Probably not.</p>
          <p className="mt-5 font-semibold text-[var(--fg)]">The trick isn’t knowing all the answers. It’s learning how to ask better questions.</p>
        </div>
        <Section id="clarity" number="01" title="AI isn't a mind reader (yet)">
          <p>Imagine walking into a restaurant and saying, “Bring me food.” You’ll probably get something edible. Whether it’s something you actually want is another matter.</p>
          <p>The same goes for prompting. “Help me make my website better” leaves a lot unsaid: better for whom, and in what way?</p>
          <Prompt>“I’m updating my portfolio for hiring managers recruiting senior frontend engineers. Review its hierarchy, readability, and accessibility. Suggest five prioritized improvements with reasons.”</Prompt>
          <p>Now AI knows the audience, the goal, and the kind of answer you need.</p>
          <Tip><p>Before you hit Enter, ask: <strong>What’s my goal? Why does it matter? Who is it for? What would success look like?</strong> You won’t need all four every time, but clarity beats length.</p></Tip>
        </Section>
        <Section id="questions" number="02" title="Don't know what to ask? Ask AI.">
          <p>Here’s a useful shortcut: let AI help you figure out the prompt. If your idea is fuzzy, a ready-made solution is often premature.</p>
          <Prompt>“I want to build an app that helps people discover hiking trails, but I’m still defining it. Ask me one question at a time about the audience, essential features, and constraints. Explain why each question matters. Then help me make a plan.”</Prompt>
          <p>That conversation might uncover offline access, trail difficulty, weather, access restrictions, and how current the information needs to be—details you may not have thought to specify.</p>
          <Tip><p>Ask for <strong>one question at a time</strong>. Twenty-five questions at once feels like homework. Three high-impact decisions make a much better starting point.</p></Tip>
        </Section>
        <Section id="roles" number="03" title="Give AI a perspective, not just a task">
          <p>The same design looks different through different lenses. Ask for a UX review and you’ll focus on hierarchy and navigation; ask for an engineering review and you’ll focus on performance and maintainability.</p>
          <Prompt>“Review this page from the perspective of a first-time visitor. Where might they get confused, lose trust, or struggle to find what they need?”</Prompt>
          <p>Try a second pass as a hiring manager or accessibility reviewer. Different perspectives reveal different blind spots.</p>
          <Tip kind="watch"><p>Assigning an expert role does <strong>not</strong> make the answer authoritative. Check claims and test recommendations, especially for consequential decisions.</p></Tip>
        </Section>
        <Section id="followup" number="04" title="The follow-up is where the magic happens">
          <p>A first answer is a draft, not a verdict. “I don’t like it” is feedback, but it doesn't tell AI where to go next.</p>
          <Prompt>“Keep the navigation and overall structure. Change the hero: it feels too corporate and crowded. I want visitors to immediately understand my work. Preserve existing functionality.”</Prompt>
          <p>Use the formula <strong className="text-[var(--fg)]">Keep + Change + Reason + Goal</strong>. It works for writing, code, designs, and plans.</p>
          <Tip><p>State what <strong>must not change</strong>. For software, inspect the diff and run tests; an instruction alone isn’t a safety net.</p></Tip>
        </Section>
        <Section id="options" number="05" title="Ask for options, not a single perfect answer">
          <p>Instead of asking “What’s the best approach?”, ask for alternatives and trade-offs.</p>
          <Prompt>“Give me a simple, balanced, and ambitious approach to improving this navigation. Compare accessibility, complexity, and maintenance. Recommend one for my audience.”</Prompt>
          <p>Sometimes the smartest design choice is the one that adds the least complexity.</p>
          <Tip><p>Append: <strong>“What am I overlooking that could change your recommendation?”</strong></p></Tip>
        </Section>
        <Section id="steps" number="06" title="Break the big problem into small ones">
          <p>You wouldn't install kitchen cabinets before deciding where the walls go. Don’t ask AI to build an entire product before you understand what it needs to do.</p>
          <ol className="list-decimal space-y-2 pl-6"><li>Define the problem and audience.</li><li>Separate must-haves from nice-to-haves.</li><li>Compare plausible approaches.</li><li>Choose a first milestone.</li><li>Build, test, and learn.</li></ol>
          <p><strong className="text-[var(--fg)]">Plan → Build → Test → Learn → Improve.</strong> The same loop works for a report, a presentation, or a personal project.</p>
        </Section>
        <Section id="challenge" number="07" title="Let AI challenge your thinking">
          <p>If you only ask whether your idea is great, you may get more encouragement than insight. Invite useful disagreement.</p>
          <Prompt>“Challenge this feature proposal. What assumptions am I making? What could go wrong? Could a simpler solution address the real user need? What evidence would change your recommendation?”</Prompt>
          <Tip kind="watch"><p>AI can be convincingly wrong. For important facts, request reputable sources and verify them yourself. Confidence is not evidence.</p></Tip>
        </Section>
        <Section id="learn" number="08" title="Use AI to learn, not just to finish">
          <p>Code you can't understand is hard to fix. Explanations you never practice are hard to remember.</p>
          <Prompt>“Explain JavaScript promises with a real-world analogy. Give me a small exercise without the answer. After I try it, review my work, explain mistakes, and let me try again.”</Prompt>
          <p>Think <strong className="text-[var(--fg)]">Explain → Practice → Feedback</strong>. If an explanation doesn't click, ask for another analogy or a concrete example.</p>
        </Section>
        <Section id="template" number="09" title="Your all-purpose prompt template">
          <p>Save this and fill in only the parts that matter:</p>
          <Prompt><span className="whitespace-pre-line">{`I’m working on [project/problem].
My goal is [desired outcome].
This is for [audience].
Constraints: [requirements or limits].
Please [specific task].
Format the result as [desired format].
If important details are missing, ask before making major assumptions.
Flag risks or better alternatives I may have missed.`}</span></Prompt>
          <p>And when the conversation starts going in circles: “Summarize what we’ve decided, what’s unresolved, and the next three actions.”</p>
        </Section>
        <section id="practice" className="my-12 rounded-3xl border border-[var(--accent)]/35 bg-[var(--accent)]/[.06] p-6 sm:p-9">
          <div className="flex items-center gap-2 text-[var(--accent)]"><BrainCircuit size={20}/><span className="text-xs font-bold uppercase tracking-[.17em]">Your turn · 5-minute challenge</span></div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">The Prompt Makeover</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">Here's your deliberately terrible starting prompt:</p>
          <Prompt>“Make me a good app.”</Prompt>
          <p className="text-[var(--muted)]">Rewrite it so AI has enough direction to actually help. Before you reveal a sample answer, try to include:</p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[var(--muted)]"><li>A clear goal and real audience</li><li>At least two constraints</li><li>A specific first deliverable</li><li>A request for clarifying questions or alternatives</li></ol>
          <details className="group mt-7 rounded-2xl border border-[var(--hairline)] bg-[var(--case-card)] p-5">
            <summary className="cursor-pointer font-semibold text-[var(--fg)]">Reveal one possible makeover</summary>
            <Prompt>“I want to plan a mobile-first app that helps beginners discover nearby hiking trails. It should be accessible, easy to use on a phone, and useful when cell service is limited. Start by asking me three important questions, one at a time. Then propose a small first-release feature set and explain what to leave for later.”</Prompt>
            <p className="text-sm leading-6 text-[var(--muted)]">Notice the difference? We haven't asked AI to produce an entire app—we've asked it to help define one. Your version might be completely different, and that's okay.</p>
          </details>
          <Tip kind="try"><p><strong>Level up:</strong> Take your improved prompt, run it, and evaluate the reply. What did AI assume? What would you keep, change, and question? Revise once more. That iteration is the real skill.</p></Tip>
        </section>
        <div className="border-t border-[var(--hairline)] py-14 text-lg leading-8 text-[var(--muted)]">
          <h2 className="text-3xl font-semibold text-[var(--fg)]">Better conversations beat magic words.</h2>
          <p className="mt-5">You don't need to memorize a hundred prompt tricks. Start with a clear goal, ask for the missing questions, compare options, and challenge the results. Your job is to provide direction and judgment; AI can help you explore.</p>
          <p className="mt-5 font-semibold text-[var(--fg)]">And sometimes the best prompt is simply: “I'm not sure what to ask. Can you help me figure it out?”</p>
          <div className="mt-9"><Link href="/learn" className="inline-flex items-center gap-2 font-semibold text-[var(--accent)] hover:underline"><ArrowLeft size={17}/> Explore more Learn articles</Link></div>
          <div className="mt-8 border-t border-[var(--hairline)] pt-6 text-sm">Written by <strong>Daniel Gutensohn</strong> · Published <time dateTime="2026-11-02">November 2, 2026</time></div>
        </div>
      </article>
    </main>
  </div>;
}
