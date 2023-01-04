/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountains-blur': "url('../public/blur-background.jpg')",
        'mountains': "url('../public/background.jpg')"
      },
      fontFamily: {
        'titlefont': ['Press\\ Start\\ 2P', 'monospace'],
        'aboutfont': ['Comfortaa', 'monospace']
      },
      colors: {
        'green-dark': '#263849',
        'green-new': '#35bcbf',
        'green-light': '#90f6d7',
        'blue-gray': '#41506b',
        'white-light': '#eeeeee'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
