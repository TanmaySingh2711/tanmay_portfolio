import { portfolioData } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-foreground">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-accent-blue mb-6">
            {personal.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            {personal.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent-red px-8 text-sm font-medium text-white shadow transition-colors hover:bg-accent-red/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-red"
            >
              View Resume
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-blue transition-colors p-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-muted-foreground hover:text-accent-red transition-colors p-2"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
