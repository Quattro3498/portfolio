// Tutti i testi del sito stanno qui. I progetti arrivano dai repo pubblici
// https://github.com/Quattro3498 (descrizioni ricavate dai README).

export const profile = {
  name: "Simone Quattromini",
  role: "Sviluppatore fullstack",
  siteUrl: "https://simonequattromini.dreamdev.store",
  github: "https://github.com/Quattro3498",
  githubHandle: "Quattro3498",
  linkedin: "https://www.linkedin.com/in/simone-quattromini/",
  email: "simonequattromini@gmail.com",
  cv: "/cv/CV-Simone-Quattromini.pdf",
};

export const hero = {
  title: "Dal database all'interfaccia.",
  text: "Sono Simone, sviluppatore fullstack. Costruisco app web, bot e API con .NET, Node.js, React e qualunque altra cosa compili.",
};

export type TechKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "javascript"
  | "html"
  | "css"
  | "node"
  | "express"
  | "mysql"
  | "prisma"
  | "docker"
  | "git"
  | "github"
  | "ejs"
  | "dotnet"
  | "csharp"
  | "vb"
  | "php"
  | "sqlserver"
  | "claude"
  | "gemini"
  | "cursor"
  | "nginx"
  | "reactnative"
  | "atlassian"
  | "python"
  | "java"
  | "c"
  | "cpp"
  | "figma"
  | "jira";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  liveLabel?: string;
  image?: string;
  imageAlt?: string;
  fit?: "cover" | "contain" | "phone";
  code?: string;
  /** Logo del prodotto, mostrato su una targa chiara al posto dello screenshot. */
  logo?: string;
  logoAlt?: string;
  /** Cosa faccio io nel progetto, oltre al codice. */
  role?: string;
  /** Etichetta di stato mostrata accanto al titolo, es. "In sviluppo". */
  status?: string;
  /** Progetto senza codice pubblico: niente link, nota esplicita. */
  privateCode?: boolean;
};

