"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[var(--background)] text-[var(--foreground)]">
      <div className="text-center">
        <p className="text-sm font-semibold text-accent-red mb-2">Error</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          An unexpected error occurred while loading this page.
        </p>
        <button
          onClick={() => retry()}
          className="inline-flex h-11 items-center justify-center rounded-md bg-accent-red px-6 text-sm font-medium text-white shadow transition-colors hover:bg-accent-red/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-red"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
