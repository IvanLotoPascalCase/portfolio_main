/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pf-dp': ['Playfair Display', 'serif']
      },
      colors: {
        'primary': '#42956A',
        'primary-400': '#5AA980',
        'primary-300': '#60AE86',
        'primary-alt': '#51B380',
        'secondary': '#D2D886',
        'secondary-alt': '#D2D886',
        'f-primary': '#F8FADB',
        'f-primary-200': '#FEFFF0',
        'f-secondary': '#4E4F43'
      }
    },
  },
  plugins: [],
}