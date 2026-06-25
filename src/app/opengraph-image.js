import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const chips = ["React", "Next.js", "React Native", "Vue", "TypeScript"];
  const domain = siteConfig.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b1120",
          backgroundImage:
            "radial-gradient(900px 520px at 100% -5%, rgba(59,130,246,0.30), transparent 60%), radial-gradient(760px 520px at -5% 105%, rgba(34,211,238,0.18), transparent 60%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        {/* brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 34,
            fontWeight: 700,
            color: "#60a5fa",
            letterSpacing: 1,
          }}
        >
          &lt;jasmin/&gt;
        </div>

        {/* name */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            marginTop: 28,
            lineHeight: 1.04,
            backgroundImage: "linear-gradient(90deg,#3b82f6,#22d3ee)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Jasmin Bhesaniya
        </div>

        {/* role */}
        <div style={{ display: "flex", fontSize: 44, marginTop: 18, color: "#cbd5e1" }}>
          {siteConfig.jobTitle}
        </div>

        {/* chips */}
        <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                fontSize: 26,
                padding: "10px 22px",
                borderRadius: 999,
                color: "#93c5fd",
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.35)",
              }}
            >
              {c}
            </div>
          ))}
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 56,
            fontSize: 28,
            color: "#64748b",
          }}
        >
          {domain}
        </div>
      </div>
    ),
    { ...size }
  );
}
