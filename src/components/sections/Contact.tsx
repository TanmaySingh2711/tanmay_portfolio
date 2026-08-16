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
      href: `tel:${personal.phone.replace(/\s+/g, '')}`,
      icon: <Phone className="text-foreground" size={24} />,
    },
    {
      name: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: <Mail className="text-accent-red" size={24} />,
    },
    {
      name: "GitHub",
      value: "TanmaySingh2711",
      href: personal.github,
      icon: <FaGithub className="text-foreground" size={24} />,
    },
    {
      name: "LinkedIn",
      value: "Tanmay Singh",
      href: personal.linkedin,
      icon: <FaLinkedin className="text-accent-blue" size={24} />,
    },
  ];

  return (
    <Section id="contact" className="bg-muted/30">
      <SectionHeading>Contact</SectionHeading>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const content = (
              <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="p-3 bg-muted rounded-lg group-hover:bg-background transition-colors">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">
                    {method.name}
                  </h4>
                  <p className="text-base font-semibold text-foreground">
                    {method.value}
                  </p>
                </div>
                {method.href && (
                  <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            );

            if (method.href) {
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.name !== "Email" && method.name !== "Phone" ? "_blank" : undefined}
                  rel={method.name !== "Email" && method.name !== "Phone" ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </Section>
  );
}
