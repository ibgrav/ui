import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ include: "src" })],
  build: {
    lib: {
      entry: ["src/index.ts", "src/jsx-runtime.ts"],
      fileName: (format, entryName) => `${entryName}.${format}.js`
    }
  }
});
