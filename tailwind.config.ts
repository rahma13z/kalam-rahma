import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#183247",
        forest: "#16745d",
        mint: "#e8f3ee",
        paper: "#f6f8f5",
        line: "#e5ebe7"
      },
      boxShadow: {
        soft: "0 12px 35px rgba(24, 50, 71, 0.07)"
      }
    }
  },
  plugins: []
};

export default config;
