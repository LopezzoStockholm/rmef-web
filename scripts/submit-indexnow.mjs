// Submit all sitemap URLs to IndexNow (Bing, Yandex, Naver, Seznam).
// Inget konto krävs — bara nyckelfil på /{key}.txt.
import { readFileSync } from 'node:fs';

const KEY = readFileSync('.indexnow-key', 'utf-8').trim();
const HOST = 'rmef.se';

const urls = [
  'https://rmef.se/',
  'https://rmef.se/tjanster/',
  'https://rmef.se/tjanster/mark-och-anlaggning/',
  'https://rmef.se/tjanster/bygg/',
  'https://rmef.se/tjanster/el/',
  'https://rmef.se/tjanster/fasad/',
  'https://rmef.se/projekt/',
  'https://rmef.se/projekt/kvarteret-persikan/',
  'https://rmef.se/projekt/axfood-huvudkontor/',
  'https://rmef.se/projekt/vindarnas-tempel/',
  'https://rmef.se/projekt/t11-katarinahuset/',
  'https://rmef.se/projekt/malongen/',
  'https://rmef.se/projekt/kaptensstugan/',
  'https://rmef.se/projekt/danderyds-sjukhus/',
  'https://rmef.se/projekt/noshorningen/',
  'https://rmef.se/projekt/norrtalje-sjukhus/',
  'https://rmef.se/projekt/raul-wallenberg-bagartorp/',
  'https://rmef.se/projekt/engelska-skolan-sigtuna/',
  'https://rmef.se/projekt/octapharma-lindhagen/',
  'https://rmef.se/projekt/tennisakademien/',
  'https://rmef.se/projekt/ledningsomlaggning-knivsta/',
  'https://rmef.se/projekt/patriam-stocksund/',
  'https://rmef.se/om-oss/',
  'https://rmef.se/kontakt/',
];

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
