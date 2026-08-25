import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#f2f1ec",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          S
          <span style={{ color: "#e0a458", marginLeft: 1 }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
