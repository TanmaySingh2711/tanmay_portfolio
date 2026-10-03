import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  return (
    <Section id="education" className="bg-muted/30">
      <SectionHeading>Education</SectionHeading>
      <div className="max-w-4xl relative">
        {education.map((item, index) => (
          <div key={index} className="relative mb-8 last:mb-0">
            
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {item.degree}
                  </h3>
                  <div className="flex items-center text-muted-foreground gap-2 mb-1">
                    <GraduationCap size={18} className="text-accent-red" />
                    <span className="font-medium">{item.institution}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground gap-2">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium w-fit">
                    <Calendar size={14} />
                    <span>{item.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-red/10 text-accent-red text-sm font-medium w-fit">
                    <Award size={14} />
                    <span>CGPA: {item.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
