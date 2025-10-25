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
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-[var(--glass)]/60">
      <div className="relative w-[90%] max-w-3xl h-[80%] glass rounded-xl overflow-hidden border border-[var(--hairline)]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[var(--fg)]/70 hover:text-[var(--accent)] transition"
        >
          <FaTimes size={20} />
        </button>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--glass)]/70 backdrop-blur-md">
            <FaSpinner className="animate-spin text-[var(--accent)]" size={26} />
          </div>
        )}

        <iframe
          src="https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/preview"
          className="w-full h-full"
          onLoad={() => setLoading(false)}
        ></iframe>

        <div className="absolute bottom-3 left-0 w-full flex justify-center">
          <a
            href="https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 glass border border-[var(--hairline)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition inline-flex items-center gap-2"
          >
            <FaFileDownload size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
