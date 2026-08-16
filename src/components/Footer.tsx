export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tanmay Singh
        </p>
        <p className="text-sm text-muted-foreground font-medium">
          AI Engineer
        </p>
      </div>
    </footer>
  );
}