export const projects: Project[] = [
  {
    id: "easyadv",
    role: "Raccolgo i requisiti, ridisegno l'interfaccia, sviluppo, testo e seguo l'assistenza agli utenti.",
    title: "EasyADV",
    description:
      "Gestionale per agenzie di viaggio nato nel 2000 con .NET Framework 1.0 e Web Forms. Da un anno lo porto al .NET Framework 4.8, con un rinnovamento sia grafico sia funzionale.",
    tags: [".NET Framework 4.8", "Web Forms", "Visual Basic", "SQL Server Express"],
    status: "In aggiornamento",
    logo: "/projects/easyadv-logo.png",
    logoAlt: "Logo EasyADV",
    privateCode: true,
  },
  {
    id: "rideup",
    role: "Ideazione, progettazione, interfaccia in Figma e sviluppo dell'app.",
    title: "RideUp",
    description:
      "App per motociclisti per organizzare i gruppi di uscita e creare i percorsi.",
    tags: ["React Native"],
    status: "In sviluppo",
    image: "/projects/rideup-home.png",
    imageAlt: "Schermata home di RideUp con la moto del profilo, il pulsante per registrare un giro e i gruppi",
    fit: "phone",
    privateCode: true,
  },
  {
    id: "portfolio",
    role: "Progettazione, design e sviluppo.",
    title: "Questo portfolio",
    description:
      "Il sito che stai guardando: Next.js e TypeScript, animazioni con GSAP, scroll morbido con Lenis e componenti React Bits.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    repo: "https://github.com/Quattro3498/portfolio",
  },
  {
    id: "dd-calendar",
    role: "Progettazione, interfaccia e sviluppo di frontend e backend.",
    title: "Dream Calendar",
    description:
      "Calendario condiviso per organizzare gli impegni di un team: eventi con note, liste colorate, login con sessioni, tema chiaro e scuro e notifiche pianificate.",
    tags: ["Node.js", "Express", "EJS", "MySQL", "Prisma", "Docker"],
    repo: "https://github.com/Quattro3498/dd-calendar",
    image: "/projects/calendar.png",
    imageAlt: "Vista mensile di Dream Calendar con le liste degli eventi a sinistra",
    fit: "cover",
  },
  {
    id: "dd-bot",
    role: "Progettazione e sviluppo del bot e dell'API.",
    title: "Dream Development Bot",
    description:
      "Bot Discord con backend Express per il supporto tecnico: ticket con modali, trascrizioni HTML archiviate, avvisi fuori orario ed endpoint REST per il controllo versioni.",
    tags: ["Node.js", "Discord.js", "Express", "MySQL"],
    repo: "https://github.com/Quattro3498/dd-bot",
    image: "/projects/bot.png",
    imageAlt: "Profilo Discord del bot Dream Development Manager",
    fit: "contain",
  },
  {
    id: "dd-notify",
    role: "Disegno l'interfaccia in Figma e sviluppo.",
    title: "DD Notify",
    description:
      "Sistema di notifiche in-game per FiveM con interfaccia NUI, suoni e tipi configurabili. Sostituisce le notifiche di ESX con una sola riga di codice.",
    tags: ["Lua", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Quattro3498/dd-notify",
    code: `exports["dd-notify"]:ShowNotification(\n  "Operazione completata",\n  "Notifica",\n  "default"\n)`,
  },
];

export type StackItem = { key: TechKey; label: string };

export type StackGroup = {
  id: string;
  title: string;
  text: string;
  /** Quelle che uso nei progetti e nel lavoro. */
  main: StackItem[];
  /** Quelle che ho visto o studiato, ma che non compaiono nei progetti. */
  studied: StackItem[];
};

export const stack: StackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    text: "Interfacce veloci e accessibili, con animazioni che hanno uno scopo.",
    main: [
      { key: "react", label: "React" },
      { key: "reactnative", label: "React Native" },
      { key: "nextjs", label: "Next.js" },
      { key: "typescript", label: "TypeScript" },
      { key: "tailwind", label: "Tailwind CSS" },
      { key: "javascript", label: "JavaScript" },
      { key: "html", label: "HTML" },
      { key: "css", label: "CSS" },
    ],
    studied: [],
  },
  {
    id: "backend",
    title: "Backend",
    text: "API, servizi e database che reggono il carico.",
    main: [
      { key: "node", label: "Node.js" },
      { key: "express", label: "Express" },
      { key: "mysql", label: "MySQL" },
      { key: "prisma", label: "Prisma" },
      { key: "dotnet", label: ".NET" },
      { key: "csharp", label: "C#" },
      { key: "vb", label: "Visual Basic" },
      { key: "sqlserver", label: "Microsoft SQL Server" },
      { key: "php", label: "PHP" },
    ],
    studied: [
      { key: "ejs", label: "EJS" },
      { key: "python", label: "Python" },
      { key: "java", label: "Java" },
      { key: "c", label: "C" },
      { key: "cpp", label: "C++" },
    ],
  },
  {
    id: "ai",
    title: "AI",
    text: "Lavoro con l'AI ogni giorno, come strumento per sviluppare e ragionare sul codice.",
    main: [
      { key: "claude", label: "Claude" },
      { key: "gemini", label: "Gemini" },
      { key: "cursor", label: "Cursor" },
    ],
    studied: [],
  },
  {
    id: "tooling",
    title: "Strumenti",
    text: "Quello che uso per consegnare e mantenere il codice.",
    main: [
      { key: "git", label: "Git" },
      { key: "github", label: "GitHub" },
      { key: "docker", label: "Docker" },
      { key: "nginx", label: "NGINX" },
      { key: "atlassian", label: "Suite Atlassian" },
    ],
    studied: [],
  },
];

