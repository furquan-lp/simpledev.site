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
        'blue-cpp': '#659ad2',
        'blue-gray': '#41506b',
        'blue-mui': '#007fff',
        'blue-react': '#61dafb',
        'blue-tailwind': '#38bdf8',
        'gray-bash': '#3e474a',
        'green-arduino': '#008184',
        'green-dark': '#263849',
        'green-light': '#90f6d7',
        'green-new': '#35bcbf',
        'purple-gatsby': '#663399',
        'white-light': '#eeeeee',
        'yellow-js': '#f0db4f'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
