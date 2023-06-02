// import variables from './src/sass/variables.module.scss'
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,scss}", "index.html"]
export const theme = {
  extend: {
    borderWidth: {
      '1': '1px'
    },
    colors: {
      'bell-primary': '#00549A',
      'bell-primary-90': 'rgba(0, 84, 154, .9)',
      'blue': {
        'bell': 'bell-primary',
        'dark': '#00215E',
        'light': '#C2CEDF',
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
      'light': '#F4F4F4'
    },
    fontFamily: {
      'base': ['Arial', 'Helvetica', 'sans-serif'],
    },
    fontSize: {
      sm: ['13px', '14px'],
      md: ['15px', '16px'],
      lg: ['18px', '20px'],
      '14': ['14px', '18px']
    },
    margin: {
      '5px': '5px'
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
    }
  }
}
export const plugins = [ // doesnt work atm, need to import @tailwindcss/typography ?
  plugin(function({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.sm') },
      'h2': { fontSize: theme('fontSize.xl') },
      'h3': { fontSize: theme('fontSize.lg') },
    })
  })
]
