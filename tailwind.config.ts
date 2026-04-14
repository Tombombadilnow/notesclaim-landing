import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#F59E0B",
        ink: "#0F172A",
      },
    },
  },
  plugins: [],
};
export default config;
