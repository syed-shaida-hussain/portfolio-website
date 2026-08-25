import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { ScrollProgress } from "@/components/scroll-progress";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-100 -translate-y-24 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Capabilities />
        <Education />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
