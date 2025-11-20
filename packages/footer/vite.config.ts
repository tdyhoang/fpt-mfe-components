import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "FPTFooter",
      fileName: "fpt-footer",
      formats: ["umd"],
    },
    rollupOptions: {
      external: [],
      output: {
        entryFileNames: "fpt-footer.js",
      },
    },
  },
  define: {
    "process.env": {},
  },
});
