import type { Config } from 'tailwindcss'

const svgToDataUri = require('mini-svg-data-uri')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          ink: 'var(--accent-ink)',
          tint: 'rgb(var(--accent-tint-rgb) / <alpha-value>)',
        },
        mint: {
          DEFAULT: 'var(--mint)',
          ink: 'var(--mint-ink)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20, 22, 31, 0.04), 0 12px 32px -16px rgba(20, 22, 31, 0.12)',
        lift: '0 2px 4px rgba(20, 22, 31, 0.04), 0 24px 48px -24px rgba(90, 63, 230, 0.25)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          to: { transform: 'translateX(calc(-50% - 1rem))' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee var(--marquee-duration, 60s) linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none"><circle fill="${value}" cx="12" cy="12" r="1.4"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
  ],
} satisfies Config

export default config
