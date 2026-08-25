import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5", // indigo-600
          light: "#6366f1", // indigo-500
          dark: "#4338ca", // indigo-700
        },
        accent: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        dark: {
          DEFAULT: "#121212",
          soft: "#1c1c1c",
        },
        background: "#f8fafc", // slate-50
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};

export default config;
