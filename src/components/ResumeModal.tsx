// src/components/ResumeModal.tsx
import { FaTimes, FaFileDownload, FaSpinner } from "react-icons/fa";
import { useState, useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--glass)]/60 backdrop-blur-md flex flex-col text-[var(--fg)]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 sm:px-6 sm:py-4 border-b border-[var(--hairline)] bg-[var(--glass)]/70 backdrop-blur-md">
        <h2 className="text-sm sm:text-base font-medium text-[var(--fg)]/80 tracking-wide">
          Resume Preview
        </h2>
        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full text-[var(--fg)]/70 hover:text-[var(--accent)] hover:bg-[var(--glass)]/50 transition"
        >
          <FaTimes size={18} />
        </button>
      </div>

      {/* Classic fixed block (not flex-shrinking) */}
      <div className="relative grow bg-[var(--glass)]/20 overflow-auto">
        <div
          className="
            absolute inset-x-0 top-0
            flex justify-center
            pt-3 pb-4
          "
        >
          <div
            className="
              w-[92%] sm:w-[90%]
              rounded-xl overflow-hidden border border-[var(--hairline)]
              bg-white shadow-lg
              h-[calc(100vh-140px)]  /* header+footer offset */
            "
            style={{
              transformOrigin: "top center",
              transform:
                "scale(1)",
            }}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--glass)]/60 backdrop-blur-md z-10">
                <FaSpinner className="animate-spin text-[var(--accent)]" size={26} />
              </div>
            )}

            <iframe
              src="https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/preview"
              className="w-full h-full border-0"
              onLoad={() => setLoading(false)}
              title="Resume"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center px-5 py-3 sm:px-6 sm:py-4 border-t border-[var(--hairline)] bg-[var(--glass)]/70 backdrop-blur-md">
        <a
          href="https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 glass border border-[var(--hairline)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition inline-flex items-center gap-2 text-sm sm:text-base"
        >
          <FaFileDownload size={16} />
          Download Resume
        </a>
      </div>
    </div>
  );
}
