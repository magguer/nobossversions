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

        'darksecondarycolor':'#02997d',

        'textprimary': 'white',
        'textsecondary': '#02997d',
        'textterceary': '#bababa',

        'darksubbgprimary': '#131313',

        'darkbgprimary': '#1a1a1a',
        'darkbgsecondary': '#242424',
        'darkbgunder': '#2c2c2c',
        'darkbuttonprimary': '#242424',
        'darkbuttonhoverprimary': '#1c1c1c',
        'darkbuttonringprimary': '#2d2d2d',
        'darkbuttonsecondary': '#1a1a1a',

        'lightbgprimary': '#94a3b8',
        'lightbgsecondary': '#475569',
        'lightbgunder': '#e2e8f0',
        'lightbuttonprimary': '#64748b',
        'lightbuttonhoverprimary': '#475569',
        'lightbuttonhoversecodnary': '#94a3b8',
        'lightbuttonringprimary': '#334155',
        'lightbuttonsecondary': '#94a3b8',

      

      }

    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')
  ]
}
