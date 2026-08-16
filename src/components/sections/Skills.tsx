import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <Section id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div 
            key={index} 
            className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium transition-colors hover:bg-accent-blue/10 hover:text-accent-blue"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
