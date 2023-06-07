/** @type {import('tailwindcss').Config} */

const { filterTokensByType } = require("./fns");
const tokens = require("./output/_tokens.json")

const colors = filterTokensByType('color', tokens)
console.log(colors)
export const content = ["./src/**/*.{js,scss}", "index.html"]
export const darkMode = 'class'
export const theme = {
  extend: {
    backgroundImage: {
      'dropdown-arrow': 'url("./svg/icon-dropdown-arrow.svg")'
    },
    borderRadius: {
      '3px': '3px'
    },
    borderWidth: {
      '1': '1px'
    },
    /*colors: {
      'bell-primary': '#00549A',
      'bell-primary-90': 'rgba(0, 84, 154, .9)',
      'blue': {
        'bell': 'bell-primary',
        'dark': '#00215E',
        'light': '#C2CEDF',
        'light-50': 'rgba(194, 206, 223, 0.5)',
        'lighter': '#E4F0F9',
        'medium': '#003778',
        'medium-90': 'rgba(0, 55, 120, .9)',
        'electric': '#0075FF'
      },
      'dark': '#16191C',
      'disabled': {
        'dark': '#8D8D8D',
        'light': '#BABEC2'
      },
      'gray': {
        'dark': '#111111',
        'light': '#E1E1E1',
        'light-text': '#999999',
        'keyline': '#D4D4D4',
        'medium': '#555555',
      },
      'light': '#F4F4F4',
      'white-90': 'rgba(255, 255, 255, .9)',
      'white-80': 'rgba(255, 255, 255, .8)',
      'white-30': 'rgba(255, 255, 255, .3)'
    },*/
    colors: colors,
    fontFamily: {
      'base': ['Arial', 'Helvetica', 'sans-serif'],
      'bell-slim-black': ['bell-slim-black', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      sm: ['13px', '14px'],
      md: ['15px', '16px'],
      lg: ['18px', '20px'], // used in large buttons
      '12': ['12px', '14px'],
      '14': ['14px', '18px'],
      '18': ['18px', '22px'], // same font-size as lg, but different line-height...
      '20': ['20px', '22px'],
      '24': ['24px', '26px'],
      '32': ['32px', '38px'],
      '40': ['40px', '46px']
    },
    letterSpacing: {
      tightest: '-0.7px',
      tighter: '-0.5px',
      tight: '-0.4px',
    },
    margin: {
      '5px': '5px'
    },
    maxWidth: {
      '16px': '16px'
    },
    padding: {
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '17px': '17px',
      '18px': '18px',
      '19px': '19px',
      '20px': '20px',
      '23px': '23px',
      '24px': '24px'
    },
    ringOffsetWidth: {
      3: '3px',
      5: '5px'
    },
    screens: {
      sm: {'max': '575.98px'},
      md: {'max': '767.98px'},
      lg: {'max': '991.98px'},
      xl: {'max': '1199.98px'},
      xxl: {'max': '1399.98px'},
    }
  }
}
