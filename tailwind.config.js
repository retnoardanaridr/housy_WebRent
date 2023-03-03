/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'grey-w': '#E5E5E5',
        'grey-b': '#B2B3B5',
        'grey-d': '#F9F9F9',
        'grey-tf': '#B1B1B1',
        'purple-b': '#5A57AB'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
