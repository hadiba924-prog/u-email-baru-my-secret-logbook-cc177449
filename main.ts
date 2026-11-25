// My Secret Logbook — entry program.
// Writes one diary line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Day 112. He told me to keep it short. Then he sent a seven-minute voice note about keeping things short.";

// The gate only accepts 1 to 200 characters, so fail loudly instead of
// submitting an invalid line.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${[...ENTRY].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
