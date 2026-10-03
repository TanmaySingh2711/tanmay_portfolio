import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const { name, title, summary, siteUrl, github, linkedin, leetcode, hackerrank, geeksforgeeks } =
  portfolioData.personal;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} | ${title}`,
    template: `%s | ${name}`,
  },
  description: summary,
  keywords: [
    "Tanmay Singh",
    "AI Engineer",
    "Machine Learning",
    "Software Developer",
    "Portfolio",
    "Artificial Intelligence",
  ],
  authors: [{ name, url: siteUrl }],
  creator: name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${name} | ${title}`,
    description: summary,
    siteName: `${name} | Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} | ${title}`,
    description: summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080a10" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle: title,
  url: siteUrl,
  sameAs: [github, linkedin, leetcode, hackerrank, geeksforgeeks],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="darkreader-lock" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
