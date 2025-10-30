import { FaTimes, FaFileDownload, FaSpinner } from "react-icons/fa";
import { useState, useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [loading, setLoading] = useState(true);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    // Disable background scrolling when modal is open
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      const fileUrl =
        "https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/export?format=pdf";
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Daniel_Gutensohn_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000); // small visual feedback
    } catch (err) {
      console.error("Download failed:", err);
      window.open(
        "https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/export?format=pdf",
        "_blank"
      );
    }
  };

  return (
    <div className="ResumeModal fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-[var(--bg)]/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal shell */}
      <div
        className="
          relative z-10 flex flex-col w-[90%] max-w-4xl h-[85vh]
          bg-[var(--glass)]/90 backdrop-blur-xl
          border border-[var(--hairline)] rounded-xl
          shadow-2xl overflow-hidden
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--hairline)] bg-[var(--glass)]/70 backdrop-blur-md flex-shrink-0">
          <h2 className="text-sm sm:text-base font-medium text-[var(--fg)]/80 tracking-wide">
            Resume Preview
          </h2>
          <button
            onClick={onClose}
            className="
              p-2 rounded-full text-[var(--fg)]/70
              hover:text-[var(--accent)] hover:bg-[var(--glass)]/40
              transition cursor-pointer
            "
            aria-label="Close"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Google Docs Viewer */}
        <div className="relative flex-1 bg-white">
          {loading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-[var(--glass)]/60 backdrop-blur-md">
              <FaSpinner className="animate-spin text-[var(--accent)]" size={28} />
            </div>
          )}

          <iframe
            src="https://docs.google.com/document/d/1ZnLTwhfNUJ_ser5COGP3ShULy8U2B7XN2mzyXjEgVu8/preview"
            className="absolute inset-0 w-full h-full border-0 z-10"
            title="Live Resume Preview"
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Footer */}
        <div
          className="
            relative z-30 flex justify-center items-center gap-3
            px-5 py-3 border-t border-[var(--hairline)]
            bg-[var(--glass)]/70 backdrop-blur-lg flex-shrink-0
          "
        >
          <button
            onClick={handleDownload}
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-lg
              border border-[var(--hairline)] glass cursor-pointer
              transition text-sm sm:text-base
              hover:border-[var(--accent)] hover:text-[var(--accent)]
              ${downloaded ? "text-[var(--accent)] border-[var(--accent)]" : ""}
            `}
          >
            <FaFileDownload size={16} />
            {downloaded ? "Downloaded!" : "Download PDF"}
          </button>
        </div>
      </div>
    </div>
  );
}
