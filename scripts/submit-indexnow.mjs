// Submit all URLs from the built sitemap to IndexNow (Bing, Yandex, Naver, Seznam).
// Inget konto krävs — bara nyckelfil på /{key}.txt. Läser URL:er från dist/sitemap-0.xml
// så listan alltid matchar senaste bygget (kräver att `astro build` körts först).
import { readFileSync, existsSync } from 'node:fs';

const KEY = readFileSync('.indexnow-key', 'utf-8').trim();
const HOST = 'rmef.se';

function urlsFromSitemap() {
  const path = 'dist/sitemap-0.xml';
  if (!existsSync(path)) {
    throw new Error(`${path} saknas — kör 'npm run build' först`);
  }
  const xml = readFileSync(path, 'utf-8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

const urls = urlsFromSitemap();
console.log(`Submitting ${urls.length} URLs from sitemap to IndexNow...`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
};

for (const endpoint of [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
]) {
  try {
    const r = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    console.log(`${endpoint}: ${r.status}`);
  } catch (e) {
    console.log(`${endpoint}: ERROR ${e.message}`);
  }
}
