import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: "#0071e3",
          "blue-hover": "#0077ED",
          "blue-dark": "#2997ff",
          black: "#1d1d1f",
          gray: {
            DEFAULT: "#86868b",
            light: "#f5f5f7",
            mid: "#d2d2d7",
            dark: "#424245",
          },
          white: "#fbfbfd",
        },
        brand: {
          50: "#eef4ff",
          100: "#d9e5ff",
          200: "#bbd2ff",
          300: "#8db5ff",
          400: "#588bff",
          500: "#2563eb",
          600: "#1a4fd4",
          700: "#143fad",
          800: "#16358d",
          900: "#0f2557",
          950: "#0a1a3d",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        // Official partner colors
        ms: {
          red: "#F25022",
          green: "#7FBA00",
          blue: "#00A4EF",
          yellow: "#FFB900",
        },
        sf: {
          blue: "#00A1E0",
          dark: "#032D60",
          cloud: "#1798C1",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5.5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "600" }],
        "title": ["1.125rem", { lineHeight: "1.35", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
        "caption": ["0.8125rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 6.5rem)",
        "section-sm": "clamp(2.5rem, 5vw, 4rem)",
      },
      maxWidth: {
        "container": "1080px",
        "narrow": "640px",
        "wide": "1280px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)",
        "card-hover": "0 8px 25px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.03)",
        "elevated": "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
        "glow": "0 0 60px rgba(37,99,235,0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "loading-bar": {
          "0%": { transform: "scaleX(0)" },
          "50%": { transform: "scaleX(0.7)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #2563eb, #14b8a6)",
        "gradient-dark": "linear-gradient(180deg, #0a1a3d 0%, #1d1d1f 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
