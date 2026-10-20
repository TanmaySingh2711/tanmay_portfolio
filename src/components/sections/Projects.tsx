import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardLink } from "@/components/ui/CardLink";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group flex flex-col overflow-hidden bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            {/* The screenshots have different shapes, so each one is shown whole
                inside a 16:9 frame. The frame colour matches their dark
                backgrounds, so the spare space blends in. */}
            <div className="relative aspect-video border-b border-border bg-[#07080c]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent-red transition-colors">
                {project.name}
              </h3>

              <ul className="flex flex-wrap gap-2 mb-5" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-2.5 py-1 bg-accent-blue/10 text-accent-blue text-xs font-semibold rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className="list-disc pl-5 space-y-2 marker:text-accent-red text-muted-foreground text-sm md:text-base leading-relaxed mb-8 flex-1">
                {project.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <CardLink href={project.githubUrl}>
                  <FaGithub size={18} aria-hidden="true" />
                  <span>View on GitHub</span>
                </CardLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
