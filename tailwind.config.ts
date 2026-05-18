import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        navy: "#0c2d48",
        "navy-light": "#153d5c",
        cream: "#faf9f6",
        gold: "#c9a55c",
        "brand-teal": "#4fafb0",
        accent: "#00c9cf",
        lavender: "#6b5fa8",
        "pastel-cream": "#faf9f6",
        teal: "#0e5c6b",
        "teal-dark": "#0a3d47",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(12, 45, 72, 0.1)",
        card: "0 8px 30px rgba(12, 45, 72, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
