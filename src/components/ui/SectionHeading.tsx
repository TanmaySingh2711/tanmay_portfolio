import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-12", className)}>
      {children}
      <span className="block w-12 h-1 bg-accent-red mt-4 rounded-full"></span>
    </h2>
  );
}
