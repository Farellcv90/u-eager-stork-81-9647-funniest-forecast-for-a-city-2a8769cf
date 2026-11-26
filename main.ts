// Funniest Forecast for a City That Isn't
// Writes one funny one-line weather forecast for the invented city of
// Zorbania to ./output/entry.txt (no trailing newline).
// Node stdlib only; no network, no secrets, no input files.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The competition gate allows 1 to 120 characters; keep the limit in one
// named constant so the check and the rule can never drift apart.
const MAX_CHARS = 120;

const ENTRY =
  "Zorbania: 18 degrees, overcast, with a 70% chance the weather improves just after you cancel your plans.";

// The competition gate: entry.txt must be UTF-8 text of 1 to 120 characters,
// a single line, not only white space.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-${MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir = join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
