import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Journey, Experience, Skills, Project, Awards, Vision, Contact } from "@/components/portfolio/Sections";
import { useReveal } from "@/hooks/use-reveal";

export default function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Journey />
      <Experience />
      <Skills />
      <Project />
      <Awards />
      <Vision />
      <Contact />
    </main>
  );
}
