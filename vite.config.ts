import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// vite.config.ts
export default defineConfig({
  base: '/dg-portfolio/', // ✅ must match your repo name EXACTLY
  plugins: [react(), tailwindcss()]
});
