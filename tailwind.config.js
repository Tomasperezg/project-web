/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,ts,css,scss}', './custom-components/**/*.{html, ts,css,scss}'],
  theme: {
    extend: {
      maxWidth: {
        '75': '75rem',
        '70': '70rem',
      },
      height: {
        '720': '45rem'
      },
      fontWeight: {
        hairline: '100'
      },
      textUnderlineOffset: {
        20: '20px',
      }
      
    },
    screens: {
      'sm': {'min': '275px', 'max': '767px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': {
        dark: '#2c2c2c',
        generic: '#000000',
       },
       'blue': {
        skyBlue: '#6b9ecf',
        navy: '#3273cd',
       },
       'green': {
        darkGreen: '#304561'
       },
    },
    fontFamily: {
      'body': ['Roboto'],
      'header': ['playfair-display']
    }
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      
    }),
    
  ],
}
