import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/main.wc.tsx",
      name: "FptHeader",
      formats: ["umd"],
      fileName: () => "fpt-header.js",
    },
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
});
