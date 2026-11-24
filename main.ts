// Funniest Time Machine Warning Label — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the entry line to
// stdout and writes the exact same bytes to /output/entry.txt, the path
// the kit's gate scorer reads. Deterministic: no network, no randomness,
// no reads outside this repository (the line is embedded below).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Never shake hands with yourself. The warranty covers one of you, and it picked the other one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
// Normalize: read back what was written and drop a single trailing
// newline if one crept in, so the scored bytes are exactly LINE.
const written = readFileSync("/output/entry.txt", "utf8");
const normalized = written.endsWith("\n") ? written.slice(0, -1) : written;
if (normalized !== LINE) throw new Error("entry.txt does not match LINE");
writeFileSync("/output/entry.txt", normalized, "utf8");
process.stdout.write(normalized);
