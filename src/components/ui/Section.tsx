import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 scroll-mt-16", className)}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Fades in while scrolling into view; see `.reveal` in globals.css. */}
        <div className="reveal">{children}</div>
      </div>
    </section>
  );
}
