"use client";
import { Printer } from "lucide-react";
export default function PrintButton() { return <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)]"><Printer size={16}/>Save PDF</button>; }
