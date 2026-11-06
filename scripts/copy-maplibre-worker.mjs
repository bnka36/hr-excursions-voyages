// Copies maplibre-gl's web worker script into /public so it can be loaded
// from a plain static URL (see components/map/MoroccoMap.tsx) instead of
// relying on Turbopack resolving maplibre's `new URL(..., import.meta.url)`
// asset reference, which it currently doesn't.
import { existsSync, copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "node_modules", "maplibre-gl", "dist", "maplibre-gl-worker.mjs");
const dest = path.join(__dirname, "..", "public", "maplibre-gl-worker.mjs");

if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log("[postinstall] Copied maplibre-gl worker to public/maplibre-gl-worker.mjs");
} else {
  console.warn("[postinstall] maplibre-gl worker script not found at", src);
}
