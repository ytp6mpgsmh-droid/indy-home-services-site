// Validates every JSON file in /content against its schema: `npm run validate:content`
import fs from "node:fs";
import path from "node:path";
import { Company, Location } from "../src/lib/content/schema.ts";

const checks = { companies: Company, locations: Location } as const;
let failed = false;

for (const [dir, schema] of Object.entries(checks)) {
  const full = path.join("content", dir);
  for (const file of fs.readdirSync(full).filter((f) => f.endsWith(".json"))) {
    const result = schema.safeParse(JSON.parse(fs.readFileSync(path.join(full, file), "utf8")));
    if (!result.success) {
      failed = true;
      console.error(`✗ content/${dir}/${file}\n${result.error.message}`);
    } else if (`${result.data.slug}.json` !== file) {
      failed = true;
      console.error(`✗ content/${dir}/${file}: slug must match file name`);
    }
  }
}

if (failed) process.exit(1);
console.log("✓ content valid");
