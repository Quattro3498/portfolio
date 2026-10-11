import { Blueprint, Bug, ClipboardText, HardDrives, Headset, UsersThree } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import TechIcon, { hasIcon } from "./TechIcon";
import { beyondCode, stack, type BeyondItem, type StackGroup, type StackItem } from "@/lib/content";

function Chip({ item, muted = false }: { item: StackItem; muted?: boolean }) {
  return (
    <li
      className={
        muted
          ? "inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3.5 py-2 text-sm text-muted"
          : "inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3.5 py-2 text-sm"
      }
    >
      {hasIcon(item.key) && <TechIcon name={item.key} size={16} />}
      {item.label}
    </li>
  );
}

function Chips({ group }: { group: StackGroup }) {
  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-wrap gap-2">
        {group.main.map((it) => (
          <Chip key={it.key} item={it} />
        ))}
      </ul>
      {group.studied.length > 0 && (
        <div>
          <p className="mb-2 text-xs text-muted">Viste e studiate</p>
          <ul className="flex flex-wrap gap-2">
            {group.studied.map((it) => (
              <Chip key={it.key} item={it} muted />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const beyondIcons = {
  requirements: ClipboardText,
  design: Blueprint,
  test: Bug,
  support: Headset,
  infra: HardDrives,
  team: UsersThree,
} as const;

function BeyondChip({ item }: { item: BeyondItem }) {
  const Icon = item.icon ? beyondIcons[item.icon] : null;
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3.5 py-2 text-sm">
      {item.tech && hasIcon(item.tech) && <TechIcon name={item.tech} size={16} />}
      {Icon && <Icon size={16} aria-hidden />}
      {item.label}
    </li>
  );
}

// Bento a 5 celle (1+2, 2+1, 3 a tutta larghezza), fondi diversi. (1+2 sopra, 2+1 sotto), fondi diversi.
const cellSpan: Record<string, string> = {
  frontend: "md:col-span-1",
  backend: "md:col-span-2",
  ai: "md:col-span-2",
  tooling: "md:col-span-1",
};
const cellBg: Record<string, string> = {
  frontend: "bg-surface",
  backend: "bg-gradient-to-br from-tint to-surface",
  ai: "bg-gradient-to-tr from-tint to-surface",
  tooling: "bg-surface dots",
};

export default function Stack() {
  return (
    <section id="competenze" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <h2 className="max-w-[20ch] text-3xl font-semibold tracking-tighter md:text-5xl">
        Le tecnologie con cui lavoro
      </h2>
      <p className="mt-4 max-w-[60ch] text-muted">
        Quelle in evidenza le uso nei progetti. Le altre le ho viste o studiate.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {stack.map((g, i) => (
          <Reveal key={g.id} delay={i * 0.08} className={cellSpan[g.id]}>
            <div
              className={`flex h-full flex-col justify-between gap-8 rounded-2xl border border-line p-6 md:p-8 ${cellBg[g.id]}`}
            >
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{g.title}</h3>
                <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-muted">{g.text}</p>
              </div>
              <Chips group={g} />
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.1} className="md:col-span-3">
          <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-gradient-to-bl from-tint to-surface p-6 md:flex-row md:items-end md:p-8">
            <div className="md:max-w-sm">
              <h3 className="text-xl font-semibold tracking-tight">{beyondCode.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{beyondCode.text}</p>
            </div>
            <ul className="flex flex-wrap gap-2 md:max-w-2xl md:justify-end">
              {beyondCode.items.map((it) => (
                <BeyondChip key={it.label} item={it} />
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
