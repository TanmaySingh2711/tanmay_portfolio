import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CredentialCard } from "@/components/ui/CredentialCard";
import { BookOpen } from "lucide-react";

export function Courses() {
  const { courses } = portfolioData;

  return (
    <Section id="courses">
      <SectionHeading>Courses</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CredentialCard
            key={course.name}
            icon={<BookOpen size={32} />}
            title={course.name}
            subtitle={course.provider}
            year={course.year}
            url={course.url}
          />
        ))}
      </div>
    </Section>
  );
}
