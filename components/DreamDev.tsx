"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, PlayCircle } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { dreamDev } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Gli script sono tanti e vanno visti come una galleria: su desktop la sezione
 * resta agganciata e lo scroll verticale diventa un pan orizzontale. Su mobile
 * e con prefers-reduced-motion e' un normale scroll orizzontale con snap.
 */
export default function DreamDev() {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current;
        if (!el) return;
        const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);
        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: wrap }
  );

  return (
    <section
      id="dreamdev"
      ref={wrap}
      aria-label={dreamDev.title}
      className="relative scroll-px-4 snap-x snap-mandatory overflow-x-auto py-16 md:snap-none md:overflow-hidden md:py-0 md:motion-safe:overflow-hidden"
    >
      <div
        ref={track}
        className="flex w-max items-stretch gap-4 px-4 md:items-center md:gap-6 md:px-8 md:motion-safe:h-dvh"
      >
        <div className="flex w-[min(85vw,30rem)] shrink-0 snap-start flex-col justify-center gap-6 py-4 md:pr-10">
          <Image
            src={dreamDev.logo}
            alt="Logo Dream Development"
            width={96}
            height={96}
            className="size-24 object-contain"
          />
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-tighter md:text-5xl">
            {dreamDev.title}
          </h2>
          <div className="flex max-w-[44ch] flex-col gap-3 leading-relaxed text-muted md:text-lg">
            <p>{dreamDev.intro}</p>
            <p className="text-fg">{dreamDev.text}</p>
            <p className="text-sm">{dreamDev.role}</p>
          </div>
          <a
            href={dreamDev.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform active:scale-[0.97]"
          >
            Apri lo store
            <ArrowUpRight size={16} weight="bold" aria-hidden />
          </a>
        </div>

        {dreamDev.scripts.map((s) => (
          <article
            key={s.id}
            className="flex w-[min(82vw,26rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-surface md:h-[32rem]"
          >
            <div className="relative aspect-[2/1] bg-surface-2">
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                sizes="(min-width: 768px) 26rem, 82vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-5 p-5 md:p-6">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                {s.team && <p className="mt-2 text-sm leading-relaxed">{s.team}</p>}
              </div>
              <div>
                <ul className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={s.store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform active:scale-[0.97]"
                  >
                    Vedi sullo store
                    <ArrowUpRight size={14} weight="bold" aria-hidden />
                  </a>
                  {s.video && (
                    <a
                      href={s.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-surface-2 active:scale-[0.97]"
                    >
                      <PlayCircle size={16} aria-hidden />
                      Anteprima
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
        <div aria-hidden className="w-4 shrink-0 md:w-8" />
      </div>
    </section>
  );
}
