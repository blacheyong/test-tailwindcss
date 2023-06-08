/** @type {import('tailwindcss').Config} */

const { filterTokensByType } = require("./fns");
const tokens = require("./output/_tokens.json")

const colorTokens = filterTokensByType('color', tokens)

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
    colors: colorTokens.colors,
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
      lg: '992px'
    }
  }
}
