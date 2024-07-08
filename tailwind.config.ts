import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        "background-dark": "#222c3b",
        "progress-gray": "#F1F1F3",
        "progress-blue": "#4581F4",
        border: "#E0E3EE",
        "correct-opacity": "#05BA7966",
        "wrong-opacity": "#FF5B6966",

        mirage: {
          "50": "#f0f7fe",
          "100": "#deecfb",
          "200": "#c4e0f9",
          "300": "#9cccf4",
          "400": "#6dafed",
          "500": "#4581F4",
          "600": "#3674da",
          "700": "#2d60c8",
          "800": "#2a4fa3",
          "900": "#274481",
          "950": "#0f172a"
        },

        "big-stone": {
          "50": "#f5f7fa",
          "100": "#eaeef4",
          "200": "#d0dae7",
          "300": "#a7bbd2",
          "400": "#7897b8",
          "500": "#577aa0",
          "600": "#446285",
          "700": "#38506c",
          "800": "#31445b",
          "900": "#2d3b4d",
          "950": "#222c3b"
        },

        button: {
          main: "#4581F4",
          normal: "#FFFFFF"
        },

        text: {
          correct: "#05BA79",
          wrong: "#FF5B69"
        },

        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
