
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyber: {
          black: "#080510",
          deepBlue: "#0B0B25",
          blue: "#1E45F5",
          lightBlue: "#00FFFF",
          purple: "#7921DF",
          neonPurple: "#BE31FE",
          pink: "#FC3BFE",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": { 
            textShadow: "0 0 15px rgba(190, 49, 254, 0.8), 0 0 30px rgba(0, 255, 255, 0.6)"
          },
          "50%": { 
            textShadow: "0 0 30px rgba(190, 49, 254, 0.8), 0 0 60px rgba(0, 255, 255, 0.6)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "reveal": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "reveal": "reveal 0.7s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
      boxShadow: {
        "neon-blue": "0 0 5px theme('colors.cyber.lightBlue'), 0 0 20px rgba(0, 255, 255, 0.3)",
        "neon-purple": "0 0 5px theme('colors.cyber.neonPurple'), 0 0 20px rgba(190, 49, 254, 0.3)",
        "cyber": "0 0 0 1px rgba(190, 49, 254, 0.1), 0 5px 30px -10px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "cyber-gradient": "linear-gradient(135deg, rgba(190, 49, 254, 0.15), rgba(0, 255, 255, 0.15))",
        "cyber-glow": "radial-gradient(circle at 50% 50%, rgba(190, 49, 254, 0.1), rgba(8, 5, 16, 0) 70%)",
        "cyber-grid": "linear-gradient(90deg, rgba(190, 49, 254, 0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
