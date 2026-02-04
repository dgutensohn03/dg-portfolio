import { createPortal } from "react-dom";
import { FaTimes, FaFileDownload, FaSpinner } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DOC_ID = "1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8";
const DOC_PDF = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Fetch the latest PDF, convert to blob URL (bypasses X-Frame-Options)
  useEffect(() => {
    if (!isOpen) return;
    let alive = true;
    let objectUrl: string | null = null;

    (async () => {
      try {
        setLoading(true);
        const res = await fetch(DOC_PDF, { credentials: "omit" });
        if (!res.ok) throw new Error(`PDF fetch failed: ${res.status}`);
        const blob = await res.blob();
        objectUrl = URL.createObjectURL(blob);
        if (alive) setPdfUrl(objectUrl);
      } catch (e) {
        console.error(e);
        // Fallback: open PDF in new tab and close modal
        window.open(DOC_PDF, "_blank");
        if (alive) onClose();
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      setPdfUrl(null);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setDownloading(true);
      if (pdfUrl?.startsWith("blob:")) {
        const a = document.createElement("a");
        a.href = pdfUrl;
        a.download = "Daniel_Gutensohn_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        const res = await fetch(DOC_PDF, { credentials: "omit" });
        const blob = await res.blob();
        const obj = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = obj;
        a.download = "Daniel_Gutensohn_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(obj);
      }
    } catch {
      window.open(DOC_PDF, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  const modal = (
    <div className="ResumeModal fixed inset-0 z-[9999]">
      {/* Light glass backdrop (no dark dimmer) */}
      <div
        className="absolute inset-0 bg-[var(--glass)]/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal shell */}
      <div
        className="
          absolute inset-0 flex items-center justify-center p-3 sm:p-6
        "
        aria-modal="true"
        role="dialog"
      >
        <div
          className="
            relative flex flex-col w-full max-w-4xl
            h-[90vh] sm:h-[85vh]
            [@supports(height:100dvh)]:h-[90dvh]
            bg-[var(--glass)]/90 backdrop-blur-xl
            border border-[var(--hairline)] rounded-xl shadow-2xl
            overflow-hidden
          "
        >
          {/* Header (fixed) */}
          <div
            className="
              flex items-center justify-between
              px-4 sm:px-5 py-3
              border-b border-[var(--hairline)]
              bg-[var(--glass)]/70 backdrop-blur-md
              flex-shrink-0
            "
          >
            <h2 className="text-sm sm:text-base font-medium text-[var(--fg)]/80">
              Resume Preview
            </h2>
            <button
              onClick={onClose}
              className="
                p-2 rounded-full text-[var(--fg)]/75
                hover:text-[var(--accent)] hover:bg-[var(--glass)]/40
                transition cursor-pointer
              "
              aria-label="Close"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Viewer container: flex-1 + min-h-0 makes the middle area
              auto-resize and be the ONLY scroll region */}
          <div
            className="
              relative flex-1 min-h-0
              px-2 py-2
              bg-transparent
            "
          >
            {/* Glass frame around the doc */}
            <div
              className="
                relative w-full h-full
                rounded-lg border border-[var(--hairline)]
                bg-[var(--glass)]/40 backdrop-blur-sm
                overflow-hidden
              "
            >
              {loading && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-[var(--glass)]/60 backdrop-blur-md">
                  <FaSpinner className="animate-spin text-[var(--accent)]" size={28} />
                </div>
              )}

              {/* PDF fills the available area and scrolls if needed */}
              {pdfUrl && (
                <iframe
                  key={pdfUrl}
                  src={pdfUrl}
                  title="Live Resume PDF"
                  className="absolute inset-0 w-full h-full border-0 z-10"
                  style={{
                    backgroundColor: "white", // pure white doc surface
                    WebkitOverflowScrolling: "touch" as any,
                    display: "block",
                  }}
                />
              )}
            </div>
          </div>

          {/* Footer (fixed) */}
          <div
            className="
              flex justify-center items-center gap-3
              px-4 sm:px-5 py-3
              border-t border-[var(--hairline)]
              bg-[var(--glass)]/70 backdrop-blur-lg
              flex-shrink-0
            "
          >
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-lg
                border border-[var(--hairline)] glass cursor-pointer
                transition text-sm sm:text-base
                hover:border-[var(--accent)] hover:text-[var(--accent)]
                ${downloading ? "opacity-60 cursor-not-allowed" : ""}
              `}
            >
              <FaFileDownload size={16} />
              {downloading ? "Preparing…" : "Download PDF"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
