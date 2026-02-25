export const modalTheme = {
  light: {
    overlay: "bg-gray-300/30 backdrop-blur-sm",
    background: "bg-white text-gray-900",
    headerBg: "bg-gray-50 border-gray-200",
    sectionBg: "bg-white border-gray-200 text-gray-900",
    keyTakeaway: "bg-orange-50 border-orange-500 text-gray-900",
    hover: "hover:bg-orange-500 hover:text-white",
    buttonBorder: "border-orange-500",
    spinner: "text-orange-500",
  },
  dark: {
    overlay: "bg-white/30 backdrop-blur-sm",
    background: "bg-gray-900 text-gray-100",
    headerBg: "bg-gray-900 border-gray-700",
    sectionBg: "bg-gray-800 border-gray-700 text-gray-100",
    keyTakeaway: "bg-orange-800/40 border-orange-400 text-gray-100", // brighter text
    hover: "hover:bg-orange-500 hover:text-white",
    buttonBorder: "border-orange-500",
    spinner: "text-orange-400",
    sectionIcon: "text-orange-300/80", // slightly muted, smooth accent
  },
};
