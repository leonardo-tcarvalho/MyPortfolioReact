/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: 'oklch(62.3% 0.214 259.815)',
          cyan: 'oklch(78.9% 0.154 211.53)',
          deep: 'oklch(42.4% 0.199 265.638)',
          teal: 'oklch(69.6% 0.17 162.48)',
          indigo: 'oklch(38% 0.189 293.745)',
          violet: 'oklch(49.6% 0.265 301.924)',
        },
      },
      gridTemplateColumns: {
        layout: '280px 1fr',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
  },
  plugins: [],
}