import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading>About</SectionHeading>
      <div className="max-w-3xl text-lg text-muted-foreground leading-relaxed space-y-6">
        {portfolioData.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
