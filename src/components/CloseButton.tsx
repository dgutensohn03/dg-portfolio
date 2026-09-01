import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
  isDark?: boolean;
}

export default function CloseButton({ onClick, isDark }: CloseButtonProps) {
    console.log("isDark in CloseButton:", isDark);
  const hoverBg = isDark ? "hover:bg-white/25" : "hover:bg-black/20";

  return (
    <button
      onClick={onClick}
      title="Close modal"
      className={`
        absolute top-4 right-4 z-30
        flex items-center justify-center
        w-10 h-10 rounded-full
        transition-colors duration-200
        cursor-pointer
        bg-transparent
        ${hoverBg}
      `}
    >
      <X size={24} className={isDark ? "text-gray-100" : "text-gray-900"} />
    </button>
  );
}
