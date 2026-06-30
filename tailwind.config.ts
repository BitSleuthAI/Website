
import type {Config} from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        glow: '0 0 15px hsl(var(--primary) / 0.8), 0 0 25px hsl(var(--primary) / 0.5)',
      },
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        complementary: {
          DEFAULT: 'hsl(var(--complementary))',
          foreground: 'hsl(var(--complementary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'beam-1': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'beam-2': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '25%': {
            opacity: '0.8',
            transform: 'translateY(0)',
          },
          '75%': {
            opacity: '0.4',
            transform: 'translateY(50%)',
          },
        },
        'beam-3': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '40%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '80%': {
            opacity: '0.3',
            transform: 'translateY(100%)',
          },
        },
        'beam-4': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '15%': {
            opacity: '0.6',
            transform: 'translateY(0)',
          },
          '60%': {
            opacity: '0.2',
            transform: 'translateY(75%)',
          },
        },
        'beam-5': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '30%': {
            opacity: '0.7',
            transform: 'translateY(0)',
          },
          '70%': {
            opacity: '0.1',
            transform: 'translateY(80%)',
          },
        },
        'beam-horizontal-1': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '50%': {
            opacity: '0.6',
            transform: 'translateX(0)',
          },
        },
        'beam-horizontal-2': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '50%': {
            opacity: '0.4',
            transform: 'translateX(0)',
          },
        },
        'beam-diagonal-1': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(-100%) rotate(12deg)',
          },
          '50%': {
            opacity: '0.3',
            transform: 'translateX(0) rotate(12deg)',
          },
        },
        'beam-diagonal-2': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(100%) rotate(-12deg)',
          },
          '50%': {
            opacity: '0.2',
            transform: 'translateX(0) rotate(-12deg)',
          },
        },
        'beam-6': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '20%': {
            opacity: '0.8',
            transform: 'translateY(0)',
          },
          '80%': {
            opacity: '0.2',
            transform: 'translateY(100%)',
          },
        },
        'beam-7': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '35%': {
            opacity: '0.7',
            transform: 'translateY(0)',
          },
          '75%': {
            opacity: '0.1',
            transform: 'translateY(80%)',
          },
        },
        'beam-horizontal-3': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '30%': {
            opacity: '0.5',
            transform: 'translateX(0)',
          },
          '70%': {
            opacity: '0.1',
            transform: 'translateX(100%)',
          },
        },
        'beam-diagonal-3': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(-100%) rotate(6deg)',
          },
          '40%': {
            opacity: '0.4',
            transform: 'translateX(0) rotate(6deg)',
          },
          '80%': {
            opacity: '0.1',
            transform: 'translateX(100%) rotate(6deg)',
          },
        },
        'beam-diagonal-4': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(100%) rotate(-6deg)',
          },
          '25%': {
            opacity: '0.3',
            transform: 'translateX(0) rotate(-6deg)',
          },
          '65%': {
            opacity: '0.1',
            transform: 'translateX(-100%) rotate(-6deg)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'beam-1': 'beam-1 4s ease-in-out infinite',
        'beam-2': 'beam-2 6s ease-in-out infinite',
        'beam-3': 'beam-3 5s ease-in-out infinite',
        'beam-4': 'beam-4 7s ease-in-out infinite',
        'beam-5': 'beam-5 5.5s ease-in-out infinite',
        'beam-horizontal-1': 'beam-horizontal-1 8s ease-in-out infinite',
        'beam-horizontal-2': 'beam-horizontal-2 10s ease-in-out infinite',
        'beam-horizontal-3': 'beam-horizontal-3 11s ease-in-out infinite',
        'beam-diagonal-1': 'beam-diagonal-1 12s ease-in-out infinite',
        'beam-diagonal-2': 'beam-diagonal-2 9s ease-in-out infinite',
        'beam-diagonal-3': 'beam-diagonal-3 13s ease-in-out infinite',
        'beam-diagonal-4': 'beam-diagonal-4 7s ease-in-out infinite',
        'beam-6': 'beam-6 6s ease-in-out infinite',
        'beam-7': 'beam-7 8.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
