// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
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
