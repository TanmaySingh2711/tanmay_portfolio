import { ExternalLink } from "lucide-react";

interface CardLinkProps {
  href: string;
  children: React.ReactNode;
}

// Full-width button at the bottom of a card that opens `href` in a new tab.
export function CardLink({ href, children }: CardLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-muted px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-blue hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue"
    >
      {children}
      <ExternalLink size={14} aria-hidden="true" />
    </a>
  );
}
