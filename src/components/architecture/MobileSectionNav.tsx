"use client";

type Props = {
  sections: { id: string; title: string }[];
};

export default function MobileSectionNav({ sections }: Props) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      window.innerHeight / 2 +
      el.offsetHeight / 2;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 z-30 mb-6 overflow-x-auto border-b bg-white/80 backdrop-blur lg:hidden">
      <div className="flex gap-2 px-4 py-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleClick(s.id)}
            className="whitespace-nowrap rounded-full border px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}
