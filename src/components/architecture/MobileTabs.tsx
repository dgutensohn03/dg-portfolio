"use client";

type Props = {
  sections: { id: string; title: string }[];
  active: string;
  onClick?: (id: string) => void;
};

export default function MobileTabs({ sections, active, onClick }: Props) {
  return (
    <div className="lg:hidden sticky top-0 z-40 bg-gray-50 border-b border-gray-200 overflow-x-auto">
      <div className="flex gap-2 px-4 py-3 min-w-max">
        {sections.map((s) => {
          const isActive = active === s.id;

          return (
            <button
              key={s.id}
              onClick={() => onClick?.(s.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-500"
              }`}
            >
              {s.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
