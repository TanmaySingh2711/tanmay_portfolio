import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  const { name, title } = portfolioData.personal;

  return {
    name: `${name} | ${title}`,
    short_name: name,
    description: `Portfolio of ${name}, ${title}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#080a10",
    theme_color: "#080a10",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
