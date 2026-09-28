"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

const statementFields = [
  {
    key: "actor",
    label: "Actor",
    code: '"actor": { "account": { "homePage": "https://example.org/accounts", "name": "learner-482" } }',
    explanation:
      "A stable account identifies who performed the action without relying on a display name.",
  },
  {
    key: "verb",
    label: "Verb",
    code: '"verb": { "id": "http://adlnet.gov/expapi/verbs/completed" }',
    explanation:
      "The identifier—not its friendly label—defines the action that reporting rules interpret.",
  },
  {
    key: "object",
    label: "Object",
    code: '"object": { "id": "https://example.org/activity/safety-101" }',
    explanation:
      "A persistent activity ID identifies what the action involved across versions and translations.",
  },
  {
    key: "result",
    label: "Result",
    code: '"result": { "completion": true, "success": true, "score": { "scaled": 0.92 } }',
    explanation:
      "Completion, success, and score answer different questions; none should be inferred from another.",
  },
  {
    key: "context",
    label: "Context",
    code: '"context": { "registration": "7b5f8c1a-7bb9-4d6e-82e2-394ee688af21" }',
    explanation:
      "Registration connects the event to one attempt or enrollment so records can be interpreted together.",
  },
];

export function StatementExplorer() {
  const [active, setActive] = useState(0);
  const item = statementFields[active];
  return (
    <div className="interactive-card print-keep rounded-3xl border border-[var(--hairline)] bg-[var(--case-card)] p-5 sm:p-6">
      <div className="print-hidden">
        <p className="inline-flex rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-bold uppercase tracking-[.12em] text-white">
          Interactive
        </p>
        <h3 className="mt-3 text-lg font-semibold">Explore the statement</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Choose a field to connect its syntax to its reporting purpose.
        </p>
        <div
          role="tablist"
          aria-label="Statement fields"
          className="mt-5 flex flex-wrap gap-2"
        >
          {statementFields.map((field, index) => (
            <button
              key={field.key}
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${active === index ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--hairline)] hover:border-[var(--accent)]"}`}
            >
              {field.label}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          aria-live="polite"
          className="interactive-reveal mt-5 rounded-2xl bg-[#0d1117] p-4 text-slate-200 sm:p-5"
          key={item.key}
        >
          <p className="font-mono text-xs leading-6 text-orange-300">
            {item.code}
          </p>
          <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-slate-300">
            {item.explanation}
          </p>
        </div>
      </div>
      <div className="print-only">
        <p className="font-semibold">Statement field guide</p>
        <dl className="mt-4 space-y-4">
          {statementFields.map((field) => (
            <div key={field.key}>
              <dt className="font-semibold">{field.label}</dt>
              <dd className="text-sm text-slate-600">{field.explanation}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function ReportingKnowledgeCheck() {
  const choices = [
    {
      label: "Ask whether the learner clicked Complete",
      correct: false,
      feedback:
        "The stored statement already proves the completion event reached the LRS. Rechecking the original click moves backward to an assumption that has evidence.",
    },
    {
      label: "Inspect the query and transformation rules",
      correct: true,
      feedback:
        "Correct. Storage and retrieval are verified, so the next unsupported assumption is that downstream rules recognize the statement as completion.",
    },
    {
      label: "Confirm the LRS is online",
      correct: false,
      feedback:
        "The statement was retrieved from the LRS, so availability is not the next unsupported assumption.",
    },
  ];
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="interactive-card rounded-3xl border border-[var(--hairline)] bg-[var(--case-card)] p-5 sm:p-6">
      <div className="print-hidden">
        <p className="inline-flex rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-bold uppercase tracking-[.12em] text-white">
          Interactive
        </p>
        <h3 className="mt-3 text-lg font-semibold">Check your reasoning</h3>
        <p className="mt-3 text-lg font-semibold">
          A completion statement can be retrieved by actor and activity, but the
          dashboard excludes the learner. What should the team inspect next?
        </p>
        <div className="mt-6 space-y-3">
          {choices.map((choice, index) => (
            <button
              key={choice.label}
              onClick={() => setSelected(index)}
              className={`flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left text-sm transition ${selected === index ? "border-[var(--accent)] bg-[var(--accent)]/8" : "border-[var(--hairline)] hover:border-[var(--accent)]"}`}
            >
              {choice.label}
              <ChevronRight size={17} />
            </button>
          ))}
        </div>
        {selected !== null && (
          <div
            aria-live="polite"
            className={`interactive-reveal mt-5 rounded-xl border p-4 text-sm leading-6 ${choices[selected].correct ? "border-emerald-500/35 bg-emerald-500/8" : "border-amber-500/35 bg-amber-500/8"}`}
          >
            <p className="font-semibold">
              {choices[selected].correct
                ? "Correct—follow the next unverified handoff"
                : "Not yet—use the evidence already available"}
            </p>
            <p className="mt-2 text-[var(--muted)]">
              {choices[selected].feedback}
            </p>
          </div>
        )}
      </div>
      <div className="print-only">
        <p className="font-semibold">Knowledge check and rationale</p>
        <p className="mt-2">
          Inspect the query and transformation rules. Storage and retrieval are
          verified, so downstream interpretation is the next unsupported
          assumption.
        </p>
      </div>
    </div>
  );
}

const diagnosticChoices = [
  {
    label: "Ask the learner to repeat the course",
    correct: false,
    feedback:
      "This adds effort without testing a specific assumption. The experience already confirmed the learner's action.",
  },
  {
    label: "Search the LRS for the learner and activity",
    correct: true,
    feedback:
      "Best next move. Retrieval establishes whether the event crossed transport and storage before anyone changes source data or reporting logic.",
  },
  {
    label: "Change the dashboard record manually",
    correct: false,
    feedback:
      "That may hide the symptom, but it removes evidence and does not identify the broken handoff.",
  },
];

export function DiagnosticDecision() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="interactive-card rounded-3xl border border-[var(--hairline)] bg-[var(--case-card)] p-5 sm:p-6">
      <div className="print-hidden">
        <p className="inline-flex rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-bold uppercase tracking-[.12em] text-white">
          Interactive
        </p>
        <h3 className="mt-3 text-lg font-semibold">Your move</h3>
        <p className="mt-3 text-lg font-semibold">
          The experience shows Complete, but the dashboard shows Incomplete.
          What evidence would you inspect first?
        </p>
        <div className="mt-6 space-y-3">
          {diagnosticChoices.map((choice, index) => (
            <button
              key={choice.label}
              onClick={() => setSelected(index)}
              className={`flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left text-sm transition ${selected === index ? "border-[var(--accent)] bg-[var(--accent)]/8" : "border-[var(--hairline)] hover:border-[var(--accent)]"}`}
            >
              {choice.label}
              <ChevronRight size={17} />
            </button>
          ))}
        </div>
        {selected !== null && (
          <div
            aria-live="polite"
            className={`interactive-reveal mt-5 rounded-xl border p-4 text-sm leading-6 ${diagnosticChoices[selected].correct ? "border-emerald-500/35 bg-emerald-500/8" : "border-amber-500/35 bg-amber-500/8"}`}
          >
            <p className="font-semibold">
              {diagnosticChoices[selected].correct
                ? "Strong diagnostic choice"
                : "Reconsider the evidence path"}
            </p>
            <p className="mt-2 text-[var(--muted)]">
              {diagnosticChoices[selected].feedback}
            </p>
          </div>
        )}
      </div>
      <div className="print-only">
        <p className="font-semibold">Decision point</p>
        <p className="mt-2">
          Inspect the LRS for the learner and activity first. This determines
          whether the event crossed transport and storage before anyone changes
          data.
        </p>
      </div>
    </div>
  );
}

const roles = [
  {
    role: "New user",
    need: "Complete a core workflow confidently",
    support: "Guided practice",
    rationale:
      "A demonstration followed by realistic practice builds a mental model and provides corrective feedback before independent work.",
  },
  {
    role: "Experienced user",
    need: "Transfer knowledge after a product change",
    support: "Change-focused walkthrough + job aid",
    rationale:
      "Experienced users need differences, risks, and a durable reference—not a complete introduction to familiar work.",
  },
  {
    role: "Administrator",
    need: "Resolve access and progress problems",
    support: "Scenario workshop + runbook",
    rationale:
      "Complex exceptions require judgment practice, while the runbook supports detailed steps during infrequent incidents.",
  },
  {
    role: "Manager",
    need: "Interpret team reporting",
    support: "Role-based overview + reporting guide",
    rationale:
      "Managers need decision-ready definitions and examples without learning controls they will not operate.",
  },
];

export function TrainingRecommender() {
  const [active, setActive] = useState(0);
  const item = roles[active];
  return (
    <div className="interactive-card rounded-3xl border border-[var(--hairline)] bg-[var(--case-card)] p-5 sm:p-6">
      <div className="print-hidden">
        <p className="inline-flex rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-bold uppercase tracking-[.12em] text-white">
          Interactive
        </p>
        <h3 className="mt-3 text-lg font-semibold">
          Match support to the work
        </h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Choose an audience to see how the performance need changes the
          learning solution.
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {roles.map((item, index) => (
            <button
              key={item.role}
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={`rounded-xl border p-4 text-left text-sm font-semibold transition ${active === index ? "border-[var(--accent)] bg-[var(--accent)]/8" : "border-[var(--hairline)] hover:border-[var(--accent)]"}`}
            >
              {item.role}
            </button>
          ))}
        </div>
        <div
          aria-live="polite"
          className="interactive-reveal mt-5 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/8 p-5"
          key={item.role}
        >
          <div className="flex items-center gap-2 text-[var(--accent)]">
            <CheckCircle2 size={18} />
            <p className="text-sm font-semibold">{item.support}</p>
          </div>
          <p className="mt-4 text-sm">
            <b>Performance need:</b> {item.need}
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            {item.rationale}
          </p>
        </div>
      </div>
      <div className="print-only">
        <p className="font-semibold">Audience-to-support recommendations</p>
        <dl className="mt-4 space-y-4">
          {roles.map((item) => (
            <div key={item.role}>
              <dt className="font-semibold">
                {item.role}: {item.support}
              </dt>
              <dd className="text-sm text-slate-600">{item.rationale}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
