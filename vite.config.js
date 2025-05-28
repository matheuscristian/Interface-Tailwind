import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "public",
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: "./src/index.html",
    },
  },
  server: {
    open: true,
  },
});
