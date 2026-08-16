import { portfolioData, getCertificateButtonType } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, Award } from "lucide-react";

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <Section id="certifications">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="mb-4 text-accent-red">
              <Award size={32} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
              {cert.name}
            </h3>
            <div className="flex items-center justify-between mt-auto pt-4 mb-6 text-sm text-muted-foreground">
              <span className="font-medium">{cert.issuer}</span>
              <span className="bg-muted px-2 py-1 rounded-md">{cert.year}</span>
            </div>
            
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-muted px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-blue hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue"
            >
              <span>{getCertificateButtonType(cert.url)}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
