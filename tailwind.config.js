/** @type {import('tailwindcss').Config} */

const { filterArrayTokensByType, filterTokensByType } = require("./fns");
const tokens = require("./output/_tokens.json")

const colorTokens = filterTokensByType('color', tokens)
const typoTokens = filterArrayTokensByType('typography', tokens)

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
      'bell-slim': ['bell-slim', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: typoTokens,
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
