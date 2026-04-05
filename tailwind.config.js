/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD900',
          light: '#F0C82B',
          muted: '#EEDE37',
        },
        dark: {
          DEFAULT: '#000000',
          card: '#1E1A06',
          subtle: '#0F0D03',
          border: '#534806',
        },
        light: {
          DEFAULT: '#FFFFFF',
          muted: '#F1F5F9',
        },
        gray: {
          DEFAULT: '#A2A2A2',
          light: '#E4E4E4',
        },
        green: '#3ECF42',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
