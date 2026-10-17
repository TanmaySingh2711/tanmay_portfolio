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
            className="group flex flex-col bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
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

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 flex-1">
              {project.description}
            </p>

            <div className="pt-4 border-t border-border">
              <CardLink href={project.githubUrl}>
                <FaGithub size={18} aria-hidden="true" />
                <span>View on GitHub</span>
              </CardLink>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
