/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ["Nunito Sans", "sans-serif"],

      },backgroundImage: {
        "b-w" :'linear-gradient(to top, white 50%, #1E053C 50%);',
        "b-w-mobile" :'linear-gradient(to top, white 70%, #1E053C 30%);'

      }
    },
  },
  plugins: [],
}

