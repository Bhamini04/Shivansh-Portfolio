import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Journey, Experience, Skills, Project, Awards, Vision, Contact } from "@/components/portfolio/Sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivansh Jaiswal — Future Business Leader & Marketing Professional" },
      { name: "description", content: "Portfolio of Shivansh Jaiswal: BBA student turning customer insight into marketing strategy, sales excellence and business growth." },
      { property: "og:title", content: "Shivansh Jaiswal — Marketing & Business Portfolio" },
      { property: "og:description", content: "From understanding customers to driving growth. CRM, sales and marketing case studies." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
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
