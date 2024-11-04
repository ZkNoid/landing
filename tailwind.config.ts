import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./widgets/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./entities/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      "bg-dark": "#121212",
      yellow: "#D4FF33",
      blue: "#3A39FF",
      red: "#FF5B23",
      purple: "#DCB8FF",
      white: "#FFFCF5",
      black: "#000000",
      black2: "#101010",
      "gray-dark": "#141414",
      "gray-middle": "#161616",
      "gray-light": "#1E1E1E",
    },
    extend: {
      fontFamily: {
        "helvetica-now": ["var(--helvetica-now)"],
        outfit: ["var(--outfit)"],
        kavaimo: ["var(--kavaimo)"],
      },
    },
  },
  plugins: [],
};
export default config;
