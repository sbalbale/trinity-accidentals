import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media', // or 'media' if you prefer system settings
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        // 1. The Literal Scales (Use these for specific tweaks)
        trinity: {
          50: '#f2f6fa',
          100: '#e1eaf4',
          200: '#c5d8e9',
          300: '#9bbddb',
          400: '#6ca0cc',
          500: '#4a84ba',
          600: '#36699e',
          700: '#2c5480',
          800: '#26476b',
          900: '#07294b', // <--- OFFICIAL TRINITY BLUE
          950: '#031426', // Deepest Navy (Good for Dark Mode Footer)
        },
        gold: {
          50: '#fefce8',
          100: '#fffac2',
          200: '#fff185',
          300: '#ffe246',
          400: '#f3d84a', // <--- OFFICIAL TRINITY YELLOW
          500: '#eab308', // Slightly darker for hover states
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },

        // 2. The Semantic Palette (Use these in your HTML)
        // These automatically adapt to dark mode
        brand: {
          // BACKGROUNDS
          bg: {
            DEFAULT: '#ffffff',       // Light: White
            dark: '#07294b',          // Dark: Trinity Blue
          },
          surface: {
            DEFAULT: '#f2f6fa',       // Light: Trinity 50
            dark: '#0b3c6b',          // Dark: Lighter Navy
          },

          // TEXT
          text: {
            primary: {
              DEFAULT: '#07294b',     // Light: Trinity Blue
              dark: '#ffffff',        // Dark: White
            },
            secondary: {
              DEFAULT: '#475569',     // Light: Slate 600
              dark: '#cbd5e1',        // Dark: Slate 300
            },
            accent: {
              DEFAULT: '#ca8a04',     // Light: Gold 600 (Readable on white)
              dark: '#f3d84a',        // Dark: Trinity Yellow
            },
          },

          // INTERACTIVE ELEMENTS (Buttons, etc.)
          action: {
            bg: {
              DEFAULT: '#07294b',     // Light: Blue Button
              dark: '#f3d84a',        // Dark: Yellow Button
            },
            text: {
              DEFAULT: '#ffffff',     // Light: White Text on Blue
              dark: '#07294b',        // Dark: Blue Text on Yellow
            },
            hover: {
              DEFAULT: '#2c5480',     // Light: Lighter Blue hover
              dark: '#ffe246',        // Dark: Lighter Yellow hover
            }
          },
          
          // BORDERS
          border: {
             DEFAULT: '#e2e8f0',      // Light: Slate 200
             dark: '#1e293b',         // Dark: Slate 800
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
