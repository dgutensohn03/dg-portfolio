"use client";

export default function Monogram() {
  return (
    <div
      className="
        w-12 h-12 flex items-center justify-center
        rounded-xl shadow-inner
        bg-[var(--glass)]/70 backdrop-blur-md
        font-bold text-lg text-[var(--fg)]
        tracking-tight
      "
      tabIndex={0}
    >
      DG
    </div>
  );
}