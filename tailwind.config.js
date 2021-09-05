const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
        sans: 'Roboto, sans-serif'
      },
      colors: {
        lightblue: '#3c98fe',
        cyan: '#30f9fe',
        blue: colors.blue,
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
