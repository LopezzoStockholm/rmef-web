export const SITE = {
  name: "RM Entreprenad & Fasad AB",
  shortName: "RM Entreprenad & Fasad",
  domain: "rmef.se",
  url: "https://rmef.se",
  defaultTitle: "RM Entreprenad & Fasad AB — Totalentreprenader i Stockholm",
  defaultDescription:
    "RM Entreprenad & Fasad AB levererar totalentreprenader inom mark, bygg, el och fasad i Stockholm. Hög kvalitet, leverantörsoberoende, One Point of Entry.",
  orgNumber: "559251-1462",
  phone: "+4687128757 00",
  phoneDisplay: "08-12 87 57 00",
  email: "info@rmef.se",
  whatsapp: "+46871287570",
  address: {
    street: "",
    postalCode: "",
    city: "Stockholm",
    region: "Stockholms län",
    country: "SE",
  },
  socials: {
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  founded: "2020",
  vd: "Daniel Lopez",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130499.6!2d17.9!3d59.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5f9f9f9f9f%3A0x0!2zU3RvY2tob2xt!5e0!3m2!1ssv!2sse!4v1700000000",
} as const;

export type ServiceKey = "mark" | "bygg" | "el" | "fasad";

export const SERVICES: Record<ServiceKey, {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  icon: string;
}> = {
  mark: {
    slug: "mark-och-anlaggning",
    title: "Mark & anläggning",
    short: "Schakt, grundläggning, spontning, skyddsrum, ledningsarbeten.",
    long: "Vi utför kompletta markentreprenader från schakt och sprängning till färdig grundläggning. Stor erfarenhet av komplexa projekt med pressad logistik — flerbostadshus, sjukhus och datahallar.",
    bullets: [
      "Schakt, sprängning och spontning",
      "Grundläggning och platta på mark",
      "Skyddsrum och platsgjutna källarväggar",
      "Ledningsarbeten och finplanering",
      "Isodrän, tätskikt och återfyllning",
    ],
    icon: "mark",
  },
  bygg: {
    slug: "bygg",
    title: "Bygg & totalentreprenad",
    short: "Nyproduktion, kontorsanpassning, renovering, restaurering.",
    long: "Vi driver totalentreprenader från första skiss till inflyttningsklar lokal. Spetskompetens inom kontorsanpassning med pågående verksamhet, samt restaurering av K-märkta byggnader.",
    bullets: [
      "Totalentreprenader (ABT) och utförandeentreprenader (AB)",
      "Kontorsanpassningar med kvarvarande hyresgäst",
      "Nyproduktion flerbostadshus",
      "Restaurering av kulturbyggnader",
      "Projektering in-house och via konsultnätverk",
    ],
    icon: "bygg",
  },
  el: {
    slug: "el",
    title: "El",
    short: "Elprojekt, installation, styr och integration.",
    long: "Elinstallationer som en integrerad del av våra entreprenader — eller som separata elprojekt. Erfarenhet från kontor, vård, industri och datahallar med höga krav på drift.",
    bullets: [
      "Elinstallation i total­entreprenad",
      "Separata elprojekt",
      "Styr och integration",
      "Datahallar och lokaler med höga krav",
    ],
    icon: "el",
  },
  fasad: {
    slug: "fasad",
    title: "Fasad",
    short: "Fasadrenovering, puts, tilläggsisolering.",
    long: "Kompletta fasadlösningar för bostadsrätts­föreningar, fastighets­ägare och kommersiella fastigheter. Vi hanterar ställning, puts, målning och tilläggsisolering.",
    bullets: [
      "Fasadrenovering och omputsning",
      "Tilläggsisolering",
      "Ställning och väderskydd",
      "Besiktning och statusbedömning",
    ],
    icon: "fasad",
  },
};

export const PROJECTS = [
  {
    slug: "kvarteret-persikan",
    title: "Kvarteret Persikan",
    client: "Stockholmshem AB",
    volume: "75 Mkr",
    period: "2023–2025",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Grundläggning för 152 lägenheter, ICA-butik och förskola på Södermalm. Schakt, bottenplatta, skyddsrum, platsgjutna källarväggar, ledningsarbeten.",
    challenges:
      "Omfattande projekt med pressad tidplan och små APD-ytor. Gjutplaner hölls trots ovanligt långa kallperioder.",
    featured: true,
  },
  {
    slug: "axfood-huvudkontor",
    title: "Axfood huvudkontor",
    client: "Axfood AB",
    volume: "7–25 Mkr / etapp",
    period: "2018–2024",
    category: "Bygg",
    type: "Totalentreprenad",
    summary:
      "Totalombyggnad av flera våningsplan — kontorsanpassningar, nya personalkök, wc-grupper, omklädningsrum. Byggarbetena utfördes med pågående verksamhet i direkt anslutning.",
    challenges: "Logistik med nytt material och avfall vid kvarvarande hyresgäst.",
    featured: true,
  },
  {
    slug: "vindarnas-tempel",
    title: "Vindarnas tempel",
    client: "Lidingö Stad",
    volume: "3 Mkr",
    period: "2022–2023",
    category: "Bygg",
    type: "Restaurering",
    summary:
      "K-märkt byggnad på Lidingöbron. Lyft bort, komplett restaurering och återmontering i ursprungligt läge.",
    challenges: "Precision i lyft och återställning. Antikvariska krav genom hela processen.",
    featured: true,
  },
  {
    slug: "t11-katarinahuset",
    title: "T11 Katarinahuset & Mosebackebron",
    client: "Atrium Ljungberg",
    volume: "25 Mkr",
    period: "Pågående",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Grundförstärkning, sprängning, pålning, betongarbeten och ledningsarbeten.",
    challenges: "Central stadsmiljö med högt kulturhistoriskt värde.",
    featured: false,
  },
  {
    slug: "malongen",
    title: "Malongen",
    client: "Habitek Bygg AB",
    volume: "16 Mkr",
    period: "2023–pågående",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Grundläggning för flerbostadshus — sprängning, spontning, platta på mark.",
    challenges: "Trångt arbetsområde.",
    featured: false,
  },
  {
    slug: "kaptensstugan",
    title: "Kaptensstugan",
    client: "Lidingö Stad",
    volume: "8 Mkr",
    period: "2022–2023",
    category: "Bygg",
    type: "Restaurering",
    summary: "Restaurering av gammal byggnad samt lada på Hustegaholm, Lidingö.",
    challenges: "Antikvariska krav, känslig stomme.",
    featured: false,
  },
  {
    slug: "danderyds-sjukhus",
    title: "Danderyds sjukhus — flera uppdrag",
    client: "Locum",
    volume: "7 Mkr + löpande",
    period: "2022–pågående",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Kallvattenservis, sjökyla, godsmottagning. Arbete i drift­känslig sjukhusmiljö med höga krav på planering.",
    challenges: "Ingen driftstörning tillåten.",
    featured: false,
  },
  {
    slug: "noshorningen",
    title: "Noshörningen",
    client: "Skanska",
    volume: "8 Mkr",
    period: "2022",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Schakt och grundläggning för skola, ledningsarbeten och finplanering.",
    challenges: "",
    featured: false,
  },
];

export const CLIENTS = [
  "Stockholmshem",
  "Atrium Ljungberg",
  "Skanska",
  "Axfood",
  "Locum",
  "Lidingö Stad",
  "Habitek",
  "Sveab",
  "Octapharma",
];
