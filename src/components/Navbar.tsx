"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Coding Profiles", href: "#coding-profiles" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Certifications", href: "#certifications" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const linkRefs = React.useRef(new Map<string, HTMLAnchorElement>());
  const indicatorRef = React.useRef<HTMLSpanElement>(null);

  // Slides the underline below the active desktop link. It is moved by
  // writing styles directly, so scrolling does not re-render the navbar.
  React.useEffect(() => {
    const bar = indicatorRef.current;
    if (!bar) return;

    const place = () => {
      const link = linkRefs.current.get(activeSection);
      if (!link) {
        bar.style.opacity = "0";
        return;
      }
      // When the bar first appears, put it in place before fading it in, so
      // it does not slide in from the left edge of the navbar.
      const wasHidden = bar.style.opacity !== "1";
      if (wasHidden) bar.style.transition = "none";
      bar.style.width = `${link.offsetWidth}px`;
      bar.style.transform = `translateX(${link.offsetLeft}px)`;
      if (wasHidden) {
        void bar.offsetWidth; // apply the position before turning transitions back on
        bar.style.transition = "";
      }
      bar.style.opacity = "1";
    };

    place();
    // Link widths change with the window size and once the web font loads.
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [activeSection]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight the last section whose top has scrolled past the navbar.
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      // The last section can be too short to reach that point, so treat the
      // bottom of the page as being inside it.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActiveSection(atBottom ? sections[sections.length - 1] : current);
    };

    // Run once so a reload mid-page highlights the right link immediately.
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl lg:text-2xl font-bold tracking-tight text-foreground hover:text-accent-red transition-colors"
          >
            TS
          </a>

          {/* Desktop Nav. The links fill the bar's height so the underline
              sits on its bottom edge. Text grows only from xl, because nine
              links at 16px do not fit at 1024px. */}
          <nav className="relative hidden lg:flex self-stretch items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              return (
                <a
                  key={link.name}
                  ref={(el) => {
                    if (el) linkRefs.current.set(id, el);
                    else linkRefs.current.delete(id);
                  }}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  aria-current={activeSection === id ? "location" : undefined}
                  className={cn(
                    "flex h-full items-center text-sm xl:text-base font-medium transition-colors hover:text-accent-blue",
                    activeSection === id ? "text-accent-blue" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
            <ThemeToggle />
            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-[3px] rounded-full bg-accent-blue opacity-0 transition-[transform,width,opacity] duration-300 ease-out motion-reduce:transition-none"
            />
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: grid rows animate from 0fr to 1fr so the height eases
          open without measuring it, and `inert` keeps the closed menu out of
          the tab order and away from screen readers. */}
      <div
        id="mobile-nav-menu"
        inert={!isMobileMenuOpen}
        className={cn(
          "lg:hidden grid bg-background transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none",
          isMobileMenuOpen
            ? "grid-rows-[1fr] opacity-100 border-b border-border"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  activeSection === link.href.substring(1)
                    ? "text-accent-blue"
                    : "text-foreground"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
