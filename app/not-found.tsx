import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-dvh max-w-3xl place-content-center gap-6 px-4">
      <h1 className="text-4xl font-semibold tracking-tighter md:text-6xl">Pagina non trovata.</h1>
      <p className="text-muted">L&apos;indirizzo non esiste o è stato spostato.</p>
      <Link
        href="/"
        className="inline-flex h-12 w-fit items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-fg"
      >
        Torna alla home
      </Link>
    </main>
  );
}
