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
        dark: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
          600: '#242424',
          500: '#2d2d2d',
        },
        accent: {
          primary: '#8b5cf6',
          secondary: '#a78bfa',
          tertiary: '#c4b5fd',
        }
      },
    },
  },
  plugins: [],
}
export default config