export type Script = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  store: string;
  video?: string;
  /** Contributo del collega di team, se rilevante per questo script. */
  team?: string;
};

export const dreamDev = {
  title: "Dream Development",
  intro:
    "FiveM è una modifica per GTA V che permette di creare server multiplayer personalizzati, dove la community aggiunge script, mappe e veicoli.",
  text: "Dream Development è lo store di risorse per questi server che porto avanti con un socio, modellatore 3D: io scrivo il codice, lui realizza i modelli con 3ds Max.",
  role: "Per ogni script disegno l'interfaccia in Figma e lo sviluppo. Gestisco anche lo store, gli aggiornamenti, l'assistenza e l'infrastruttura informatica.",
  storeUrl: "https://dreamdev.tebex.io/",
  logo: "/dreamdev/logo.png",
  scripts: [
    {
      id: "nailshop",
      title: "NailShop Job V2",
      description:
        "Il negozio di unghie per FiveM e il prodotto più venduto dello store: ogni dito personalizzabile per colore, motivo e lunghezza, con job system opzionale.",
      tags: ["ESX", "QBCore", "NUI", "Job system"],
      image: "/dreamdev/nailshop.jpg",
      imageAlt: "Mani con unghie lunghe a righe rosa e bianche in NailShop Job V2",
      store: "https://dreamdev.tebex.io/package/5895695",
      video: "https://youtu.be/LTk88QzzNXw",
      team: "Parte 3D in 3ds Max a cura del mio socio.",
    },
    {
      id: "piercing",
      title: "Piercing Shop Job",
      description:
        "Studio di piercing per il roleplay: menu con 12 colori per modello, controller di posizionamento per adattare ogni gioiello al volto e sistema add-on senza conflitti con i vestiti.",
      tags: ["Script + MLO", "NUI", "Job system"],
      image: "/dreamdev/piercing.jpg",
      imageAlt: "Primo piano di un personaggio con piercing e il controller di posizionamento",
      store: "https://dreamdev.tebex.io/package/7408978",
      video: "https://youtu.be/PBIGv0Q7sQU",
      team: "Parte 3D in 3ds Max a cura del mio socio.",
    },
    {
      id: "barbershop",
      title: "Barbershop Job",
      description:
        "Barbiere con interfaccia NUI per personalizzare i capelli. Funziona con un dipendente o come negozio aperto a tutti, con marker e blip personalizzati.",
      tags: ["ESX", "QBCore", "NUI", "Job system"],
      image: "/dreamdev/barbershop.jpg",
      imageAlt: "Salone da barbiere in FiveM con un dipendente che taglia i capelli a una cliente",
      store: "https://dreamdev.tebex.io/package/6175496",
      video: "https://youtu.be/nz9HYfyZF5I",
    },
    {
      id: "vehicle-control",
      title: "Vehicle Control",
      description:
        "Interfaccia per le funzioni del veicolo: motore, luci, neon, porte, finestrini e posti. Cambia a seconda che si guidi auto, moto, barca o elicottero.",
      tags: ["NUI", "Veicoli"],
      image: "/dreamdev/vehicle-control.jpg",
      imageAlt: "Elicottero e moto sulla pista di un aeroporto in Vehicle Control",
      store: "https://dreamdev.tebex.io/package/5563887",
      video: "https://youtu.be/zgRBu1TFzKk",
    },
    {
      id: "tombstone",
      title: "Tombstone Creator",
      description:
        "Oltre 278 lapidi sulla mappa, in 4 modelli per dimensione e materiale, con testi incisi personalizzabili grazie a una libreria di texture.",
      tags: ["ESX", "QBCore", "Roleplay"],
      image: "/dreamdev/tombstone.jpg",
      imageAlt: "Lapide in un cimitero con un epitaffio inciso",
      store: "https://dreamdev.tebex.io/package/5519006",
      video: "https://youtu.be/ECAez6tHgpg",
    },
    {
      id: "walk-of-fame",
      title: "Walk Of Fame",
      description:
        "Le 300 stelle di Vinewood Boulevard con i nomi dei giocatori e le medaglie dei loro traguardi.",
      tags: ["ESX", "QBCore", "Roleplay"],
      image: "/dreamdev/walk-of-fame.jpg",
      imageAlt: "Stelle della Walk of Fame con nomi incisi sul marciapiede",
      store: "https://dreamdev.tebex.io/package/5855276",
      video: "https://youtu.be/-IyEIsqMlGg",
    },
    {
      id: "animated-tower",
      title: "Animated Tower Creator",
      description:
        "Gru animate sparse per Los Santos, configurabili per zona, altezza, rotazione e colore, per rendere la mappa più viva.",
      tags: ["Config", "Mappa"],
      image: "/dreamdev/animated-tower.jpg",
      imageAlt: "Gru a torre gialla in un cantiere di Los Santos",
      store: "https://dreamdev.tebex.io/package/5643023",
      team: "Parte 3D in 3ds Max a cura del mio socio.",
    },
  ] satisfies Script[],
};

