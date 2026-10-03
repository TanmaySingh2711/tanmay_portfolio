import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CredentialCard } from "@/components/ui/CredentialCard";
import { Award } from "lucide-react";

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <Section id="certifications">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <CredentialCard
            key={cert.name}
            icon={<Award size={32} />}
            title={cert.name}
            subtitle={cert.issuer}
            year={cert.year}
            url={cert.url}
          />
        ))}
      </div>
    </Section>
  );
}
