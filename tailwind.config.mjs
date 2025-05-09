/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class",
  content: [
    './src/**/*.{js,ts,jsx,tsx,css}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit Variable"', ...fontFamily.sans],
        display: ['"Manrope Variable"', ...fontFamily.sans],
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Roboto"', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.375rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.625rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.75rem', { lineHeight: '1.2' }],
        '5xl': ['3.25rem', { lineHeight: '1.1' }],
        '6xl': ['4rem', { lineHeight: '1.1' }],
        '7xl': ['5rem', { lineHeight: '1' }],
      },
      colors: {
        // Everyman Brand Colors
        primary: {
          50: '#f4f8fb',
          100: '#e3eef7',
          200: '#c7dff0',
          300: '#a3cbe4',
          400: '#7eb6d8',
          500: '#7B5FFF', // Added primary-500
          600: '#6b46c1',
          700: '#2b567a', // Explicitly defined
          800: '#1d384e',
          900: '#0f1b23',
          DEFAULT: '#8A2BE2',
          dark: '#5A189A',
          darker: '#4C1D95',
          light: '#EADCF8',
          lighter: '#F3E8FF',
        },
        secondary: {
          50: '#f6fbf8',
          100: '#e6f6ec',
          200: '#c3ebd6',
          300: '#a0e0c0',
          400: '#7bc47f',
          500: '#4361ee',
          600: '#3a0ca3',
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
          500: '#f72585',
          600: '#7209b7',
          700: '#746340',
          800: '#4d4021',
          900: '#261d02',
          coral: '#FF6F61',
          aqua: '#4FD1C5',
          gold: '#FFD700',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#343a40',
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
        background: {
          light: '#ffffff',
          gray: '#f1f3f5',
        },
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
        // Primary palette
        creative: '#7B5FFF',
        electric: '#3A86FF',
        innovative: '#FF5E5B',
        
        // Supporting neutrals
        slate: '#2B2D42',
        canvas: '#F8F9FA',
        
        // Semantic variants
        primary: {
          DEFAULT: '#7B5FFF',
          light: '#9D87FF',
          dark: '#6144E0'
        },
        secondary: {
          DEFAULT: '#3A86FF',
          light: '#5E9CFF',
          dark: '#2970E2'
        },
        accent: {
          DEFAULT: '#FF5E5B',
          light: '#FF7F7D',
          dark: '#E54542'
        }
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
      backgroundImage: {
        'gradient-purple-teal': 'linear-gradient(to right, #8A2BE2, #4FD1C5)',
        'gradient-coral-gold': 'linear-gradient(to bottom right, #FF6F61, #FFD700)',
        'gradient-deepviolet-aqua': 'linear-gradient(to top, #5A189A, #4FD1C5)',
        'gradient-softlavender-pale': 'linear-gradient(to right, #EADCF8, #F3E8FF)',
        'hover-pic': "url('/images/hover_pic.png')", // Added custom background image
      },
      backgroundSize: {
        'dot-pattern': '20px 20px',
      },
    },
  },
  plugins: [],
}