/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Everyman Brand Colors
        primary: {
          50: '#f4f8fb',
          100: '#e3eef7',
          200: '#c7dff0',
          300: '#a3cbe4',
          400: '#7eb6d8',
          500: '#4f8fcb', // Soft blue
          600: '#3973a6',
          700: '#2b567a',
          800: '#1d384e',
          900: '#0f1b23',
        },
        secondary: {
          50: '#f6fbf8',
          100: '#e6f6ec',
          200: '#c3ebd6',
          300: '#a0e0c0',
          400: '#7bc47f', // Gentle green
          500: '#5ea06a',
          600: '#4a7e54',
          700: '#355c3e',
          800: '#213a28',
          900: '#0c1812',
        },
        accent: {
          50: '#fdfaf6',
          100: '#f7f2ea',
          200: '#ede3d1',
          300: '#e3d3b8',
          400: '#d9c39f',
          500: '#c2a97e', // Warm neutral
          600: '#9b865f',
          700: '#746340',
          800: '#4d4021',
          900: '#261d02',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Semantic Colors
        success: {
          light: '#dcfce7',
          DEFAULT: '#22c55e',
          dark: '#15803d',
        },
        error: {
          light: '#fee2e2',
          DEFAULT: '#ef4444',
          dark: '#b91c1c',
        },
        warning: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
        // System Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
}