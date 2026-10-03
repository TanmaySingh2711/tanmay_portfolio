"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Reads whether we've hydrated on the client without calling setState from
// inside an effect (which would trigger an extra render pass). The server
// snapshot is always `false`, so the first client render still matches the
// server-rendered markup and avoids a hydration mismatch.
function useHasMounted() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  // `resolvedTheme` is the theme actually on screen; `theme` can be "system",
  // which would make the first click a no-op when the OS is already light.
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useHasMounted();

  if (!mounted) {
    return <div className={cn("w-10 h-10", className)} />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center rounded-md w-10 h-10 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-red",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
