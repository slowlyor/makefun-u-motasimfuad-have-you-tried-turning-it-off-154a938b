import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line reply from a hopeless tech support agent
// to a desperate customer. Deterministic: no randomness, no network,
// no current time. Writes exactly one line, no trailing newline.
const LINE =
  "Good news: your computer isn't broken, it's just emotionally overwhelmed — I'm prescribing it a nap, and you a biscuit, while I quietly Google the fix.";

if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
