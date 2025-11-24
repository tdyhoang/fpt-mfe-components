import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "FPTHeader",
      fileName: () => "fpt-header.js",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-dom/client"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-dom/client": "ReactDOM",
        },
      },
    },
    emptyOutDir: true,
  },
  define: {
    "process.env": { NODE_ENV: '"production"' },
  },
});
