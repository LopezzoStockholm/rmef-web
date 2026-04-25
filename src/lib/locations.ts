export interface Location {
  slug: string;
  service: "fasadrenovering" | "skyddsrum" | "betongrenovering" | "totalentreprenad";
  serviceLabel: string;
  ort: string;
  region?: string;
  title: string;
  description: string;
  intro: string;
  localContext: string;
  referenser?: { slug: string; titel: string; client: string }[];
  tjansteLank: string;
  h1?: string;
}

export const LOCATIONS: Location[] = [
  // FASADRENOVERING – geo-sidor för orter där XLent dominerar SERP
  {
    slug: "fasadrenovering-lidingo",
    service: "fasadrenovering",
    serviceLabel: "Fasadrenovering",
    ort: "Lidingö",
    title: "Fasadrenovering Lidingö – BRF, villa och kulturfastighet",
    description:
      "Fasadrenovering på Lidingö för bostadsrättsföreningar, villor och kulturhistoriska byggnader. Referens: Vindarnas tempel och Kaptensstugan åt Lidingö Stad.",
    intro:
      "Vi har djup erfarenhet från Lidingö – både modern fasadrenovering på bostadsrätter och antikvarisk restaurering av kulturbyggnader åt Lidingö Stad. Kontor i centrala Stockholm, max 25 minuter från Lidingö.",
    localContext:
      "Lidingös äldre villakvarter och Hustegaholm har kulturhistoriskt värdefulla byggnader som kräver antikvariska hänsynstaganden. Samtidigt har 60–70-talens flerbostadshus (Larsberg, Bodal, Gångsätra) typiska behov av putsrenovering och tilläggsisolering. Vi hanterar båda.",
    referenser: [
      { slug: "vindarnas-tempel", titel: "Vindarnas tempel", client: "Lidingö Stad" },
      { slug: "kaptensstugan", titel: "Kaptensstugan", client: "Lidingö Stad" },
    ],
    tjansteLank: "/tjanster/fasad",
  },
  {
    slug: "fasadrenovering-solna",
    service: "fasadrenovering",
    serviceLabel: "Fasadrenovering",
    ort: "Solna",
    title: "Fasadrenovering Solna – BRF och kommersiell fastighet",
    description:
      "Fasadrenovering i Solna för bostadsrättsföreningar, fastighetsägare och kommuner. Strategisk samarbetspartner till Rocmore med löpande uppdrag åt Signalisten, Solnas allmännyttiga bostadsbolag.",
    intro:
      "Solna är en av våra kärnkommuner. Vi har ramavtal med Rocmore och arbetar löpande mot Signalisten, Solna Stads allmännyttiga bostadsbolag – årlig projektvolym cirka 40 Mkr inom mark, bygg och fasad.",
    localContext:
      "Solna har ett stort bestånd av flerbostadshus från 50–80-talet med typiska behov av fasadrenovering och tilläggsisolering. Miljonprogramshus i Hallonbergen, Råsunda och Huvudsta har ofta kombinerade behov – fasad, balkong och betong samordnat.",
    referenser: [
      { slug: "rocmore-signalisten", titel: "Rocmore / Signalisten", client: "Signalisten" },
      { slug: "raul-wallenberg-bagartorp", titel: "Raul Wallenbergskolan", client: "Raul Wallenberg Academy" },
    ],
    tjansteLank: "/tjanster/fasad",
  },
  {
    slug: "fasadrenovering-sundbyberg",
    service: "fasadrenovering",
    serviceLabel: "Fasadrenovering",
    ort: "Sundbyberg",
    title: "Fasadrenovering Sundbyberg – BRF och fastighetsägare",
    description:
      "Fasadrenovering i Sundbyberg för bostadsrättsföreningar och fastighetsägare. Etablerat team i närområdet med egna hantverkare och beprövade underentreprenörer.",
    intro:
      "Sundbyberg är en av våra primära verksamhetsorter. Från Rissne och Ör i norr till Duvbo och Hallonbergen har vi genomfört fasadprojekt åt både allmännyttan och privata fastighetsägare.",
    localContext:
      "Sundbyberg har en blandning av 40–50-tals funkis, miljonprogramshus och modernare förtätning. Fasadmaterialen varierar mellan slamad puts, tegel och plåt. Vi anpassar teknik och metod efter byggnadsperiod.",
    tjansteLank: "/tjanster/fasad",
  },
  {
    slug: "fasadrenovering-nacka",
    service: "fasadrenovering",
    serviceLabel: "Fasadrenovering",
    ort: "Nacka",
    title: "Fasadrenovering Nacka – BRF och fastighetsägare",
    description:
      "Fasadrenovering i Nacka för bostadsrättsföreningar, villor och kommersiella fastigheter. Kort inställelse­tid från kontor i Stockholm.",
    intro:
      "Nacka har ett växande BRF-bestånd med tydliga renoveringsbehov. Vi arbetar löpande med fasadprojekt i kommundelarna Sickla, Saltsjöbaden, Fisksätra, Älta och Orminge.",
    localContext:
      "Nacka har en unik blandning av arkitekturepoker – från 20-tals patricierhus i Saltsjöbaden till 70-tals miljonprogram i Fisksätra. Varje epok har sina fasadmaterial och renoveringsmetodik.",
    tjansteLank: "/tjanster/fasad",
  },
  {
    slug: "fasadrenovering-taby",
    service: "fasadrenovering",
    serviceLabel: "Fasadrenovering",
    ort: "Täby",
    title: "Fasadrenovering Täby – BRF och villa",
    description:
      "Fasadrenovering i Täby för bostadsrättsföreningar och villaägare. Omputsning, tilläggsisolering och antikvariska restaureringar.",
    intro:
      "Täby är en del av vårt primära arbetsområde i norra Stockholm. Från Tibble och Näsbypark till Viggbyholm har vi genomfört fasadrenovering och totalentreprenad.",
    localContext:
      "Täbys 60–70-tals villakvarter och flerbostadshus har nått den ålder då putsfasader behöver omfattande renovering. Parallellt har förtätningen gett moderna kvarter som nu följer en 15–20-års cykel för första putsunderhåll.",
    tjansteLank: "/tjanster/fasad",
  },
  {
    slug: "fasadrenovering-danderyd",
    service: "fasadrenovering",
    serviceLabel: "Fasadrenovering",
    ort: "Danderyd",
    title: "Fasadrenovering Danderyd – villa, BRF och institution",
    description:
      "Fasadrenovering i Danderyd för villaägare, bostadsrättsföreningar och institutioner. Referens: Danderyds sjukhus åt Locum.",
    intro:
      "Vi har etablerad närvaro i Danderyd sedan flera år – från mark- och anläggningsarbeten vid Danderyds sjukhus åt Locum till fasadprojekt på BRF och villor i Djursholm och Stocksund.",
    localContext:
      "Danderyds Djursholm har en hög andel kulturhistoriskt värdefulla villor där antikvariska hänsyn ofta krävs. Stocksund och Enebyberg har mer modernt bestånd där teknik och isolering står i fokus.",
    referenser: [
      { slug: "danderyds-sjukhus", titel: "Danderyds sjukhus", client: "Locum" },
      { slug: "patriam-stocksund", titel: "Patriam Stocksund", client: "Patriam" },
    ],
    tjansteLank: "/tjanster/fasad",
  },
  {
    slug: "fasadrenovering-sollentuna",
    service: "fasadrenovering",
    serviceLabel: "Fasadrenovering",
    ort: "Sollentuna",
    title: "Fasadrenovering Sollentuna – BRF och fastighetsägare",
    description:
      "Fasadrenovering i Sollentuna för bostadsrättsföreningar och fastighetsägare. Omputsning, tilläggsisolering och samordnad balkongrenovering.",
    intro:
      "Sollentuna är en del av vårt arbetsområde i norra Stockholm. Kommunen har ett stort bestånd av 60–80-tals flerbostadshus i Edsberg, Helenelund, Rotebro och Tureberg som nu är inne i renoveringscykel.",
    localContext:
      "Sollentunas miljonprogramsområden har typiska behov av fasadrenovering kombinerat med tilläggsisolering. Moderna kvarter som Väsjöområdet och Silverdal kräver annan tekniknivå men samma kvalitetskrav.",
    tjansteLank: "/tjanster/fasad",
  },

  // SKYDDSRUM – geo-sidor för Stockholm-områden
  {
    slug: "skyddsrum-stockholm",
    service: "skyddsrum",
    serviceLabel: "Skyddsrumsspecialist",
    ort: "Stockholm",
    title: "Skyddsrum Stockholm – sanering och besiktning",
    description:
      "Skyddsrumsspecialist i Stockholm. Skyddsrumssanering, skyddsrumsbesiktning, MSB-åtgärder och nyproduktion för bostadsrättsföreningar, fastighetsägare, kommuner och industri.",
    intro:
      "Vi är etablerade skyddsrumsspecialister i Stockholm. Vårt team har lång erfarenhet av MSB-protokoll, betongteknik för skyddsrum och dokumentation som krävs för godkänd status.",
    localContext:
      "Stockholms skyddsrumsbestånd är ett av landets äldsta. Många skyddsrum i innerstaden är från 50–70-talet och kräver nu omfattande sanering. Vi hanterar både klassiska föreläggandeprojekt och moderna ersättnings­skyddsrum i nyproduktion.",
    tjansteLank: "/tjanster/skyddsrum",
  },
  {
    slug: "skyddsrum-sodermalm",
    service: "skyddsrum",
    serviceLabel: "Skyddsrumsspecialist",
    ort: "Södermalm",
    title: "Skyddsrum Södermalm – sanering och besiktning i innerstaden",
    description:
      "Skyddsrumsspecialist på Södermalm. Sanering, besiktning och åtgärd av MSB-brister i innerstadens äldre skyddsrum. Vana av kulturmiljöer och känsliga fastigheter.",
    intro:
      "Södermalm har ett av Stockholms äldsta skyddsrumsbestånd. Vi har erfarenhet av både klassiska 50-tals anläggningar under stenstadsfastigheter och moderna ersättnings­skyddsrum i nybyggda kvarter.",
    localContext:
      "Arbetet på Södermalm kräver särskild logistik – smala innergårdar, tunga betongtransporter och arbete i bebodd stadsmiljö ställer krav på stöddämpning, vibrationsmätning och snäv APD-plan.",
    referenser: [
      { slug: "t11-katarinahuset", titel: "T11 Katarinahuset & Mosebackebron", client: "Atrium Ljungberg" },
      { slug: "malongen", titel: "Malongen", client: "Habitek Bygg AB" },
      { slug: "kvarteret-persikan", titel: "Kvarteret Persikan", client: "Stockholmshem AB" },
    ],
    tjansteLank: "/tjanster/skyddsrum",
  },
  {
    slug: "skyddsrum-vasastan",
    service: "skyddsrum",
    serviceLabel: "Skyddsrumsspecialist",
    ort: "Vasastan",
    title: "Skyddsrum Vasastan – sanering och besiktning",
    description:
      "Skyddsrum-specialist i Vasastan. Skyddsrumssanering, skyddsrumsbesiktning och åtgärd av MSB-brister i stenstadens äldre fastigheter.",
    intro:
      "Vasastan har en stor andel skyddsrum från sent 40-tal och 50-tal med typiska åldersrelaterade brister: karbonatisering, fuktproblem och otäta slussar. Vi känner beståndet väl.",
    localContext:
      "Stenstadens skyddsrum ligger oftast i källarplan under kulturhistoriskt värdefulla bostadshus. Arbete kräver minimala ingrepp i synliga ytor, kvalitativa återställningar och dialog med kulturhistoriska myndigheter vid behov.",
    tjansteLank: "/tjanster/skyddsrum",
  },
  {
    slug: "skyddsrum-kungsholmen",
    service: "skyddsrum",
    serviceLabel: "Skyddsrumsspecialist",
    ort: "Kungsholmen",
    title: "Skyddsrum Kungsholmen – sanering och besiktning",
    description:
      "Skyddsrum-entreprenör på Kungsholmen. Sanering, besiktning och åtgärd av MSB-brister. Vana av innerstadslogistik, väggenomföringar och gastäthetskrav.",
    intro:
      "Kungsholmen har skyddsrum i både äldre stenstadsfastigheter och moderna kontorskvarter. Vi driver hela kedjan från MSB-protokoll till godkänd status – med fast pris och dokumentation.",
    localContext:
      "Kungsholmens mix av bostad och kontor innebär att skyddsrum ofta används som förråd, cykelrum eller parkering i vardagsläge. Vi säkerställer att 48-timmars-kravet uppfylls utan att påverka den löpande användningen i onödan.",
    tjansteLank: "/tjanster/skyddsrum",
  },

  // BETONGRENOVERING
  {
    slug: "betongrenovering-stockholm",
    service: "betongrenovering",
    serviceLabel: "Betongrenovering",
    ort: "Stockholm",
    title: "Betongrenovering Stockholm – balkong, bjälklag och fasad",
    description:
      "Betongrenovering i Stockholm – karbonatisering, armeringskorrosion och sprickor i balkonger, bjälklag och fasader. För BRF, fastighetsägare och kommuner.",
    intro:
      "Stockholms flerbostadshus från 60–80-talet har nu nått den ålder då betongkonstruktioner – balkonger, bjälklag och fasader – kräver omfattande renovering.",
    localContext:
      "Vårt team täcker hela Stockholms län. Vi har genomfört betongprojekt åt Atrium Ljungberg (T11 Katarinahuset), Stockholmshem (Kvarteret Persikan) och flera bostadsrättsföreningar i innerstaden.",
    tjansteLank: "/tjanster/betongrenovering",
  },

  // TOTALENTREPRENAD
  {
    slug: "totalentreprenad-malardalen",
    service: "totalentreprenad",
    serviceLabel: "Totalentreprenad",
    ort: "Mälardalen",
    region: "Sigtuna, Knivsta, Uppsala, Norrtälje",
    title: "Totalentreprenad Mälardalen – Sigtuna, Knivsta, Uppsala, Norrtälje",
    description:
      "Totalentreprenad i Mälardalen för kommuner, fastighetsägare och byggherrar. Referens: Engelska skolan Sigtuna, Ledningsomläggning Knivsta, Norrtälje sjukhus.",
    intro:
      "Vi driver totalentreprenader och utförandeentreprenader i Mälardalen utanför Stockholm. Kommunkunder och byggherrar i Sigtuna, Knivsta, Uppsala, Norrtälje och Västerås-området är en växande del av vår verksamhet.",
    localContext:
      "Mälardalens projektmarknad har andra logistikförutsättningar än innerstaden – ofta större ytor, lättare tillgänglighet och mer plats för etablering. Vår kompetens i komplex innerstadsentreprenad ger hög leverans även i traditionella Mälardals-projekt.",
    referenser: [
      { slug: "engelska-skolan-sigtuna", titel: "Engelska skolan Sigtuna", client: "Internationella Engelska skolan" },
      { slug: "ledningsomlaggning-knivsta", titel: "Ledningsomläggning Knivsta", client: "Knivsta kommun" },
      { slug: "norrtalje-sjukhus", titel: "Norrtälje sjukhus", client: "Norrtälje sjukhus" },
    ],
    tjansteLank: "/tjanster/bygg",
  },

  // NYA GEO-SIDOR (2026-04-25) — bygger ut SEO-täckning för kommuner och stadsdelar
  {
    slug: "skyddsrum-norrtalje",
    service: "skyddsrum",
    serviceLabel: "Skyddsrum",
    ort: "Norrtälje",
    title: "Skyddsrum Norrtälje — sanering och MSB-besiktning",
    description:
      "Skyddsrumssanering och MSB-besiktning i Norrtälje. Bostadsrättsföreningar, fastighetsägare och kommunal sektor. Referens: Norrtälje sjukhus.",
    intro:
      "Vi arbetar regelbundet i Norrtälje med både skyddsrum och totalentreprenader. Vårt projektledningskontor i Stockholm är 60 minuters resa, vilket gör logistiken praktisk för Norrtälje-projekt.",
    localContext:
      "Norrtäljes bestånd består till stor del av bostadsrätter från 60–80-talet samt kommunala fastigheter. Skyddsrumsbeståndet är typiskt och behöver systematiskt åtgärdas inför MSB:s kontrollomgång 2025–2030. Vi har nyligen levererat sprinklercentral åt Norrtälje sjukhus.",
    referenser: [
      { slug: "norrtalje-sjukhus", titel: "Norrtälje sjukhus", client: "Norrtälje sjukhus" },
    ],
    tjansteLank: "/tjanster/skyddsrum",
  },
  {
    slug: "skyddsrum-knivsta",
    service: "skyddsrum",
    serviceLabel: "Skyddsrum",
    ort: "Knivsta",
    title: "Skyddsrum Knivsta — sanering och MSB-besiktning",
    description:
      "Skyddsrumsspecialist i Knivsta. Sanering, besiktning, MSB-åtgärder och nyproduktion. Erfarenhet från kommunal infrastruktur.",
    intro:
      "Vi har arbetat med Knivsta kommun på ledningsomläggningar och kommunal infrastruktur. Skyddsrumsåtgärder för BRF och kommunala fastigheter ingår naturligt i vårt utbud.",
    localContext:
      "Knivstas bestånd är blandat — äldre kommuncentrum samt nya bostadsområden från 90-tal och framåt. Skyddsrum från olika eror kräver olika åtgärder. Vårt team kommer från Stockholm med 45 minuters bilresa, vilket ger praktisk tillgänglighet.",
    referenser: [
      { slug: "ledningsomlaggning-knivsta", titel: "Ledningsomläggning Knivsta", client: "Knivsta kommun" },
    ],
    tjansteLank: "/tjanster/skyddsrum",
  },
  {
    slug: "skyddsrum-sigtuna",
    service: "skyddsrum",
    serviceLabel: "Skyddsrum",
    ort: "Sigtuna",
    title: "Skyddsrum Sigtuna — sanering och MSB-besiktning",
    description:
      "Skyddsrumsspecialist i Sigtuna kommun. Sanering, besiktning, MSB-åtgärder. Referens: Engelska skolan Sigtuna.",
    intro:
      "Vi har en etablerad relation med Sigtuna kommun via Engelska skolan-projektet. Skyddsrum för BRF och kommunala fastigheter är en naturlig del av vårt utbud.",
    localContext:
      "Sigtuna kommun innefattar både Sigtuna stad och Märsta. Skyddsrumsbeståndet är blandat — äldre i stadskärnorna och nyare i kommunalt nybyggda bostadsområden. Geografisk närhet till Arlanda gör Sigtuna till en växande kommun med behov av infrastrukturentreprenörer.",
    referenser: [
      { slug: "engelska-skolan-sigtuna", titel: "Engelska skolan Sigtuna", client: "Internationella Engelska skolan" },
    ],
    tjansteLank: "/tjanster/skyddsrum",
  },
  {
    slug: "fasadrenovering-sundbyberg",
    service: "fasadrenovering",
    serviceLabel: "Fasadrenovering",
    ort: "Sundbyberg",
    title: "Fasadrenovering Sundbyberg — BRF och fastighetsägare",
    description:
      "Fasadrenovering i Sundbyberg för bostadsrättsföreningar och fastighetsägare. Putsrenovering, tilläggsisolering, balkonger.",
    intro:
      "Sundbybergs blandning av äldre stenstadskvarter och 70-talets miljonprogram ger två olika typer av fasadprojekt. Vi har erfarenhet från båda — antikvariska restaureringar och storskalig putsrenovering.",
    localContext:
      "Sundbyberg är Sveriges minsta kommun till ytan men en av de tätaste. Bostadsrättsbeståndet är stort och 70-talets fasader når nu sin underhållscykel. Vårt Stockholmskontor är 15 minuter med tunnelbana.",
    tjansteLank: "/tjanster/fasad",
  },
  {
    slug: "totalentreprenad-bagartorp",
    service: "totalentreprenad",
    serviceLabel: "Totalentreprenad",
    ort: "Bagartorp",
    region: "Solna",
    title: "Totalentreprenad Bagartorp Solna — skola och bostadsmiljö",
    description:
      "Totalentreprenad i Bagartorp och Solna. Skolprojekt, bostadsmiljö och kommunal infrastruktur. Referens: Raul Wallenbergskolan.",
    intro:
      "Bagartorp i Solna är en växande stadsdel med pågående utveckling av skol- och bostadsmiljö. Vi har genomfört Raul Wallenbergskolan och flera markanläggningsprojekt i området.",
    localContext:
      "Solnas Bagartorp och Hagalund är typiska för Stockholmsregionens 60–70-tal med stora behov av modernisering. Skol- och institutionsprojekt har särskilda krav på tidplan (skolstart) och driftkänsliga miljöer (förskolor parallellt).",
    referenser: [
      { slug: "raul-wallenberg-bagartorp", titel: "Raul Wallenbergskolan Bagartorp", client: "Raul Wallenberg Academy" },
    ],
    tjansteLank: "/tjanster/bygg",
  },
];
