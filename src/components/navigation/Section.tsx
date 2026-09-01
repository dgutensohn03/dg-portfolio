interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-wide text-[var(--muted)] mb-3">
        {title}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}