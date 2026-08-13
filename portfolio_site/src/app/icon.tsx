import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#d80a20",
        color: "#ffffff",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 1.2,
      }}
    >
      RA
    </div>,
    { ...size },
  );
}
