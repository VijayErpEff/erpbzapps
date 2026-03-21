"use client";

type LogoProps = {
  className?: string;
  size?: number;
  variant?: "color" | "white" | "dark";
};

/**
 * ERP Biz Apps — "The Stack" logomark.
 *
 * Three isometric layers representing the three pillars:
 * ERP (Business Central) · CRM (Salesforce) · Custom Development
 * — unified into a single integrated platform.
 *
 * The gradient flows from brand blue (top) through to teal (bottom),
 * with 3D face shading for depth. Edge highlights add premium polish.
 * Standalone mark — no container — like Apple, Stripe, Airbnb.
 */
export default function Logo({
  className = "",
  size = 32,
  variant = "color",
}: LogoProps) {
  const id = `l${Math.random().toString(36).slice(2, 8)}`;

  /* ── colour palettes ─────────────────────────────────────────── */
  const palette = {
    color: {
      t: ["#3b82f6", "#14b8a6"], // top face: sky blue → teal
      l: ["#2563eb", "#0d9488"], // left face: brand blue → darker teal
      r: ["#1d4ed8", "#0f766e"], // right face: deep blue → darkest teal
    },
    white: {
      t: ["rgba(255,255,255,0.95)", "rgba(255,255,255,0.85)"],
      l: ["rgba(255,255,255,0.70)", "rgba(255,255,255,0.55)"],
      r: ["rgba(255,255,255,0.50)", "rgba(255,255,255,0.35)"],
    },
    dark: {
      t: ["#48484a", "#3a3a3c"],
      l: ["#2c2c2e", "#1c1c1e"],
      r: ["#1c1c1e", "#0e0e10"],
    },
  }[variant];

  /*
   * Geometry (viewBox 0 0 40 40):
   *
   * Layer 1  diamond y 2–10   sides y 10–13
   * Gap      y 13–15
   * Layer 2  diamond y 15–23  sides y 23–26
   * Gap      y 26–28
   * Layer 3  diamond y 28–36  sides y 36–39
   *
   * Width x 9–31 (22 units), centred at x 20.
   */
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ERP Biz Apps"
    >
      {/* ── gradients (3, spanning full height for per-layer colour shift) ── */}
      <defs>
        <linearGradient id={`${id}t`} x1="20" y1="2" x2="20" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.t[0]} />
          <stop offset="1" stopColor={palette.t[1]} />
        </linearGradient>
        <linearGradient id={`${id}l`} x1="20" y1="2" x2="20" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.l[0]} />
          <stop offset="1" stopColor={palette.l[1]} />
        </linearGradient>
        <linearGradient id={`${id}r`} x1="20" y1="2" x2="20" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.r[0]} />
          <stop offset="1" stopColor={palette.r[1]} />
        </linearGradient>
      </defs>

      {/* ── Layer 1 — ERP ──────────────────────────────────────── */}
      <path d="M20 2 L31 6 L20 10 L9 6Z"       fill={`url(#${id}t)`} />
      <path d="M9 6 L20 10 L20 13 L9 9Z"        fill={`url(#${id}l)`} />
      <path d="M20 10 L31 6 L31 9 L20 13Z"      fill={`url(#${id}r)`} />

      {/* ── Layer 2 — CRM ──────────────────────────────────────── */}
      <path d="M20 15 L31 19 L20 23 L9 19Z"     fill={`url(#${id}t)`} />
      <path d="M9 19 L20 23 L20 26 L9 22Z"      fill={`url(#${id}l)`} />
      <path d="M20 23 L31 19 L31 22 L20 26Z"    fill={`url(#${id}r)`} />

      {/* ── Layer 3 — Custom Dev ───────────────────────────────── */}
      <path d="M20 28 L31 32 L20 36 L9 32Z"     fill={`url(#${id}t)`} />
      <path d="M9 32 L20 36 L20 39 L9 35Z"      fill={`url(#${id}l)`} />
      <path d="M20 36 L31 32 L31 35 L20 39Z"    fill={`url(#${id}r)`} />

      {/* ── Subtle top-edge highlights (color variant only) ──── */}
      {variant === "color" && (
        <>
          <path d="M9 6 L20 2 L31 6"  stroke="white" strokeWidth="0.5" opacity="0.3"  fill="none" />
          <path d="M9 19 L20 15 L31 19" stroke="white" strokeWidth="0.5" opacity="0.2" fill="none" />
          <path d="M9 32 L20 28 L31 32" stroke="white" strokeWidth="0.5" opacity="0.15" fill="none" />
        </>
      )}
    </svg>
  );
}
