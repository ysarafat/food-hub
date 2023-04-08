/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFC107',
        'light-black': '#403F3F',
        'deep-gary': '#706F6F',
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}