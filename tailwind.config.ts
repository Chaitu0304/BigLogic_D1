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
      colors: {
        // Mercury Colors
        mercury: {
          blue: "var(--color-mercury-blue)",
          ghost: "var(--color-ghost-blue)",
        },
        surface: {
          abyss: "var(--color-deep-space)",
          surface: "var(--color-midnight-slate)",
          interactive: "var(--color-graphite)",
        },
        slate: {
          lead: "var(--color-lead)",
        },
        starlight: "var(--color-starlight)",
        silver: "var(--color-silver)",
        pure: {
          white: "var(--color-pure-white)",
        },
        // Shadcn UI Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
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
      fontFamily: {
        display: ["var(--font-arcadiadisplay)", "sans-serif"],
        body: ["var(--font-arcadia)", "sans-serif"],
      },
      fontSize: {
        caption: ["var(--text-caption)", { lineHeight: "var(--leading-caption)", letterSpacing: "var(--tracking-caption)" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "var(--leading-body-sm)", letterSpacing: "var(--tracking-body-sm)" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)", letterSpacing: "var(--tracking-body)" }],
        subheading: ["var(--text-subheading)", { lineHeight: "var(--leading-subheading)" }],
        "heading-sm": ["var(--text-heading-sm)", { lineHeight: "var(--leading-heading-sm)" }],
        heading: ["var(--text-heading)", { lineHeight: "var(--leading-heading)" }],
        "heading-lg": ["var(--text-heading-lg)", { lineHeight: "var(--leading-heading-lg)" }],
        display: ["var(--text-display)", { lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-display)" }],
      },
      spacing: {
        unit: "var(--spacing-unit)",
        '4': "var(--spacing-4)",
        '8': "var(--spacing-8)",
        '12': "var(--spacing-12)",
        '16': "var(--spacing-16)",
        '20': "var(--spacing-20)",
        '24': "var(--spacing-24)",
        '32': "var(--spacing-32)",
        '40': "var(--spacing-40)",
        '50': "6rem",
        '56': "var(--spacing-56)",
        '72': "var(--spacing-72)",
        '80': "var(--spacing-80)",
        '112': "var(--spacing-112)",
        '128': "var(--spacing-128)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        inputs: "var(--radius-inputs)",
        buttons: "var(--radius-buttons)",
        containers: "var(--radius-containers)",
        cards: "var(--radius-cards)",
        '3xl': "var(--radius-3xl)",
        '3xl-2': "var(--radius-3xl-2)",
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
} satisfies Config;
