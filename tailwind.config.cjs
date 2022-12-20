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
    extend: {
      colors: {

        'textprimary': 'white',
        'textsecundary': '#475569',

        'darkbgprimary': '#1a1a1a',
        'darkbgsecondary': '#1a1a1a',
        'darkbgunder': '#242424',
        'darkbuttonprimary': '#242424',
        'darkbuttonhoverprimary': '#1c1c1c',
        'darkbuttonringprimary': '#2d2d2d',

        'lightbgprimary': '#94a3b8',
        'lightbgsecondary': '#475569',
        'lightbgunder': '#e2e8f0',
        'lightbuttonprimary': '#64748b',
        'lightbuttonhoverprimary': '#475569',
        'lightbuttonringprimary': '#334155',

      

      }

    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')
  ]
}
