import { FaTimes, FaDownload, FaSpinner } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_PREVIEW_URL =
  "https://docs.google.com/document/d/1pNjtAP6pkoGphC8RW4Vq3Z41L-wc9hr3PGGzFL8p4J0/preview";

const RESUME_DOWNLOAD_URL =
  "https://docs.google.com/document/d/1pNjtAP6pkoGphC8RW4Vq3Z41L-wc9hr3PGGzFL8p4J0/export?format=pdf";

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[999]"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative glass rounded-xl shadow-2xl w-[90vw] max-w-4xl h-[80vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-[var(--fg)]/70 hover:text-[var(--accent)] transition-colors"
            >
              <FaTimes size={18} />
            </button>

            {/* Spinner Overlay */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--glass)]/40 backdrop-blur-sm z-50">
                <FaSpinner size={20} className="animate-spin text-[var(--accent)]" />
              </div>
            )}

            {/* Embedded Resume */}
            <iframe
              src={RESUME_PREVIEW_URL}
              className="w-full h-full border-none rounded-lg"
              allow="autoplay; fullscreen"
              onLoad={() => setLoading(false)}
            />

            {/* Download Button - styled like project card CTA */}
            <a
              href={RESUME_DOWNLOAD_URL}
              download
              className="absolute bottom-4 right-4 px-4 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-lg shadow-md flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_8px_var(--accent)] transition-all"
            >
              <FaDownload size={14} />
              Download PDF
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
