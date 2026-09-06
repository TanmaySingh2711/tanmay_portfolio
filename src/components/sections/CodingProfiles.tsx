import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";

export function CodingProfiles() {
  const { personal } = portfolioData;

  const profiles = [
    {
      name: "GeeksforGeeks",
      url: personal.geeksforgeeks,
      icon: <SiGeeksforgeeks className="text-[#2F8D46]" size={32} />,
      color: "hover:border-[#2F8D46]/50 hover:shadow-[#2F8D46]/10",
    },
    {
      name: "HackerRank",
      url: personal.hackerrank,
      icon: <SiHackerrank className="text-[#00EA64]" size={32} />,
      color: "hover:border-[#00EA64]/50 hover:shadow-[#00EA64]/10",
    },
    {
      name: "LeetCode",
      url: personal.leetcode,
      icon: <SiLeetcode className="text-[#FFA116]" size={32} />,
      color: "hover:border-[#FFA116]/50 hover:shadow-[#FFA116]/10",
    },
  ];

  return (
    <Section id="coding-profiles">
      <SectionHeading>Coding Profiles</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center bg-card border border-border rounded-xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${profile.color}`}
          >
            <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
              {profile.icon}
            </div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              {profile.name}
            </h3>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-muted px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-blue hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue"
            >
              <span>View Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
