import { clsx, type ClassValue } from "clsx";

// Joins class names and drops falsy values. It does not resolve conflicting
// Tailwind classes, so combine only classes that set different properties.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
