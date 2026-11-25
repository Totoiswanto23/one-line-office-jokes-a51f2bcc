// One-Line Office Jokes — make.fun bounty
// Writes a single one-line office joke to /output/entry.txt.
// The joke turns on a real office detail — the shared fridge and its
// sacred "DO NOT EAT" lunch — and lands the laugh in the last words:
// that lunch is now the most respected document in the office.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// One line, no setup to explain, fresh wording. The punchline is the
// final beat: a labelled lunch outranks every memo in the building.
const JOKE =
  "The shared fridge has a lunch labelled 'DO NOT EAT', and it is now the most respected document in the entire office.";

// The gate only accepts 1 to 199 characters of UTF-8 text on one line.
if (JOKE.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}
if (JOKE.length < 1 || JOKE.length > 199) {
  console.error(`entry must be 1-199 characters, got ${JOKE.length}`);
  process.exit(1);
}
if (JOKE.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so its byte
// count is the joke's character count and nothing else.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(JOKE);
