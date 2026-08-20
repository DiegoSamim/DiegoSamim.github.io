import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontSize: {
        display: ["clamp(2.75rem, 7vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        h2: ["clamp(1.75rem, 3.4vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        h3: ["1.0625rem", { lineHeight: "1.25", letterSpacing: "-0.012em" }],
        lead: ["1.0625rem", { lineHeight: "1.65" }],
        body: ["0.9375rem", { lineHeight: "1.6" }],
        caption: ["0.84375rem", { lineHeight: "1.55" }],
        label: ["0.71875rem", { lineHeight: "1.2", letterSpacing: "0.24em" }],
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        subtle: "hsl(var(--text-subtle))",
        faint: "hsl(var(--text-faint))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderColor: {
        strong: "hsl(var(--border-strong))",
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "cue-shimmer": {
          "0%": { transform: "translateX(-140%)" },
          "60%, 100%": { transform: "translateX(240%)" },
        },
        "cue-halo": {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.94)" },
          "50%": { opacity: "0.7", transform: "scale(1.1)" },
        },
        "cue-ring": {
          "0%": { opacity: "0.5", transform: "scale(0.9)" },
          "100%": { opacity: "0", transform: "scale(1.45)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cue-shimmer": "cue-shimmer 3.4s ease-in-out infinite",
        "cue-halo": "cue-halo 3s ease-in-out infinite",
        "cue-ring": "cue-ring 2.6s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
