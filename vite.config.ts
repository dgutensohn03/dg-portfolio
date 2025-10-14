// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/dg-portfolio/", // ✅ GitHub Pages expects this to match the repo name exactly!
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: "./index.html", // ✅ Required for proper asset linking
    },
  },
});
