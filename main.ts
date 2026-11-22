import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text =
  "A smooth stone rests in your palm, still warm from the day. " +
  "You turn it once, and let it turn you back. " +
  "The light leaves the room. The stone stays. " +
  "Nothing else is asked of you.";

const rootDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(rootDir, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
