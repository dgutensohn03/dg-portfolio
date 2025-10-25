// ✅ tailwind.config.js
export default {
  darkMode: "class",
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Space Grotesk", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": {
          "--brand-300": "#fdba74",
          "--brand-400": "#fb923c",
          "--brand-500": "#ea580c",
        },
        "html.dark": {
          "--brand-300": "#fb923c",
          "--brand-400": "#f97316",
          "--brand-500": "#ea580c",
        },
      });
    },
  ],
};
