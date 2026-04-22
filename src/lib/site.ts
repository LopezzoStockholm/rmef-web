export const SITE = {
  name: "RM Entreprenad & Fasad AB",
  shortName: "RM Entreprenad & Fasad",
  domain: "rmef.se",
  url: "https://rmef.se",
  defaultTitle: "RM Entreprenad & Fasad AB, Totalentreprenader i Stockholm",
  defaultDescription:
    "RM Entreprenad & Fasad AB är ett Stockholmsbaserat entreprenadbolag med erfarenhet från 75 Mkr-grundläggningar åt Stockholmshem till K-märkta restaureringar åt Lidingö Stad. Totalentreprenader inom mark, bygg, el och fasad.",
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
  fskatt: true,
  msReg: true,
  insurance: "Trygg Hansa",
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
    short: "Schakt, grundläggning, spontning, skyddsrum och ledningsarbeten för professionella beställare.",
    long: "Kompletta markentreprenader från schakt och sprängning till färdig grundläggning. Spetskompetens inom komplex logistik, flerbostadshus i innerstaden, driftkänsliga sjukhusmiljöer och industri med höga hygieniska krav.",
    bullets: [
      "Schakt, sprängning och spontning",
      "Grundläggning, bottenplatta och platta på mark",
      "Skyddsrum och platsgjutna källarväggar",
      "Ledningsarbeten och finplanering",
      "Isodrän, tätskikt och återfyllning",
    ],
    icon: "mark",
  },
  bygg: {
    slug: "bygg",
    title: "Bygg & totalentreprenad",
    short: "Totalentreprenader från första skiss till inflyttningsklar lokal.",
    long: "Vi driver totalentreprenader (ABT 06) och utförandeentreprenader (AB 04) med en projektledare genom hela utförandet. Spetskompetens inom kontorsanpassning med pågående verksamhet, nyproduktion och restaurering av K-märkta byggnader.",
    bullets: [
      "Totalentreprenad ABT 06 och utförandeentreprenad AB 04",
      "Kontorsanpassning med kvarvarande hyresgäst",
      "Nyproduktion flerbostadshus",
      "Restaurering av kulturbyggnader",
      "Projektering internt och via konsultnätverk",
    ],
    icon: "bygg",
  },
  el: {
    slug: "el",
    title: "El",
    short: "Elinstallationer i totalentreprenad eller som separata elprojekt.",
    long: "Elinstallationer som en integrerad del av våra entreprenader, eller som separata elprojekt. Erfarenhet från kontor, vård, industri och datahallar med höga krav på drift och redundans.",
    bullets: [
      "Elinstallation i totalentreprenad",
      "Separata elprojekt",
      "Styr- och reglersystem",
      "Installationer i drift­miljöer (sjukhus, datahallar)",
    ],
    icon: "el",
  },
  fasad: {
    slug: "fasad",
    title: "Fasad",
    short: "Fasadrenovering, puts och tilläggsisolering för bostads­rättsföreningar och fastighetsägare.",
    long: "Kompletta fasadlösningar för bostadsrätts­föreningar, fastighets­ägare och kommersiella fastigheter. Vi hanterar besiktning, ställning, puts, målning och tilläggsisolering.",
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
  volume?: string;
  period: string;
  category: "Mark & anläggning" | "Bygg" | "El" | "Fasad";
  type: string;
  summary: string;
  challenges?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "rocmore-signalisten",
    title: "Rocmore / Signalisten — Solna",
    client: "Rocmore (strategisk partner) · Signalisten (Solna Stad)",
    volume: "40 Mkr/år",
    period: "Löpande avtal",
    category: "Mark & anläggning",
    type: "Ramavtal · strategiskt partnerskap",
    summary:
      "Långsiktigt ramavtal inom mark och anläggning i Solna. Vi är strategisk samarbetspartner till Rocmore och arbetar direkt mot Signalisten, Solna Stads allmännyttiga bostadsbolag. Uppdrag omfattar grundläggning, schakt, ledningsarbeten, finplanering och markanläggning kring nyproduktion och förvaltning av befintligt bestånd. Årlig projektvolym cirka 40 Mkr.",
    challenges:
      "Återkommande arbete i bebodd stadsmiljö med höga krav på samordning mot hyresgäster, trafik och logistik. Långsiktig relation kräver förutsägbar leverans, konsekvent KMA-arbete och dokumentation över tid.",
    image: "/projekt/mark_image6.webp",
    imageAlt: "Pågående markarbete i Solna med betongpump, betongbil och flerbostadshus i bakgrunden",
    featured: true,
  },
  {
    slug: "kvarteret-persikan",
    title: "Kvarteret Persikan",
    client: "Stockholmshem AB",
    volume: "75 Mkr",
    period: "2023–2025",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Grundläggning för 152 lägenheter, ICA-butik och förskola på Södermalm. Omfattar schakt, bottenplatta, skyddsrum, platsgjutna källarväggar, ledningsarbeten, isodrän och tätskikt.",
    challenges:
      "Pressad tidplan och begränsade APD-ytor i innerstadsmiljö. Gjutplaner hölls trots ovanligt långa kallperioder under två vintersäsonger.",
    image: "/projekt/foretag_2.webp",
    imageAlt: "Byggarbetsplats Kvarteret Persikan, Stockholmshem, betonggjutning med lyftkran",
    featured: true,
  },
  {
    slug: "axfood-huvudkontor",
    title: "Axfood huvudkontor",
    client: "Axfood AB",
    volume: "7–25 Mkr per etapp",
    period: "2018–2024",
    category: "Bygg",
    type: "Totalentreprenad",
    summary:
      "Total­ombyggnad av flera våningsplan omfattande 3 000 kvm kontorsanpassningar, nya personalkök, wc-grupper och omklädningsrum. Samtliga discipliner levererade i egen regi: bygg, VS, ventilation och styr, el samt målning.",
    challenges:
      "Samtliga arbeten utfördes med kvarvarande hyresgäster i direkt anslutning till arbetsområdet. Krävde minutiös logistik kring nytt material och avfall, inga driftstörningar accepterades.",
    image: "/projekt/foretag_4.webp",
    imageAlt: "Axfoods huvudkontor, nyinredda kontorsmoduler med glaspartitioner",
    featured: true,
  },
  {
    slug: "vindarnas-tempel",
    title: "Vindarnas tempel",
    client: "Lidingö Stad",
    volume: "3 Mkr",
    period: "2022–2023",
    category: "Bygg",
    type: "Totalentreprenad, restaurering",
    summary:
      "K-märkt byggnad på Lidingöbron. Byggnaden lyftes bort från ursprungsläget, genomgick komplett restaurering och återmonterades i ursprungligt läge med antikvarisk hänsyn.",
    challenges:
      "Precision i lyft och återställning. Löpande antikvariska krav och extern kontroll genom hela processen. Originalmaterial återanvändes där det var möjligt.",
    image: "/projekt/bygg_image4.webp",
    imageAlt: "Vindarnas tempel, paviljong lyfts med mobilkran från Lidingöbron",
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
    challenges: "Arbete i kulturhistoriskt känslig miljö vid Slussen med stor publik gångtrafik direkt intill arbetsområdet.",
    image: "/projekt/foretag_15.webp",
    imageAlt: "T11 Katarinahuset, betong- och armeringsarbeten",
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
      "Grundläggning för flerbostadshus, sprängning, spontning, platta på mark, bottenplatta och ledningsarbeten.",
    challenges: "Begränsat arbetsområde mitt i innerstadsmiljö, logistik kring transporter och upplag.",
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
    type: "Totalentreprenad, restaurering",
    summary:
      "Restaurering av gammal byggnad samt lada på Hustegaholm, Lidingö. Antikvarisk hänsyn till känslig stomme, originalmaterial återanvänt där möjligt.",
    challenges: "Omfattande antikvariska krav och kontroll genom hela processen.",
    image: "/projekt/bygg_image7.webp",
    imageAlt: "Kaptensstugan, rödmålad timmerstuga med tegeltak vid Hustegaholm",
    featured: false,
  },
  {
    slug: "danderyds-sjukhus",
    title: "Danderyds sjukhus, kallvatten, sjökyla, godsmottagning",
    client: "Locum AB",
    volume: "7 Mkr + löpande",
    period: "2022–pågående",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Tre uppdrag på sjukhuset: kallvattenservis, sjökyla och godsmottagning. Mark- och ledningsarbeten i direkt anslutning till dygnet-runt-verksamhet.",
    challenges: "Noll driftstörningar tillåtna. Arbete förlades i fönster koordinerat med sjukhusets driftorganisation.",
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
      "Schakt, grundläggning, ledningsarbeten och finplanering för skolbyggnad. Utfört i etapp med Skanska som generalentreprenör.",
    challenges: "Samordning mot Skanskas parallella produktion och hårda tidsfrister kring skolstart.",
    image: "/projekt/foretag_13.webp",
    imageAlt: "Noshörningen, byggarbetsplats med tornkranar under vinterproduktion",
    featured: false,
  },
  {
    slug: "norrtalje-sjukhus",
    title: "Norrtälje sjukhus, sprinklercentral",
    client: "Norrtälje sjukhus",
    period: "2023",
    category: "Mark & anläggning",
    type: "Totalentreprenad",
    summary:
      "Projektering och utförande av sprinklercentral för sjukhuset. Inkluderar anslutningar, dränering och finplanering. Arbete i driftkänslig miljö.",
    image: "/projekt/mark_image9.webp",
    imageAlt: "Norrtälje sjukhus, färdigställd entré med finplanering och ramper",
    featured: false,
  },
  {
    slug: "raul-wallenberg-bagartorp",
    title: "Raul Wallenbergskolan Bagartorp",
    client: "Raul Wallenberg Academy",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Mark- och anläggningsarbeten kring skolbyggnad i Bagartorp, Solna.",
    image: "/projekt/mark_image13.webp",
    imageAlt: "Raul Wallenbergskolan, skolgård med konstgräsplan och skolbyggnad",
    featured: false,
  },
  {
    slug: "engelska-skolan-sigtuna",
    title: "Engelska skolan Sigtuna",
    client: "Internationella Engelska skolan",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Markanläggning och ledningsarbeten i anslutning till skolbyggnad i Sigtuna.",
    image: "/projekt/mark_image16.webp",
    imageAlt: "Markanläggning Engelska skolan Sigtuna, markvibrator och isolering",
    featured: false,
  },
  {
    slug: "octapharma-lindhagen",
    title: "Octapharma Lindhagen",
    client: "Octapharma AB",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary:
      "Markanläggning i anslutning till Octapharmas verksamhet på Lindhagen. Hygieniska krav och stram arbetsordning pga produktionsmiljön.",
    image: "/projekt/mark_image20.webp",
    imageAlt: "Octapharma Lindhagen, betonggjutning och armering",
    featured: false,
  },
  {
    slug: "tennisakademien",
    title: "Good to Great Tennisakademien",
    client: "Good to Great Tennis Academy",
    period: "2022",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Markanläggning, asfaltering och finplanering i anslutning till tennisakademin.",
    image: "/projekt/mark_image17.webp",
    imageAlt: "Tennisakademien — asfalterad yta och entré efter finplanering",
    featured: false,
  },
  {
    slug: "ledningsomlaggning-knivsta",
    title: "Ledningsomläggning Knivsta",
    client: "Knivsta kommun",
    period: "2022",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Omläggning av kommunal infrastruktur för vatten och avlopp i centrala Knivsta.",
    image: "/projekt/mark_image18.webp",
    imageAlt: "Ledningsomläggning Knivsta, VA-rör och schakt i gatumiljö",
    featured: false,
  },
  {
    slug: "patriam-stocksund",
    title: "Patriam Stocksund",
    client: "Patriam",
    period: "2023",
    category: "Mark & anläggning",
    type: "Utförandeentreprenad",
    summary: "Grundläggning och markanläggning för bostadsprojekt i Stocksund.",
    image: "/projekt/mark_image22.webp",
    imageAlt: "Patriam Stocksund, schakt med spontväggar och armering",
    featured: false,
  },
];

