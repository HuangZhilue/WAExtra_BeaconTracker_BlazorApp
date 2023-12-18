import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "beacontrack-library",
      // fileName: (format) => `beacontrack-library.${format}.js`,
      formats: ["es"],
    },

    outDir: "../../wwwroot/beacontrack-library",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
