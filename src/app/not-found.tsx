import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-sm font-semibold text-accent-red mb-2">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent-red px-6 text-sm font-medium text-white shadow transition-colors hover:bg-accent-red/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-red"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
