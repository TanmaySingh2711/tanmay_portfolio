import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CredentialCard } from "@/components/ui/CredentialCard";
import { Trophy } from "lucide-react";

export function Hackathons() {
  const { hackathons } = portfolioData;

  return (
    <Section id="hackathons">
      <SectionHeading>Hackathons</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hackathons.map((hackathon) => (
          <CredentialCard
            key={hackathon.name}
            icon={<Trophy size={32} />}
            title={hackathon.name}
            subtitle={hackathon.level}
            year={hackathon.year}
            url={hackathon.url}
          />
        ))}
      </div>
    </Section>
  );
}
