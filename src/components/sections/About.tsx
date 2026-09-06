import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading>About</SectionHeading>
      <div className="max-w-3xl text-lg text-muted-foreground leading-relaxed space-y-6">
        <p>
          I am an aspiring AI Engineer and currently a final-year B.E. student specializing in 
          Artificial Intelligence & Data Science. I have cultivated a strong technical foundation 
          in languages such as Java, Python, C, and SQL. 
        </p>
        <p>
          My core interests lie at the intersection of Machine Learning, Artificial Intelligence, 
          and modern software development. I am driven by the challenge of translating complex 
          data into actionable, real-world solutions. 
        </p>
        <p>
          As a continuous learner, I thrive on adapting to new technologies and methodologies to 
          build scalable, intelligent systems that make a tangible impact.
        </p>
      </div>
    </Section>
  );
}
