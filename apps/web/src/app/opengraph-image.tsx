import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Vinit Kumar - Full-Stack Software Engineer & Systems Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#09090b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 80px",
        fontFamily: "sans-serif",
        color: "#fafafa",
        border: "10px solid #18181b",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 18px",
            borderRadius: "9999px",
            background: "#18181b",
            border: "1px solid #27272a",
            color: "#d4d4d8",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#f97316",
            }}
          />
          <span>Available for Roles &bull; Pilani, Rajasthan</span>
        </div>

        <div
          style={{
            color: "#71717a",
            fontSize: "18px",
            fontFamily: "monospace",
          }}
        >
          vinitk81144@gmail.com
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            fontSize: "58px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fafafa",
          }}
        >
          Vinit Kumar
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            fontWeight: 400,
            maxWidth: "880px",
            lineHeight: 1.4,
          }}
        >
          Full-Stack Software Engineer &amp; Systems Builder. Building workflow
          automation engines, edge backends, and cloud platforms.
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {[
          "Go",
          "TypeScript",
          "Next.js",
          "PostgreSQL",
          "Docker",
          "Cloudflare Workers",
          "Redis",
        ].map((tech) => (
          <div
            key={tech}
            style={{
              padding: "8px 18px",
              borderRadius: "8px",
              background: "#18181b",
              border: "1px solid #27272a",
              color: "#e4e4e7",
              fontSize: "18px",
              fontFamily: "monospace",
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
