import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#29465A",
        forest: "#619DC6",
        mint: "#A6C8E2",
        paper: "#F4F0E2",
        line: "#E5E0D5",
        peach: "#F4BAA3"
      },
      boxShadow: {
        soft: "0 12px 35px rgba(24, 50, 71, 0.07)"
      }
    }
  },
  plugins: []
};

export default config;
