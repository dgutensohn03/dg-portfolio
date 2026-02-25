"use client";

interface Section {
  id: string;
  title: string;
}

export default function SidebarNav({
  sections,
  active,
  onSelect,
}: {
  sections: Section[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav
      className="flex flex-col gap-3 px-6 sm:px-8"
      role="navigation"
      aria-label="Section navigation"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            aria-current={isActive ? "true" : undefined}
            className={`w-full px-5 py-2 rounded-full text-sm font-medium transition-all border text-left
              ${
                isActive
                  ? "bg-gray-900 text-white border-gray-900 shadow-md"
                  : "bg-gray-200 text-gray-700 border-gray-200 hover:bg-gray-300 hover:shadow-sm"
              }`}
          >
            {s.title}
          </button>
        );
      })}
    </nav>
  );
}
