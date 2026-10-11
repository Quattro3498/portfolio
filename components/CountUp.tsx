"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// 1700 -> "1.700" (Intl in italiano non raggruppa i numeri a 4 cifre).
const format = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/**
 * Il numero sale da 0 al valore finale quando entra in vista: attira lo sguardo
 * sul dato piu' importante della sezione. Nell'HTML iniziale c'e' gia' il valore
 * finale, quindi senza JS o con reduced-motion si legge comunque.
 */
export default function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const state = { v: 0 };
        el.textContent = `${format(0)}${suffix}`;
        gsap.to(state, {
          v: to,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${format(state.v)}${suffix}`;
          },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
        return () => {
          el.textContent = `${format(to)}${suffix}`;
        };
      });
    },
    { scope: ref, dependencies: [to, suffix] }
  );

  return (
    <span ref={ref} className="tabular-nums">
      {format(to)}
      {suffix}
    </span>
  );
}
