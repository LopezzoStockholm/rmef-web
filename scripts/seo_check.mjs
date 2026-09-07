// Grind: listar titlar och beskrivningar som klipps i sokresultatet.
// Korrs efter bygge. Skriver ut avvikelser, blockerar inte deployen.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const TITLE_MAX = 62;
const DESC_MIN = 70;
const DESC_MAX = 165;

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (e === "index.html") acc.push(p);
  }
  return acc;
}

const files = walk("dist");
const long = [];
const desc = [];
const seenTitle = new Map();
const seenDesc = new Map();

for (const f of files) {
  const h = readFileSync(f, "utf8");
  const url = "/" + f.replace(/^dist\/?/, "").replace(/index\.html$/, "");
  const t = (h.match(/<title>([\s\S]*?)<\/title>/) || [, ""])[1].trim();
  const d = (h.match(/<meta name="description" content="([\s\S]*?)"/) || [, ""])[1].trim();
  if (t.length > TITLE_MAX) long.push([t.length, url, t]);
  if (d.length > DESC_MAX || d.length < DESC_MIN) desc.push([d.length, url]);
  seenTitle.set(t, [...(seenTitle.get(t) || []), url]);
  seenDesc.set(d, [...(seenDesc.get(d) || []), url]);
}

const dupT = [...seenTitle.entries()].filter(([, v]) => v.length > 1);
const dupD = [...seenDesc.entries()].filter(([, v]) => v.length > 1);

console.log(`SEO-check: ${files.length} sidor`);
console.log(`  titlar over ${TITLE_MAX} tecken: ${long.length}`);
long.sort((a, b) => b[0] - a[0]).slice(0, 15).forEach(([n, u]) => console.log(`    ${n}  ${u}`));
console.log(`  beskrivningar utanfor ${DESC_MIN}-${DESC_MAX}: ${desc.length}`);
desc.sort((a, b) => b[0] - a[0]).slice(0, 15).forEach(([n, u]) => console.log(`    ${n}  ${u}`));
console.log(`  dubblerade titlar: ${dupT.length}, dubblerade beskrivningar: ${dupD.length}`);
