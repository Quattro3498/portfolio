"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Project } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BASE_TOP = 88; // px: sotto la nav
const STEP = 18; // px: quanto "affiora" ogni carta sotto la successiva

/**
 * Pila di carte: su desktop ogni carta resta agganciata in alto (position:
 * sticky) e, mentre arriva la successiva, la precedente si rimpicciolisce.
 * Serve a far leggere i progetti uno alla volta, in ordine. Su mobile e con
 * prefers-reduced-motion e' una lista normale.
 */
export default function ProjectStack({ projects }: { projects: Project[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]");
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          const inner = card.querySelector("[data-stack-inner]");
          if (!next || !inner) return;
          // Valori di partenza espliciti: GSAP interpola "none" come brightness(0).
          // Filtro al posto di opacity: la carta resta opaca e non fa trasparire quella sotto.
          gsap.fromTo(inner, { scale: 1, filter: "brightness(1)" }, {
            scale: 0.94,
            filter: "brightness(0.55)",
            transformOrigin: "50% 0%",
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: `top ${BASE_TOP + (i + 1) * STEP}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative">
      {projects.map((p, i) => (
        <div
          key={p.id}
          data-stack-card
          className="mb-6 md:sticky md:mb-[10dvh] md:h-[68dvh] md:min-h-[27rem] last:mb-0"
          style={{ top: BASE_TOP + i * STEP }}
        >
          <article
            data-stack-inner
            className="grid h-full overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-12"
          >
            <div
              className={`relative bg-surface-2 md:col-span-7 ${p.fit === "phone" ? "min-h-[30rem] md:min-h-0" : "min-h-60"}`}
            >
              {p.image && p.fit === "phone" ? (
                // Screenshot verticale con sfondo opaco: lo mostro come tile arrotondata.
                <div className="dots absolute inset-0 flex items-center justify-center p-5">
                  <div className="relative aspect-[428/951] h-full max-w-full overflow-hidden rounded-2xl border border-line">
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? p.title}
                      fill
                      sizes="(min-width: 768px) 25vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : p.image ? (
                <Image
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className={p.fit === "contain" ? "object-contain p-6" : "object-cover object-left-top"}
                />
              ) : p.logo ? (
                <div className="dots flex h-full min-h-60 items-center justify-center p-6">
                  <div className="grid size-44 place-items-center rounded-2xl bg-[#f4f5f6] p-6 md:size-56">
                    <Image
                      src={p.logo}
                      alt={p.logoAlt ?? p.title}
                      width={160}
                      height={160}
                      className="size-full object-contain"
                    />
                  </div>
                </div>
              ) : (
                // Nessuno screenshot disponibile: pannello tipografico con il nome del progetto.
                <div className="dots flex h-full min-h-60 items-center justify-center p-6" aria-hidden>
                  <span className="text-5xl font-semibold tracking-tighter text-fg/15 sm:text-6xl md:text-7xl">
                    {p.title}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between gap-8 p-6 md:col-span-5 md:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
                  {p.status && (
                    <span className="rounded-full bg-tint px-3 py-1 text-xs font-semibold text-accent">
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">{p.description}</p>
                {p.role && (
                  <p className="mt-4 max-w-[52ch] text-sm leading-relaxed">
                    <span className="font-medium">Il mio ruolo:</span>{" "}
                    <span className="text-muted">{p.role}</span>
                  </p>
                )}
              </div>
              <div>
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {p.privateCode && <p className="text-sm text-muted">Codice non pubblico.</p>}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform active:scale-[0.97]"
                    >
                      <GithubLogo size={18} aria-hidden />
                      Codice su GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform active:scale-[0.97]"
                    >
                      {p.liveLabel ?? "Apri il sito"}
                      <ArrowUpRight size={16} weight="bold" aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
