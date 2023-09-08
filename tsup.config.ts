import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  target: "esnext",
  clean: true,
  dts: true,
  splitting: true,
  cjsInterop: true,
  platform: "neutral",
})
