/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountains-blur': "url('../public/blur-background.jpg')",
        'mountains': "url('../public/background.jpg')"
      }
    },
  },
  plugins: [],
}
