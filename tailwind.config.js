/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ecoGreen': '#2E8B57',
        'ecoGreenDark': '#0A1F12', 
        'ecoBlue': '#4682B4', 
        'ecoTeal': '#20B2AA',
        'ecoOrange': '#FFA500',
        'ecoGray': '#707070',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        '4xl': '800px',
      }
    },
  },
  plugins: [],
  safelist: [
    'grid-cols-1', 
    'md:grid-cols-2', 
    'md:grid-cols-3'
  ]
};
