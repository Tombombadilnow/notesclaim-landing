import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        gold: "#d4af77",
        accent: "#00c9cf",
        lavender: "#6b5fa8",
        "pastel-cream": "#faf8f5",
        "card-yellow": "#fff9e6",
        "card-blue": "#e8f4fc",
        "card-mint": "#e8f5ef",
        "card-lavender": "#f0ebff",
        "hero-sky": "#e8e0f5",
        "hero-mist": "#dce8f5",
        "band-purple": "#5b4bb7",
        "band-deep": "#3d2f8f",
        teal: "#0e5c6b",
        "teal-dark": "#0a3d47",
        "teal-light": "#1a7a8c",
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
        soft: "0 18px 50px rgba(15, 23, 42, 0.08)",
        card: "0 8px 30px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
