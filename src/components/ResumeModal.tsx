// src/components/ResumeModal.tsx
import { FaTimes, FaFileDownload, FaSpinner } from "react-icons/fa";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [loading, setLoading] = useState(true);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[var(--glass)]/70 backdrop-blur-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--hairline)] bg-[var(--glass)]/60 backdrop-blur-sm">
        <h2 className="text-sm sm:text-base text-[var(--fg)]/80 font-medium tracking-wide">
          Resume Preview
        </h2>

        <button
          onClick={onClose}
          className="
            p-2 sm:p-2.5 rounded-full
            text-[var(--fg)]/70 hover:text-[var(--accent)]
            hover:bg-[var(--glass)]/60 transition
            focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40
          "
          aria-label="Close"
        >
          <FaTimes size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 relative overflow-auto min-h-0">
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--glass)]/80 backdrop-blur-md">
            <FaSpinner className="animate-spin text-[var(--accent)]" size={28} />
          </div>
        )}

        {/* Original /preview embed (no Google blue bar) */}
        <iframe
          src="https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/preview"
          className="w-full h-full border-0"
          style={{
            // Allow internal scroll without cutting off
            height: "100%",
            width: "100%",
            transformOrigin: "top left",
            touchAction: "pan-x pan-y",
          }}
          onLoad={() => setLoading(false)}
        />
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center items-center gap-3 p-4 sm:p-5 border-t border-[var(--hairline)] bg-[var(--glass)]/60 backdrop-blur-sm">
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
