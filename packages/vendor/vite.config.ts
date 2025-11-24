import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "FPTVendor",
      fileName: () => "vendor.js",
      formats: ["umd"],
    },
    emptyOutDir: true,
  },
  define: {
    "process.env": { NODE_ENV: '"production"' },
  },
});
