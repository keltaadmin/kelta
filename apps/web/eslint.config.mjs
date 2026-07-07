import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    // Next.js
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Dependencies
    "node_modules/**",
    ".ignored_node_modules/**",

    // Build caches
    ".turbo/**",
    "dist/**",
    "coverage/**",

    // Generated files
    "*.tsbuildinfo",
  ]),
]);
