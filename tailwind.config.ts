import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        appBeige: {
          DEFAULT: "hsl(var(--app-beige-500))",
          100: "hsl(var(--app-beige-100))",
        },
        appGrey: {
          DEFAULT: "hsl(var(--app-grey-900))",
          500: "hsl(var(--app-grey-500))",
          300: "hsl(var(--app-grey-300))",
          100: "hsl(var(--app-grey-100))",
        },
        appGreen: "hsl(var(--app-green))",
        appYellow: "hsl(var(--app-yellow))",
        appCyan: "hsl(var(--app-cyan))",
        appNavy: "hsl(var(--app-navy))",
        appRed: "hsl(var(--app-red))",
        appPurple: {
          DEFAULT: "hsl(var(--app-purple-900))",
          500: "hsl(var(--app-purple-500))",
        },
        appTurquoise: "hsl(var(--app-turquoise))",
        appBrown: "hsl(var(--app-brown))",
        appMagenta: "hsl(var(--app-magenta))",
        appBlue: "hsl(var(--app-blue))",
        appNavyGrey: "hsl(var(--app-navy-grey))",
        appArmyGreen: "hsl(var(--app-army-green))",
        appGold: "hsl(var(--app-gold))",
        appOrange: "hsl(var(--app-orange))",
        appWhite: "hsl(var(--app-white))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        50: "var(--app-spacing-50)",
        100: "var(--app-spacing-100)",
        150: "var(--app-spacing-150)",
        200: "var(--app-spacing-200)",
        250: "var(--app-spacing-250)",
        300: "var(--app-spacing-300)",
        400: "var(--app-spacing-400)",
        500: "var(--app-spacing-500)",
      },
      padding: {
        50: "var(--app-spacing-50)",
        100: "var(--app-spacing-100)",
        150: "var(--app-spacing-150)",
        200: "var(--app-spacing-200)",
        250: "var(--app-spacing-250)",
        300: "var(--app-spacing-300)",
        400: "var(--app-spacing-400)",
        500: "var(--app-spacing-500)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
