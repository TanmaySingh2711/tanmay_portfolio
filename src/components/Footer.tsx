import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { name, title } = portfolioData.personal;

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {name}
        </p>
        <p className="text-sm text-muted-foreground font-medium">
          {title}
        </p>
      </div>
    </footer>
  );
}
