import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent-red transition-colors">
                {project.name}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2.5 py-1 bg-accent-blue/10 text-accent-blue text-xs font-semibold rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-muted px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-blue hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue"
                >
                  <FaGithub size={18} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
