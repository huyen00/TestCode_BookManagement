
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      "./node_modules/flowbite/**/*.js",
      "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
    ],
 
    darkMode: false, // or 'media' or 'class'
    theme: {
      
      colors: {
        ...colors,
        black_header: '#00164D',
        darkblue_menu:'#0D063C',
        blue_layout: '#3196B6',
        armorialgame1: 'rgba(5, 22, 56, 0.89)',
        armorialgame2: 'rgba(14, 16, 37, 0.94)',
        laser_Tag:'rgb(14, 16, 38, 0.94)',
        line_laserTag: '#2B88AF',
        item_unlock:'#18314E',
        unlock: '#2092D1',
        history_item: '#3a3b3c73',
        banner:  '#0000007a',
        pizza: '#F9F5F1'
        
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
      screens: {
        vs: '320px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1600px',
      },
      extend: {},
    },
    variants: {
      extend: {
       
      },
    },
    plugins: [
      require('flowbite/plugin'),
      require('tailwind-scrollbar-hide'),
      require("tw-elements/dist/plugin")
    ],
  }