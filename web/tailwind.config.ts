import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media", // or 'media' if you prefer system settings
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Legacy/Literal scales (keeping for reference if needed, but prefer semantic above)
        trinity: {
          50: "#f2f6fa",
          100: "#e1eaf4",
          200: "#c5d8e9",
          300: "#9bbddb",
          400: "#6ca0cc",
          500: "#4a84ba",
          600: "#36699e",
          700: "#2c5480",
          800: "#26476b",
          900: "#07294b",
          950: "#031426",
        },
        gold: {
          50: "#fefce8",
          100: "#fffac2",
          200: "#fff185",
          300: "#ffe246",
          400: "#f3d84a",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
      },
    },
  },
  plugins: [],
};
export default config;
