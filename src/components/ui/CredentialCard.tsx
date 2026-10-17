import { CardLink } from "@/components/ui/CardLink";

interface CredentialCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  year: string;
  url: string;
}

export function CredentialCard({ icon, title, subtitle, year, url }: CredentialCardProps) {
  // Local PDFs are opened directly; any other link points to the issuer's
  // verification page.
  const label = url.toLowerCase().endsWith(".pdf") ? "View Certificate" : "Verify Certificate";

  return (
    <div className="flex flex-col bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="mb-4 text-accent-red" aria-hidden="true">{icon}</div>
      <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">{title}</h3>
      <div className="flex items-center justify-between gap-3 mt-auto pt-4 mb-6 text-sm text-muted-foreground">
        <span className="font-medium">{subtitle}</span>
        <span className="bg-muted px-2 py-1 rounded-md shrink-0">{year}</span>
      </div>
      <CardLink href={url}>{label}</CardLink>
    </div>
  );
}
