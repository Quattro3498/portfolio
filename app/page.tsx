import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectStack from "@/components/ProjectStack";
import DreamDev from "@/components/DreamDev";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <section id="progetti" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
          <h2 className="max-w-[20ch] text-3xl font-semibold tracking-tighter md:text-5xl">
            Progetti
          </h2>
          <p className="mt-4 mb-12 max-w-[60ch] text-muted">
            Applicazioni, bot e utility. Alcuni hanno il codice su GitHub, altri sono privati.
          </p>
          <ProjectStack projects={projects} />
        </section>
        <DreamDev />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
