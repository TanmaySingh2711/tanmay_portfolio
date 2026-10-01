import { portfolioData, getCertificateButtonType } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, Trophy } from "lucide-react";

export function Hackathons() {
  const { hackathons } = portfolioData;

  return (
    <Section id="hackathons">
      <SectionHeading>Hackathons</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hackathons.map((hackathon, index) => (
          <div
            key={index}
            className="flex flex-col bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="mb-4 text-accent-red">
              <Trophy size={32} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
              {hackathon.name}
            </h3>
            <div className="flex items-center justify-between mt-auto pt-4 mb-6 text-sm text-muted-foreground">
              <span className="font-medium">{hackathon.level}</span>
              <span className="bg-muted px-2 py-1 rounded-md">{hackathon.year}</span>
            </div>

            <a
              href={hackathon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-muted px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-blue hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue"
            >
              <span>{getCertificateButtonType(hackathon.url)}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