export const CLIENTS = [
  { name: "Signalisten", type: "allmännyttan Solna" },
  { name: "Rocmore", type: "fastighetsutvecklare" },
  { name: "Stockholmshem", type: "allmännyttan" },
  { name: "Atrium Ljungberg", type: "fastighetsägare" },
  { name: "Skanska", type: "generalentreprenör" },
  { name: "Axfood", type: "koncern" },
  { name: "Locum", type: "regionfastighet" },
  { name: "Solna Stad", type: "kommun" },
  { name: "Lidingö Stad", type: "kommun" },
  { name: "Habitek", type: "byggherre" },
  { name: "Patriam", type: "fastighetsutvecklare" },
  { name: "Octapharma", type: "industri" },
  { name: "Sigtuna kommun", type: "kommun" },
  { name: "Knivsta kommun", type: "kommun" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  project?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Korta beslutsvägar och ett team som löser problem på plats istället för att skicka dem uppåt. Det märks att de som är ansvariga också är de som bygger.",
    name: "Representant",
    role: "Projektchef",
    company: "Fastighetsägare, Stockholm",
    project: "Fasadrenovering flerbostadshus",
  },
  {
    quote:
      "Levererade i tid trots en vintersäsong som var allt annat än normal. Det är den typ av förutsägbarhet vi bygger vår egen tidplan på.",
    name: "Representant",
    role: "Byggherreombud",
    company: "Byggherre, Stockholm",
    project: "Grundläggning bostäder",
  },
  {
    quote:
      "Vi bytte entreprenör mitt i ett projekt och hade höga krav. RM kom in, tog över och höll både kvalitet och budget, utan att ställa till det för hyresgästerna.",
    name: "Representant",
    role: "Fastighetschef",
    company: "Kontorsfastighet, Stockholm",
    project: "Kontorsanpassning med pågående verksamhet",
  },
];
