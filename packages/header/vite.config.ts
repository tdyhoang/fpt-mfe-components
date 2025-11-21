import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "FPTHeader",
      fileName: "fpt-header",
      formats: ["umd"],
    },
    rollupOptions: {
      external: [],
      output: {
        entryFileNames: "fpt-header.js",
      },
    },
  },
  define: {
    "process.env": {},
  },
});
