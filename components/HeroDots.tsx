"use client";

import { useSyncExternalStore } from "react";
import DotGrid from "./bits/DotGrid";

type Theme = "light" | "dark";

// Segue data-theme (impostato dallo script nel layout e dal toggle).
function subscribe(onChange: () => void) {
  const obs = new MutationObserver(onChange);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const getServerTheme = (): Theme => "dark";

const colors: Record<Theme, { base: string; active: string }> = {
  dark: { base: "#2b2e33", active: "#86e08f" },
  light: { base: "#c9cdd3", active: "#15803d" },
};

/**
 * Visual della hero: griglia di punti React Bits (DotGrid) che reagisce al
 * puntatore. I colori seguono il tema. Decorativa, quindi nascosta ai lettori
 * di schermo.
 */
export default function HeroDots() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const c = colors[theme];

  return (
    <div
      aria-hidden
      className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <DotGrid
        dotSize={6}
        gap={20}
        baseColor={c.base}
        activeColor={c.active}
        proximity={130}
        shockRadius={220}
        shockStrength={4}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
