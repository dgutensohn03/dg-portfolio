import { useEffect } from "react";

export default function ProjectModal({
  open,
  onClose,
  title,
  src,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  src?: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center"
      style={{ background: "color-mix(in oklab, var(--bg) 30%, transparent)" }}
      onClick={onClose}
    >
      <div
        className="surface w-[min(92vw,1100px)] h-[min(88vh,720px)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-12 flex items-center justify-between px-4 border-b" style={{ borderColor: "var(--hairline)" }}>
          <div className="font-medium" style={{ color: "var(--fg)" }}>{title || "Preview"}</div>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
        <div className="w-full h-[calc(100%-3rem)] bg-white/5">
          {src ? (
            <iframe title={title} src={src} className="w-full h-full" />
          ) : (
            <div className="grid place-items-center w-full h-full" style={{ color: "var(--muted)" }}>
              No content
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
