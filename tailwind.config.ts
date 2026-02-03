import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'delacroix': {
          dark: '#1a1008',
          brown: '#3d2b1f',
          warm: '#8b6914',
          gold: '#c9a84c',
          cream: '#e8d5a3',
        },
        'tricolor': {
          blue: '#002395',
          white: '#ffffff',
          red: '#ED2939',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
