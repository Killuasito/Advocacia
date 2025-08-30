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
        primary: {
          DEFAULT: '#B8860B', // Dark goldenrod
          light: '#DAA520', // Goldenrod
          dark: '#8B6914', // Darker gold
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Rich black
          light: '#2D2D2D', // Lighter black
          dark: '#000000', // Pure black
        },
        accent: {
          DEFAULT: '#FFD700', // Gold
          light: '#FFE55C', // Light gold
          dark: '#C7A600', // Dark gold
        },
        'gray-850': 'var(--color-gray-850)',
      }
    }
  },
  plugins: [],
}
