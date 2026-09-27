"use client";
import { Printer } from "lucide-react";
export default function PrintButton() {
  return (
    <button
      type="button"
      aria-label="Save this article as a PDF"
      onClick={() => window.print()}
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
    >
      <Printer size={16} />
      Save PDF
    </button>
  );
}
