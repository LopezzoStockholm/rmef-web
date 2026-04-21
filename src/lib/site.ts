export const SITE = {
  name: "RM Entreprenad & Fasad AB",
  shortName: "RM Entreprenad & Fasad",
  domain: "rmef.se",
  url: "https://rmef.se",
  defaultTitle: "RM Entreprenad & Fasad AB — Totalentreprenader i Stockholm",
  defaultDescription:
    "RM Entreprenad & Fasad AB levererar totalentreprenader inom mark, bygg, el och fasad i Stockholm. Hög kvalitet, leverantörsoberoende, One Point of Entry.",
  orgNumber: "559251-1462",
  phone: "+468128757 00",
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

export interface Project {
  slug: string;
  title: string;
  client: string;
  volume: string;
  period: string;
  category: "Mark & anläggning" | "Bygg" | "El" | "Fasad";
  type: string;
  summary: string;
  challenges?: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "kvarteret-persikan",
    title: "Kvarteret Persikan",
    client: "Stockholmshem AB",
    volume: "75 Mkr",
    period: "2023–2025",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Grundläggning för 152 lägenheter, ICA-butik och förskola på Södermalm. Schakt, bottenplatta, skyddsrum, platsgjutna källarväggar, ledningsarbeten, isodrän och tätskikt.",
    challenges:
      "Omfattande projekt med pressad tidplan och små APD-ytor, vilket medförde svårarbetad logistik. Gjutplaner hölls trots ovanligt långa kallperioder.",
    image: "/projekt/mark_image2.webp",
    imageAlt: "Grundläggningsarbete på Kvarteret Persikan, Stockholmshem",
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
      "Totalombyggnad av flera våningsplan — 3 000 kvm kontorsanpassningar, nya personalkök, wc-grupper, omklädningsrum. Samtliga discipliner: bygg, VS, vent/styr, el, målning.",
    challenges:
      "Alla arbeten utfördes med kvarvarande hyresgäster i direkt anslutning till arbetsområdet. Krävde minutiös logistik kring nytt material och avfall.",
    image: "/projekt/bygg_image2.webp",
    imageAlt: "Axfoods huvudkontor efter kontorsombyggnad",
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
      "K-märkt byggnad på Lidingöbron. Lyft bort från befintligt läge, komplett restaurering och återmontering i ursprungligt läge.",
    challenges:
      "Precision i lyft och återställning. Antikvariska krav genom hela processen.",
    image: "/projekt/bygg_image5.webp",
    imageAlt: "Vindarnas tempel under restaurering på Lidingö",
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
    summary:
      "Grundförstärkning, sprängning, pålning, betongarbeten och ledningsarbeten i central stadsmiljö med högt kulturhistoriskt värde.",
    challenges: "Arbete i känslig kulturmiljö med stor publikt flöde runt arbetsområdet.",
    image: "/projekt/portfolj_image6.webp",
    imageAlt: "T11 Katarinahuset och Mosebackebron, betongarbeten",
    featured: true,
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
      "Grundläggning för flerbostadshus — sprängning, spontning, platta på mark, bottenplatta och ledningsarbeten.",
    challenges: "Trångt arbetsområde mitt i stadsmiljö.",
    image: "/projekt/mark_image3.webp",
    imageAlt: "Grundläggning Malongen, Habitek Bygg",
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
    summary:
      "Restaurering av gammal byggnad samt lada på Hustegaholm, Lidingö. Antikvarisk hänsyn till känslig stomme.",
    challenges: "Stora antikvariska krav, originalmaterial återanvänt där möjligt.",
    image: "/projekt/bygg_image3.webp",
    imageAlt: "Kaptensstugan på Hustegaholm under restaurering",
    featured: false,
  },
  {
    slug: "danderyds-sjukhus",
    title: "Danderyds sjukhus — kallvatten, sjökyla, godsmottagning",
    client: "Locum",
    volume: "7 Mkr + löpande",
    period: "2022–pågående",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Flera uppdrag: kallvattenservis, sjökyla och godsmottagning. Arbete i driftkänslig sjukhusmiljö med höga krav på planering.",
    challenges: "Ingen driftstörning tillåten — dygnet-runt-verksamhet.",
    image: "/projekt/mark_image10.webp",
    imageAlt: "Ledningsarbete vid Danderyds sjukhus",
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
    summary:
      "Schakt och grundläggning för skola, ledningsarbeten och finplanering i etapp med Skanska som generalentreprenör.",
    challenges: "Koordinering mot Skanskas parallella produktion.",
    image: "/projekt/mark_image8.webp",
    imageAlt: "Grundläggning Noshörningen — skolbyggnad",
    featured: false,
  },
  {
    slug: "norrtalje-sjukhus",
    title: "Norrtälje sjukhus — sprinklercentral",
    client: "Norrtälje sjukhus",
    volume: "Ej publikt",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Projektering och byggnation av sprinklercentral för sjukhuset, inkl. anslutningar, dränering och finplanering.",
    image: "/projekt/mark_image12.webp",
    imageAlt: "Norrtälje sjukhus sprinklercentral",
    featured: false,
  },
  {
    slug: "raul-wallenberg-bagartorp",
    title: "Raul Wallenbergskolan Bagartorp",
    client: "Raul Wallenberg Academy",
    volume: "Ej publikt",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Mark- och anläggningsarbeten kring skolbyggnad i Bagartorp.",
    image: "/projekt/mark_image14.webp",
    imageAlt: "Raul Wallenbergskolan, markarbeten",
    featured: false,
  },
  {
    slug: "engelska-skolan-sigtuna",
    title: "Engelska skolan Sigtuna",
    client: "Internationella Engelska skolan",
    volume: "Ej publikt",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Markanläggning och ledningsarbeten för skola i Sigtuna.",
    image: "/projekt/mark_image16.webp",
    imageAlt: "Markanläggning Engelska skolan Sigtuna",
    featured: false,
  },
  {
    slug: "octapharma-lindhagen",
    title: "Octapharma AB Lindhagen",
    client: "Octapharma AB",
    volume: "Ej publikt",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Markanläggning vid Octapharmas anläggning på Lindhagen, hög hygieniska krav på utförande.",
    image: "/projekt/mark_image20.webp",
    imageAlt: "Markanläggning Octapharma Lindhagen",
    featured: false,
  },
  {
    slug: "tennisakademien",
    title: "Good to Great Tennisakademien",
    client: "Good to Great Tennis Academy",
    volume: "Ej publikt",
    period: "2022",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Markanläggning och finplanering vid tennisakademi.",
    image: "/projekt/mark_image11.webp",
    imageAlt: "Markarbete Good to Great Tennisakademien",
    featured: false,
  },
  {
    slug: "ledningsomlaggning-knivsta",
    title: "Ledningsomläggning Knivsta",
    client: "Knivsta kommun",
    volume: "Ej publikt",
    period: "2022",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Omfattande ledningsomläggning för kommunal infrastruktur i Knivsta.",
    image: "/projekt/mark_image18.webp",
    imageAlt: "Ledningsomläggning i Knivsta",
    featured: false,
  },
  {
    slug: "patriam-stocksund",
    title: "Patriam Stocksund",
    client: "Patriam",
    volume: "Ej publikt",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Grundläggning och markanläggning för bostadsprojekt i Stocksund.",
    image: "/projekt/mark_image22.webp",
    imageAlt: "Patriam Stocksund, grundläggning",
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
  "Patriam",
  "Octapharma",
  "Sigtuna kommun",
  "Knivsta kommun",
];
