import { ArrowDown, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import SplitText from "./bits/SplitText";
import Magnet from "./bits/Magnet";
import Reveal from "./Reveal";
import HeroDots from "./HeroDots";
import { hero, profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-dvh max-w-7xl items-center px-4 pt-24 pb-12 md:px-8">
      <div className="grid w-full items-center gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <SplitText
            tag="h1"
            text={hero.title}
            splitType="words"
            textAlign="left"
            delay={70}
            duration={1}
            rootMargin="0px"
            from={{ opacity: 0, y: 36 }}
            to={{ opacity: 1, y: 0 }}
            className="text-4xl leading-[1.05] font-semibold tracking-tighter sm:text-5xl lg:text-6xl"
          />
          <Reveal delay={0.45} className="mt-6 max-w-[48ch]">
            <p className="text-base leading-relaxed text-muted md:text-lg">{hero.text}</p>
          </Reveal>
          <Reveal delay={0.6} className="mt-9">
            <div className="flex flex-wrap items-center gap-4">
              <Magnet>
                <a
                  href="#progetti"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform active:scale-[0.97]"
                >
                  Vedi i progetti
                  <ArrowDown size={16} weight="bold" aria-hidden />
                </a>
              </Magnet>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-surface-2 active:scale-[0.97]"
              >
                <GithubLogo size={18} aria-hidden />
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="md:col-span-5">
          <HeroDots />
        </Reveal>
      </div>
    </section>
  );
}
