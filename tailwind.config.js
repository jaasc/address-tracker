/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'veryDarkGray': 'hsl(0, 0%, 17%)',
        'darkGray': 'hsl(0, 0%, 59%)'
      },
      backgroundImage:{
        'searchBg': "url(/pattern-bg.png)"
      },
      fontFamily:{
        'rubik': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}
