"use client";

export default function MottoSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/assets/Linkedin_Banner.png')",
        }}
      />

      {/* Soft Overlay (Balanced — Not Too Dark) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Large Faint Overlay Word */}
      <div className="pointer-events-none absolute select-none text-[18vw] font-black tracking-[0.15em] text-white/[0.04]">
        BUILD
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="mb-4 text-3xl font-light uppercase tracking-[0.15em] md:text-5xl">
          We Don’t Just Build Products.
        </h1>

        <h2 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          We Build Impact.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-sm font-light tracking-[0.2em] text-white/80 md:text-base">
          Thoughtful design. Intentional engineering.
          Solutions that move businesses forward.
        </p>
      </div>
    </section>
  );
}
