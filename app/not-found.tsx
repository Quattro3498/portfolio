import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SquareTerminal, Home } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function NotFound() {
  return (
    <div className={`font-body selection:bg-primary selection:text-on-primary`}>
      <div className="scanline"></div>
      <Header />
      <main className="matrix-bg min-h-screen pt-16 flex flex-col items-center justify-center">
        <section className="relative w-full flex flex-col items-center justify-center px-6 text-center overflow-hidden py-32">
          <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>

          <div className="space-y-6 max-w-4xl flex flex-col items-center justify-center z-10 relative mt-16">

            <AnimatedSection delay={0.1} className="w-24 h-24 bg-primary/10 flex items-center justify-center mb-8 border border-primary/30">
              <SquareTerminal className="w-10 h-10 text-primary animate-pulse" />
            </AnimatedSection>

            <div className="text-[0.6875rem] tracking-[0.2em] text-primary uppercase opacity-70 mb-2 h-4">
              <TypewriterEffect text="Error 404: System Override..." cursor={false} speed={30} />
            </div>

            <h1 className="font-headline font-bold text-6xl md:text-9xl tracking-tighter text-primary m-0 glow-text uppercase leading-none pb-4">
              <span className="sr-only">404</span>
              <span aria-hidden="true">
                <TypewriterEffect text="404" delay={800} speed={80} cursor={false} className="tracking-tight" />
              </span>
            </h1>

            <p className="text-sm md:text-base tracking-[0.05em] text-on-surface-variant max-w-2xl mx-auto mt-4 px-4 min-h-[48px]">
              <TypewriterEffect text="The endpoint you are trying to reach has been isolated or eradicated. Please refer back to the main node. [STATUS: FATAL ERROR]" delay={1500} speed={40} />
            </p>

            <AnimatedSection delay={3.5} direction="up" className="pt-10 flex items-center justify-center">
              <Link href="/" className="group relative px-8 py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(156,255,147,0.4)] transition-all flex items-center gap-3">
                <Home className="w-5 h-5" />
                <span>Return_to_Root()</span>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
