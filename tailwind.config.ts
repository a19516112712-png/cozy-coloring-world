import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F0",
        blush: "#FADADD",
        lavender: "#E8D5F5",
        mint: "#D4F0E8",
        butter: "#FFF4D2",
        peach: "#FFE5D0",
        rose: "#FFB5C2",
        sky: "#C5E0F0",
        cocoa: "#8B6B5E",
        honey: "#F0C878",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        cozy: "1.25rem",
        pill: "9999px",
      },
      boxShadow: {
        cozy: "0 4px 20px rgba(139, 107, 94, 0.12)",
        card: "0 2px 12px rgba(139, 107, 94, 0.08)",
        hover: "0 8px 30px rgba(139, 107, 94, 0.18)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
