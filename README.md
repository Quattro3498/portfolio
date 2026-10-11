# Simone Quattromini - Portfolio

Il mio portfolio da sviluppatore fullstack: progetti, stack, esperienza e contatti, in un'unica pagina.

**Sito online:** [simonequattromini.dreamdev.store](https://simonequattromini.dreamdev.store)

## Cosa c'è dentro

- **Hero** con presentazione e sfondo a punti interattivo.
- **Progetti** in una pila di card che si sovrappongono allo scroll (desktop), con screenshot, ruolo, tecnologie e link al repo.
- **Dream Development**: gli script FiveM che sviluppo e vendo sullo store, con anteprima e link al prodotto.
- **Stack** diviso per area (frontend, backend, AI, strumenti), distinguendo ciò che uso da ciò che ho solo studiato.
- **Chi sono**: esperienza, formazione, numeri e cosa faccio oltre al codice.
- **Contatti** e download del CV.
- Tema chiaro/scuro, `robots.txt`, `sitemap.xml` e pagina 404 personalizzata.

## Stack tecnico

- [Next.js](https://nextjs.org/) (App Router), React e TypeScript
- Tailwind CSS v4
- [GSAP](https://gsap.com/) + ScrollTrigger per le animazioni
- [Lenis](https://lenis.darkroom.engineering/) per lo scroll morbido
- [Phosphor Icons](https://phosphoricons.com/) e [Simple Icons](https://simpleicons.org/) per le icone
- Componenti adattati da [React Bits](https://github.com/DavidHDev/react-bits)

## Avvio in locale

Serve Node.js 20.9 o superiore.

```bash
git clone https://github.com/Quattro3498/portfolio.git
cd portfolio
npm install
npm run dev
```

Il sito è su [http://localhost:3000](http://localhost:3000).

| Comando         | Cosa fa                          |
| --------------- | -------------------------------- |
| `npm run dev`   | Server di sviluppo               |
| `npm run build` | Build di produzione              |
| `npm run start` | Avvia la build di produzione     |
| `npm run lint`  | Controllo con ESLint             |

## Struttura

```
app/          Layout, pagina, 404, robots e sitemap
components/   Sezioni della pagina e componenti di supporto
  bits/       Componenti adattati da React Bits (SplitText, Magnet, DotGrid)
lib/          content.ts (tutti i contenuti) e icone delle tecnologie
public/       Immagini dei progetti, di Dream Development e il CV
```

## Modificare i contenuti

Testi, progetti e link stanno tutti in [`lib/content.ts`](lib/content.ts), quindi non serve toccare i componenti:

- `profile`: nome, link GitHub/LinkedIn, email, `siteUrl` e percorso del CV.
- `hero`: titolo e testo iniziale.
- `projects`: i progetti. Gli screenshot vanno in `public/projects`.
- `stack`: i gruppi di competenze. Le icone sono in `components/TechIcon.tsx`.
- `dreamDev`: gli script dello store. Le immagini vanno in `public/dreamdev`.
- `about` e `beyondCode`: esperienza, formazione e attività oltre il codice.

## Note tecniche

- **Scroll morbido:** `components/SmoothScroll.tsx` sincronizza Lenis con il ticker di GSAP.
- **Pila dei progetti:** `components/ProjectStack.tsx` usa `position: sticky` in CSS e lo scrub di ScrollTrigger, solo su desktop.
- **React Bits:** i componenti in `components/bits/` sono adattati per rispettare `prefers-reduced-motion` ed evitare `useState` per la posizione del mouse.
- **Tema:** segue il sistema, con toggle e preferenza salvata in `localStorage`.
- **Accessibilità:** con `prefers-reduced-motion` Lenis e tutte le animazioni sono disattivate.

## Deploy

È un'app Next.js standard: funziona su Vercel o su qualunque host Node.js con `npm run build` e `npm run start`. Ricordati di aggiornare `siteUrl` in `lib/content.ts`, usato da sitemap e metadati.

## Crediti

Le immagini degli script FiveM appartengono a Dream Development. I componenti `SplitText`, `Magnet` e `DotGrid` derivano da React Bits di David Haz.

## Contatti

- GitHub: [Quattro3498](https://github.com/Quattro3498)
- LinkedIn: [simone-quattromini](https://www.linkedin.com/in/simone-quattromini/)
- Email: simonequattromini@gmail.com
