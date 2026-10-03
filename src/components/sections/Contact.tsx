import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const { personal } = portfolioData;

  const contactMethods = [
    {
      name: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s+/g, "")}`,
      external: false,
      icon: <Phone className="text-foreground" size={24} />,
    },
    {
      name: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      external: false,
      icon: <Mail className="text-accent-red" size={24} />,
    },
    {
      name: "GitHub",
      value: new URL(personal.github).pathname.replace(/^\/|\/$/g, ""),
      href: personal.github,
      external: true,
      icon: <FaGithub className="text-foreground" size={24} />,
    },
    {
      name: "LinkedIn",
      value: personal.name,
      href: personal.linkedin,
      external: true,
      icon: <FaLinkedin className="text-accent-blue" size={24} />,
    },
  ];

  return (
    <Section id="contact" className="bg-muted/30">
      <SectionHeading>Contact</SectionHeading>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="block"
            >
              <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="p-3 bg-muted rounded-lg group-hover:bg-background transition-colors">
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {method.name}
                  </p>
                  <p className="text-base font-semibold text-foreground break-words">
                    {method.value}
                  </p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
