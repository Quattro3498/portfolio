import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="chi-sono" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <h2 className="max-w-[16ch] text-3xl leading-[1.05] font-semibold tracking-tighter md:text-5xl">
            {about.title}
          </h2>
          <p className="mt-5 max-w-[46ch] leading-relaxed text-muted md:text-lg">{about.text}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6">
            {about.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
                <dd className="order-1 text-4xl font-semibold tracking-tighter text-accent md:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-7">
          <ol className="flex flex-col gap-8">
            {about.experience.map((e, i) => (
              <li key={`${e.period}-${e.title}`}>
                <Reveal delay={i * 0.06}>
                  <div className="grid gap-1 md:grid-cols-[9rem_1fr] md:gap-6">
                    <p className="font-mono text-sm text-muted">{e.period}</p>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{e.title}</h3>
                      <p className="mt-1 max-w-[58ch] text-sm leading-relaxed text-muted">{e.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-[58ch] border-t border-line pt-6 text-sm leading-relaxed text-muted">
            {about.education} {about.languages}
          </p>
        </div>
      </div>
    </section>
  );
}
