import { useEffect, useState } from "react";

const links = [
  ["About", "about"],
  ["Journey", "journey"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Project", "project"],
  ["Awards", "awards"],
  ["Contact", "contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a
          href="#top"
          className={`font-display text-lg tracking-tight transition-colors ${
            scrolled ? "text-forest" : "text-forest"
          }`}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-mustard mr-2 align-middle" />
          Shivansh<span className="text-burnt">.</span>
        </a>
        <nav
          className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all ${
            scrolled ? "glass shadow-md" : "bg-transparent"
          }`}
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-1.5 text-sm text-forest/80 hover:text-forest hover:bg-cream rounded-full transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-forest text-cream px-4 py-2 text-sm hover:bg-forest-deep transition-colors"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
