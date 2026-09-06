import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  const { name, title } = portfolioData.personal;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#080a10",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 12,
            background: "#ffffff",
            color: "#080a10",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          TS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#f9fafb",
            marginBottom: 16,
          }}
        >
          {name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#3b82f6" }}>
          {title}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
