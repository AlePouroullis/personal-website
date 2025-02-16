import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Alé Pouroullis - Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Geist",
        }}
      >
        <img
          src="logo.svg"
          alt="AP Logo"
          width={120}
          height={120}
          style={{ marginBottom: 40 }}
        />
        <h1
          style={{
            fontSize: 60,
            fontWeight: "bold",
            color: "#1a1a1a",
            marginBottom: 20,
          }}
        >
          Alé Pouroullis
        </h1>
        <p
          style={{
            fontSize: 30,
            color: "#666666",
          }}
        >
          Software Engineer
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