export const about = {
  title: "Programmo per lavoro dal 2020.",
  text: "Sono del 2005 e ho iniziato a sviluppare script per FiveM nel 2020, ancora a scuola. Oggi lavoro in Travelsoftware, dove sviluppo EasyADV, il gestionale per agenzie di viaggio.",
  stats: [
    { value: 1700, suffix: "+", label: "clienti su Dream Development" },
    { value: 5000, suffix: "+", label: "prodotti venduti" },
  ],
  experience: [
    {
      period: "2024 - oggi",
      title: "Travelsoftware, Milano",
      text: "Apprendistato, 2 anni di .NET. Su EasyADV raccolgo i requisiti, ridisegno l'interfaccia e testo. Sviluppo anche web e portali aziendali con React, Next.js, Node.js e C#, con database MySQL e Microsoft SQL. Uso Jira.",
    },
    {
      period: "2020 - oggi",
      title: "Dream Development",
      text: "Libera professione, con un socio modellatore 3D. Script per FiveM in Lua e JavaScript, bot Discord e strumenti interni. Gestisco store, aggiornamenti, assistenza e infrastruttura, con GitHub per il codice.",
    },
    {
      period: "2023",
      title: "Everything IT, Dublino",
      text: "Stage in sede: riparazione hardware, installazione di sistemi operativi e configurazione di Microsoft Office.",
    },
    {
      period: "2023",
      title: "Travelsoftware, Milano",
      text: "Stage in sede: backend in Node.js e PHP, app desktop con Electron.js, frontend web e database Microsoft SQL.",
    },
  ],
  languages: "Lingue: italiano madrelingua, inglese intermedio.",
  education:
    "Diploma in Informatica e Telecomunicazioni all'ITSOS Marie Curie (2019-2024). Certificazioni Cisco IT Essentials e CCNA 1.",
};

export type BeyondItem = {
  label: string;
  /** Logo di una tecnologia (Figma, Jira). */
  tech?: TechKey;
  /** Altrimenti un'icona generica. */
  icon?: "requirements" | "design" | "test" | "support" | "infra" | "team";
};

export const beyondCode = {
  title: "Oltre il codice",
  text: "Quello che viene prima e dopo: requisiti, progetto, interfaccia, test e supporto.",
  items: [
    { label: "Raccolta dei requisiti", icon: "requirements" },
    { label: "Progettazione", icon: "design" },
    { label: "Disegno UI in Figma", tech: "figma" },
    { label: "Lavoro in team", icon: "team" },
    { label: "Test", icon: "test" },
    { label: "Gestione del progetto con Jira", tech: "jira" },
    { label: "Assistenza ai clienti", icon: "support" },
    { label: "Infrastruttura informatica", icon: "infra" },
  ] satisfies BeyondItem[],
};
