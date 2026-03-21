import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ERP Biz Apps — ERP & CRM Solutions for Growing Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1a3d 0%, #1d1d1f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #2563eb, #14b8a6)",
          }}
        />
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #2563eb, #14b8a6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "white",
            }}
          >
            E
          </div>
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          ERP Biz Apps
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#86868b",
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          ERP &amp; CRM Solutions for Growing Businesses
        </div>
        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "24px",
            fontSize: "16px",
            color: "#86868b",
          }}
        >
          <span>Business Central</span>
          <span style={{ color: "#424245" }}>·</span>
          <span>Salesforce</span>
          <span style={{ color: "#424245" }}>·</span>
          <span>Custom Development</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
