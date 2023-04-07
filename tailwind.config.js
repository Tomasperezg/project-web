/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,ts,css,scss}', './custom-components/**/*.{html, ts,css,scss}'],
  theme: {
    extend: {
      maxWidth: {
        '75': '75rem'
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
        dark: '#2c2c2c'
       }
    },
    fontFamily: {
      sans: ['Roboto', 'playfair-display'],
      'header': ['playfair-display']
    }
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      
    }),
    
  ],
}
