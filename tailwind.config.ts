import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        /* Deep indigo / near-black surfaces */
        ink: {
          DEFAULT: "#080711",
          950: "#060510",
          900: "#0a0914",
          850: "#0e0d1c",
          800: "#131127",
          700: "#1b1934",
          600: "#272348",
        },
        /* Neon accents */
        accent: {
          DEFAULT: "#6d5dfc",
          soft: "#8b7bff",
          blue: "#6f9bff",
          cyan: "#43e0e8",
        },
        fg: "#f4f4fb",
        mute: "#9a99bb",
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
