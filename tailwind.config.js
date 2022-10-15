/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        yellowIw: {
          100: '#F6BE45',
          900: '#EAA30B'
        },
        brownIw: '#755513'
      }
    },
  },
  plugins: [],
}
