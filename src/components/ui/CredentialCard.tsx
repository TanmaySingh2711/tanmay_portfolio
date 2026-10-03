import { ExternalLink } from "lucide-react";
import { getCertificateButtonType } from "@/data/portfolio";

interface CredentialCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  year: string;
  url: string;
}

export function CredentialCard({ icon, title, subtitle, year, url }: CredentialCardProps) {
  return (
    <div className="flex flex-col bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="mb-4 text-accent-red">{icon}</div>
      <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">{title}</h3>
      <div className="flex items-center justify-between gap-3 mt-auto pt-4 mb-6 text-sm text-muted-foreground">
        <span className="font-medium">{subtitle}</span>
        <span className="bg-muted px-2 py-1 rounded-md shrink-0">{year}</span>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-muted px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-blue hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue"
      >
        <span>{getCertificateButtonType(url)}</span>
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
