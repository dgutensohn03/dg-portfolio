import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const actions = [
    { icon: <Github size={20} strokeWidth={1.6} />, label: "GitHub", action: () => window.open("https://github.com/dgutensohn03/", "_blank") },
    { icon: <Linkedin size={20} strokeWidth={1.6} />, label: "LinkedIn", action: () => window.open("https://www.linkedin.com/in/daniel-gutensohn-a2860a71", "_blank") },
    { icon: <Mail size={20} strokeWidth={1.6} />, label: "Email", action: () => (window.location.href = "mailto:dgutensohn@icloud.com") },
    { icon: <FileText size={20} strokeWidth={1.6} />, label: "Resume", action: () => setIsResumeOpen(true) },
  ];

  return (
    <footer className="w-full pb-6 pt-2 flex flex-col items-center text-center relative">
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <div className="flex gap-5 mb-1">
        {actions.map(({ icon, label, action }, i) => (
          <button
            key={i}
            onClick={action}
            className="relative group text-[var(--fg)]/70 hover:text-[var(--accent)] 
                       transition-colors duration-200 cursor-pointer p-2"
          >
            {/* ✅ Tooltip ABOVE with glass & smooth slide-down */}
            <span className="ui-tooltip ui-tooltip--down left-1/2 -translate-x-1/2 bottom-full mb-1">
              {label}
            </span>
            {icon}
          </button>
        ))}
      </div>

      <p className="text-[10px] text-[var(--muted)] opacity-50 mt-1 px-8">
      *Demo links open in a secure external window and are provided strictly for demonstration purposes. All content remains the property of the respective clients.
      </p>
    </footer>
  );
}
