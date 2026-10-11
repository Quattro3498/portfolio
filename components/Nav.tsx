import { DownloadSimple, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/content";

const links = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#progetti", label: "Progetti" },
  { href: "#dreamdev", label: "Dream Development" },
  { href: "#competenze", label: "Competenze" },
  { href: "#contatti", label: "Contatti" },
];

export default function Nav() {
  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-40 border-b border-line">
      <nav
        aria-label="Principale"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8"
      >
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download
            aria-label="Scarica il CV"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-line px-3 text-sm font-medium transition-colors hover:bg-surface-2 active:scale-[0.96] md:px-4"
          >
            <DownloadSimple size={18} aria-hidden />
            <span className="hidden md:inline">CV</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profilo GitHub"
            className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:bg-surface-2 active:scale-[0.96]"
          >
            <GithubLogo size={18} aria-hidden />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
