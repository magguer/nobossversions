/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content:
    ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  
  theme: {
    screens: {
      'mobilM': '376px',
      'mobilL': '424px',
      'mobilXL': '555px',
      'tablet': '769px',
      'semilaptop': '900px',
      'laptop': '1023px',
      'laptopL': '1439px'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
