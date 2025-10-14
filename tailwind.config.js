// ✅ tailwind.config.js
export default {
  darkMode: "class",
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Space Grotesk', 'sans-serif'],
      mono: ['Fira Code', 'monospace'], // for typed words
    }
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": {
          "--brand-300": "#93c5fd",
          "--brand-400": "#60a5fa",
          "--brand-500": "#3b82f6",
        },
      })
    },
  ],
};
