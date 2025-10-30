// src/components/ResumeModal.tsx
import { FaTimes, FaFileDownload, FaSpinner } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [loading, setLoading] = useState(true);
  const [viewerHeight, setViewerHeight] = useState<number | undefined>(undefined);

  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Compute the exact viewer height (accounts for mobile chrome + safe areas)
  useEffect(() => {
    if (!isOpen) return;

    const compute = () => {
      const hdr = headerRef.current?.offsetHeight ?? 0;
      const ftr = footerRef.current?.offsetHeight ?? 0;

      // Use visualViewport when available (iOS/Android), fallback to innerHeight
      const vpH =
        (window.visualViewport && Math.round(window.visualViewport.height)) ||
        window.innerHeight;

      // Extra padding to avoid any collision (tiny safety margin)
      const safe = 2;

      setViewerHeight(Math.max(0, vpH - hdr - ftr - safe));
    };

    compute();
    window.addEventListener("resize", compute);
    window.addEventListener("orientationchange", compute);
    if (window.visualViewport) window.visualViewport.addEventListener("resize", compute);

    return () => {
      window.removeEventListener("resize", compute);
      window.removeEventListener("orientationchange", compute);
      if (window.visualViewport) window.visualViewport.removeEventListener("resize", compute);
    };
  }, [isOpen]);

  const handleDownload = async () => {
    try {
      const url =
        "https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/export?format=pdf";
      const res = await fetch(url);
      const blob = await res.blob();
      const obj = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = obj;
      a.download = "Daniel_Gutensohn_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(obj);
    } catch (e) {
      // Fallback: open in new tab if fetch is blocked
      window.open(
        "https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/export?format=pdf",
        "_blank"
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay to hide root hero/footer */}
      <div className="absolute inset-0 bg-[var(--bg)]/60 backdrop-blur-md" />

      {/* Modal shell */}
      <div className="relative z-10 flex w-full h-full flex-col bg-[var(--glass)]/80 backdrop-blur-lg border border-[var(--hairline)] text-[var(--fg)]">
        {/* Header (measured) */}
        <div
          ref={headerRef}
          className="flex items-center justify-between px-5 py-3 sm:px-6 sm:py-4 border-b border-[var(--hairline)] bg-[var(--glass)]/70 backdrop-blur-lg flex-shrink-0"
        >
          <h2 className="text-sm sm:text-base font-medium text-[var(--fg)]/80 tracking-wide">
            Resume Preview
          </h2>
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full text-[var(--fg)]/70 hover:text-[var(--accent)] hover:bg-[var(--glass)]/50 transition"
            aria-label="Close"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Viewer: single scroll inside iframe; exact pixel height */}
        <div
          className="relative border-t border-b border-[var(--hairline)] bg-white"
          style={{
            // Avoid double scroll: the outer div is NOT scrollable
            // The iframe will own the scroll internally
            height: viewerHeight ? `${viewerHeight}px` : undefined,
          }}
        >
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--glass)]/60 backdrop-blur-md">
              <FaSpinner className="animate-spin text-[var(--accent)]" size={26} />
            </div>
          )}

          <iframe
            // Live, auto-updating Google Doc
            src="https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/preview"
            title="Live Resume"
            className="absolute inset-0 w-full h-full border-0"
            // Make scrolling smooth inside the iframe on iOS
            style={{
              background: "white",
              WebkitOverflowScrolling: "touch" as any,
              // No transform scaling: we’re using precise height instead
            }}
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Footer (measured) */}
        <div
          ref={footerRef}
          className="flex justify-center items-center px-5 py-3 sm:px-6 sm:py-4 border-t border-[var(--hairline)] bg-[var(--glass)]/80 backdrop-blur-lg flex-shrink-0 z-10 relative"
        >
          <button
            onClick={handleDownload}
            className="px-4 py-2 glass border border-[var(--hairline)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <FaFileDownload size={16} />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
