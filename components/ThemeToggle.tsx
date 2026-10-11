"use client";

import { Moon, Sun } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage non disponibile: il tema vale solo per questa visita
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambia tema chiaro o scuro"
      className="grid size-10 place-items-center rounded-full border border-line text-fg transition-colors hover:bg-surface-2 active:scale-[0.96]"
    >
      <Moon size={18} weight="regular" className="theme-moon" aria-hidden />
      <Sun size={18} weight="regular" className="theme-sun" aria-hidden />
    </button>
  );
}
