import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "#ffffff",
        outline: "#81756c",
        "primary-container": "#c5a387",
        "on-error-container": "#93000a",
        "secondary-container": "#e4e2e1",
        "surface-container-high": "#eee7e3",
        "on-primary-fixed-variant": "#5b422b",
        surface: "#fff8f5",
        "surface-bright": "#fff8f5",
        "on-tertiary": "#ffffff",
        "tertiary-fixed-dim": "#c8c6c3",
        "outline-variant": "#d2c4ba",
        error: "#ba1a1a",
        "on-primary-container": "#513924",
        "surface-dim": "#e0d9d5",
        "tertiary-container": "#aaa9a6",
        "on-secondary-fixed": "#1b1c1c",
        "primary-fixed-dim": "#e4c0a2",
        "on-surface": "#1e1b19",
        "surface-container-low": "#faf2ee",
        "secondary-fixed": "#e4e2e1",
        "secondary-fixed-dim": "#c8c6c6",
        "on-primary-fixed": "#2a1705",
        "surface-container-highest": "#e9e1dd",
        "surface-container": "#f4ece8",
        secondary: "#5f5e5e",
        tertiary: "#5e5e5c",
        background: "#fff8f5",
        "on-surface-variant": "#4f453d",
        "on-tertiary-fixed-variant": "#474744",
        "on-error": "#ffffff",
        "primary-fixed": "#ffdcc0",
        "tertiary-fixed": "#e4e2de",
        "surface-variant": "#e9e1dd",
        "surface-tint": "#745941",
        "inverse-primary": "#e4c0a2",
        "on-background": "#1e1b19",
        "on-secondary": "#ffffff",
        "inverse-surface": "#33302d",
        "inverse-on-surface": "#f7efeb",
        "on-tertiary-container": "#3e3e3c",
        "error-container": "#ffdad6",
        primary: "#745941",
        "on-secondary-fixed-variant": "#474747",
        "on-tertiary-fixed": "#1b1c1a",
        "on-secondary-container": "#656464",
        "on-primary": "#ffffff",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "container-padding-mobile": "1.5rem", // 24px
        "section-gap": "7.5rem", // 120px
        "container-padding-desktop": "5rem", // 80px
        unit: "0.5rem", // 8px
        gutter: "1.5rem", // 24px
      },
      fontFamily: {
        "headline-md": ["Bodoni Moda"],
        "headline-xl-mobile": ["Bodoni Moda"],
        "headline-lg": ["Bodoni Moda"],
        "label-md": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-xl": ["Bodoni Moda"],
        "body-md": ["Plus Jakarta Sans"],
        "label-sm": ["Plus Jakarta Sans"],
      },
      fontSize: {
        "headline-md": ["1.5rem", { lineHeight: "1.3", fontWeight: "500" }], // 24px
        "headline-xl-mobile": ["2rem", { lineHeight: "1.2", fontWeight: "600" }], // 32px
        "headline-lg": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }], // 36px
        "label-md": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600" }], // 14px
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }], // 18px
        "headline-xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }], // 48px
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px
        "label-sm": ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }], // 12px
      },
    },
  },
};
export default config;
