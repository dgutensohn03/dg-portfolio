"use client";

import { useEffect, useState } from "react";
import BaseModal from "./BaseModal";
import CloseButton from "./CloseButton";
import { FaSpinner, FaFileDownload } from "react-icons/fa";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DOC_ID = "1frlSi9bT9QtBY5BYu98k6-7UcUDvHWtnKMUoygTRnrE";
const DOC_PDF = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const updateTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    let objectUrl: string | undefined;
    const loadPdf = async () => {
      try {
        setLoading(true);
        const res = await fetch(DOC_PDF);
        const blob = await res.blob();
        objectUrl = URL.createObjectURL(blob);
        setPdfUrl(objectUrl);
      } finally { setLoading(false); }
    };
    loadPdf();
    return () => { if (objectUrl) URL.revokeObjectURL(objectUrl); setPdfUrl(null); };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="w-[92vw] max-w-5xl h-[96vh] rounded-2xl shadow-xl border-1 border-[var(--modal-border)] overflow-hidden flex flex-col bg-[var(--modal-surface)] text-[var(--modal-text)]">
        <div className="relative sticky top-0 z-20 px-8 py-6 border-b bg-[var(--modal-header)] border-[var(--modal-border)]">
          <CloseButton onClick={onClose} isDark={isDark} />

          <h2 className="text-3xl sm:text-4xl font-bold">Resume</h2>
          <p className="mt-2 text-[var(--modal-text-secondary)]">
            Full Resume PDF download
          </p>

          <a
            href={DOC_PDF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-md border border-[var(--modal-button-border)] text-[var(--modal-accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            Download <FaFileDownload size={16} />
          </a>
        </div>

        <div className="flex-1 overflow-auto flex justify-center items-center p-6">
          {loading && <FaSpinner className="animate-spin text-[var(--accent)] text-4xl" />}
          {pdfUrl && !loading && (
            <iframe
              src={pdfUrl}
              title="Resume PDF"
              className="w-full h-full border-0 rounded-md"
            />
          )}
        </div>
      </div>
    </BaseModal>
  );
}
