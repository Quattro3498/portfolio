import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SquareTerminal, Code, MoveRight } from "lucide-react";
import Card from "@/components/Card";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function Home() {
  const projects = [
    {
      title: "Dream Dev Calendar",
      subtitle: "01 / REPOSITORY",
      description: "A sleek, web-based calendar application designed for managing and organizing events. Built with a full-stack JavaScript architecture, it offers a fast, responsive, and intuitive interface with powerful backend capabilities.",
      tags: ["JS", "NODE", "MariaDB"],
      link: "https://github.com/Quattro3498/dd-calendar",
      image: "/projects/calendar.png",
      version: "v3.0.0"
    },
    {
      title: "Dream Dev Manager",
      subtitle: "02 / REPOSITORY",
      description: "An integrated ecosystem featuring an advanced Discord Bot and a Web Server/API Backend. It is specifically designed for automated technical support management (Ticketing System) and the versioning of FiveM resources.",
      tags: ["JS", "NODE", "MariaDB"],
      link: "https://github.com/Quattro3498/dd-bot",
      image: "/projects/bot.png",
      version: "v1.0.0"
    },
    {
      title: "Fivem Resources",
      subtitle: "03 / REPOSITORY",
      description: "A collection of FiveM resources for the game Grand Theft Auto V. \n\nThese resources are designed to enhance the gameplay experience for players and server owners. ",
      tags: ["JS", "LUA", "MariaDB", "REACT JS"],
      link: "https://docs.dreamdev.store",
      image: "/projects/docs.png",
      version: "v1.0.0"
    }
  ]
  return (
    <div className={`font-body selection:bg-primary selection:text-on-primary`}>
      <div className="scanline"></div>
      <Header />
      <main className="matrix-bg min-h-screen pt-16">
        <section className="relative h-204 flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="space-y-6 max-w-4xl min-h-[40vh] flex flex-col justify-center">
            <div className="text-[0.6875rem] tracking-[0.2em] text-primary uppercase opacity-70 mb-2 h-4">
              <TypewriterEffect text="Establishing Secure Connection..." cursor={false} speed={30} />
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-8xl tracking-tighter text-primary m-0 glow-text uppercase min-h-[120px] md:min-h-[140px]">
              <span className="sr-only">Simone Quattromini Portfolio</span>
              <span aria-hidden="true">
                <TypewriterEffect text="Simone" delay={1200} speed={80} cursor={false} />
                <br />
                <TypewriterEffect text="Quattromini" delay={2000} speed={80} cursor={false} />
              </span>
            </h1>
            <p className="text-sm md:text-base tracking-[0.05em] text-on-surface-variant max-w-2xl mx-auto h-6 mt-4">
              <TypewriterEffect text="Initializing developer portfolio... [SYSTEM STATUS: OK]" delay={3000} speed={40} />
            </p>
            <AnimatedSection delay={5.5} direction="up" className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="group relative px-8 py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(156,255,147,0.4)] transition-all">
                <div className="flex items-center gap-3">
                  <SquareTerminal />
                  <span>System.Enter()</span>
                </div>
              </button>
              <a className="flex items-center gap-3 text-primary border border-primary/20 px-8 py-4 hover:bg-primary/5 transition-all text-sm uppercase tracking-widest font-headline font-bold" href="https://github.com/Quattro3498" target="_blank" rel="noopener noreferrer">
                <Code />
                Source Code Access
              </a>
            </AnimatedSection>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <span className="text-[0.625rem] tracking-[0.3em] uppercase">Scroll to Compile</span>
            <div className="w-px h-12 bg-linear-to-b from-primary to-transparent"></div>
          </div>
        </section>
        <section className="px-6 py-24 max-w-7xl mx-auto" id="projects">
          <div className="flex items-end justify-between mb-16 border-b border-primary/10 pb-6">
            <div>
              <h2 className="text-primary font-headline font-bold text-3xl tracking-tight uppercase">Featured_Projects</h2>
              <p className="text-on-surface-variant text-xs tracking-widest uppercase mt-2">./active_deployments --list</p>
            </div>
            <div className="hidden md:block text-primary/40 text-[0.625rem] tracking-widest uppercase">
              Total: {projects.length.toString().padStart(2, '0')} Entities Found
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <Card
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                  image={project.image}
                  version={project.version}
                />
              </AnimatedSection>
            ))}
          </div>
        </section>
        {/* <!-- Technical Stats Section --> */}
        <section className="py-24 bg-surface-container-lowest" id="stats">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col border-l-2 border-primary/20 pl-6 py-2">
                <div className="text-[0.625rem] text-on-surface-variant uppercase tracking-[0.2em]">Commits</div>
                <div className="text-3xl font-headline font-bold text-primary">500+</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col border-l-2 border-primary/20 pl-6 py-2">
                <div className="text-[0.625rem] text-on-surface-variant uppercase tracking-[0.2em]">Uptime</div>
                <div className="text-3xl font-headline font-bold text-primary">99.99%</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col border-l-2 border-primary/20 pl-6 py-2">
                <div className="text-[0.625rem] text-on-surface-variant uppercase tracking-[0.2em]">Projects</div>
                <div className="text-3xl font-headline font-bold text-primary">6+</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col border-l-2 border-primary/20 pl-6 py-2">
                <div className="text-[0.625rem] text-on-surface-variant uppercase tracking-[0.2em]">Bugs_Killed</div>
                <div className="text-3xl font-headline font-bold text-primary">∞</div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        {/* <!-- GitHub Access CTA --> */}
        <section className="py-32 flex flex-col items-center justify-center text-center px-6 border-y border-primary/5">
          <AnimatedSection direction="up" delay={0.2} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-8 border border-primary/30">
              <SquareTerminal />
            </div>
            <h2 className="font-headline font-bold text-3xl text-on-surface mb-4 uppercase tracking-tight">Full System Audit</h2>
            <p className="text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Review complete source code repositories, deployment logs, and technical whitepapers on GitHub.
            </p>
            <a className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-on-primary font-headline font-bold uppercase tracking-[0.2em] text-sm hover:glow-sm transition-all" href="#">
              <span>Access Repository</span>
              <MoveRight />
            </a>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
}
