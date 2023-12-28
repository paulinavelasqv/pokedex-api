/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Antonio']
      },
      colors: {
        'blue-pokemon': '#1D2C5E',
        'yellow-pokemon': '#FDD85D',
        'blue-light-pokemon': '#3A5DA9'
      }
    },
  },
  plugins: [],
}

