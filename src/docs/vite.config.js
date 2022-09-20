import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: "", // produce relative paths in html
  build: {
    outDir: '../../docs',
    emptyOutDir: false,
    target: "esnext",
    polyfillDynamicImport: false,
    // constant asset names https://github.com/vitejs/vite/issues/378
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
