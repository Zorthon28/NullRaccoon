// tailwind.config.js
/** @type {import('tailwindcss').Config} */ // <--- This is the correct way
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}