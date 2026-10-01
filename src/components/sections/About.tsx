import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading>About</SectionHeading>
      <div className="max-w-3xl text-lg text-muted-foreground leading-relaxed space-y-6">
        <p>
          I am an aspiring AI Engineer and currently a final-year B.E. student specializing in 
          Artificial Intelligence & Data Science. I build AI software that solves practical
          problems, working mainly in Python along with TypeScript, JavaScript, and SQL.
        </p>
        <p>
          My core interests lie in machine learning, deep learning, computer vision, and web
          development. So far I have built a hand-gesture game controller that recognizes
          gestures with 99% accuracy, a self-learning agent that plays a game to find bugs on
          its own, and an AI shopping assistant that completes secure test payments.
        </p>
        <p>
          As a continuous learner, I thrive on adapting to new technologies and methodologies to 
          build scalable, intelligent systems that make a tangible impact.
        </p>
      </div>
    </Section>
  );
}
