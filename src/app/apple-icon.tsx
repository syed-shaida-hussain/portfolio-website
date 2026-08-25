import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#f2f1ec",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -4,
          }}
        >
          S
          <span style={{ color: "#e0a458", marginLeft: 4 }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
