/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    }
  },
  plugins: [],
}
