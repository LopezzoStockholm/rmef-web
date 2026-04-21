import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('public', { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A0A0A"/>
      <stop offset="0.6" stop-color="#1C1C1C"/>
      <stop offset="1" stop-color="#2A1012"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Stadssilhuett -->
  <g fill="#B5121B" opacity="0.18" transform="translate(0, 380)">
    <rect x="0"   y="0"   width="60"  height="250"/>
    <rect x="70"  y="-40" width="80"  height="290"/>
    <rect x="160" y="-80" width="90"  height="330"/>
    <rect x="260" y="-20" width="70"  height="270"/>
    <rect x="340" y="-120" width="110" height="370"/>
    <rect x="460" y="-60" width="80"  height="310"/>
    <rect x="550" y="-30" width="70"  height="280"/>
    <rect x="630" y="-100" width="100" height="350"/>
    <rect x="740" y="10"  width="60"  height="240"/>
    <rect x="810" y="-50" width="90"  height="300"/>
    <rect x="910" y="-110" width="100" height="360"/>
    <rect x="1020" y="-20" width="70"  height="270"/>
    <rect x="1100" y="-60" width="100" height="310"/>
  </g>

  <!-- Top-badge -->
  <rect x="80" y="80" width="360" height="44" rx="22" fill="none" stroke="#B5121B" stroke-width="1.5" opacity="0.6"/>
  <circle cx="108" cy="102" r="4" fill="#B5121B"/>
  <text x="124" y="108" font-family="Inter, system-ui, sans-serif" font-size="16" fill="#EDE8DE" letter-spacing="2" font-weight="500">TOTALENTREPRENAD · STOCKHOLM</text>

  <!-- Huvudrubrik -->
  <text x="80" y="260" font-family="Manrope, Inter, sans-serif" font-size="88" font-weight="700" fill="#F7F4EE" letter-spacing="-2">Bygger Stockholm</text>
  <text x="80" y="356" font-family="Manrope, Inter, sans-serif" font-size="88" font-weight="700" fill="#B5121B" letter-spacing="-2">från grund till fasad.</text>

  <!-- Underrubrik -->
  <text x="80" y="428" font-family="Inter, system-ui, sans-serif" font-size="26" fill="#EDE8DE" opacity="0.75">Mark · Bygg · El · Fasad. En kontakt hela vägen.</text>

  <!-- Footer -->
  <line x1="80" y1="520" x2="1120" y2="520" stroke="#F7F4EE" stroke-width="1" opacity="0.15"/>
  <text x="80" y="565" font-family="Manrope, Inter, sans-serif" font-size="24" fill="#F7F4EE" font-weight="700">RM Entreprenad &amp; Fasad AB</text>
  <text x="80" y="594" font-family="Inter, system-ui, sans-serif" font-size="16" fill="#EDE8DE" opacity="0.55">rmef.se · 08-12 87 57 00 · info@rmef.se</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ quality: 90, compressionLevel: 8 })
  .toFile('public/og-default.png');

// Duplicate as .jpg for fallback compatibility
await sharp(Buffer.from(svg))
  .jpeg({ quality: 88, progressive: true })
  .toFile('public/og-default.jpg');

console.log('OG-image created: public/og-default.png + .jpg (1200x630)');
