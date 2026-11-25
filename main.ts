import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Roast: The Gadget You Use Every Day
// A single original line roasting the phone battery's daily drama.
const ENTRY =
  "My phone hits 20% by noon, then survives four hours on 1% — it's not a dying battery, it's gaslighting me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
