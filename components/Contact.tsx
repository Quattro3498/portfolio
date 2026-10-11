import { ArrowUpRight, DownloadSimple, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Magnet from "./bits/Magnet";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contatti" className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-12 pb-24 md:px-8 md:pb-32">
      <div className="rounded-2xl border border-line bg-surface px-6 py-14 md:px-14 md:py-20">
        <h2 className="max-w-[16ch] text-4xl leading-[1.05] font-semibold tracking-tighter md:text-6xl">
          Lavoriamo insieme.
        </h2>
        <p className="mt-5 max-w-[52ch] text-muted md:text-lg">
          Hai un&apos;idea o un progetto da realizzare? Scrivimi due righe.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnet>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform active:scale-[0.97]"
            >
              Scrivimi su LinkedIn
              <ArrowUpRight size={16} weight="bold" aria-hidden />
            </a>
          </Magnet>
          <a
            href={profile.cv}
            download
            className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-surface-2 active:scale-[0.97]"
          >
            <DownloadSimple size={18} aria-hidden />
            Scarica il CV
          </a>
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          )}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            <GithubLogo size={18} aria-hidden />
            {profile.githubHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
