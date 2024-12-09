/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,js}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'spotifyblack': '#121212'
    },
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
    },
  },
  plugins: [],
}