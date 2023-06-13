/** @type {import('tailwindcss').Config} */

const svgToDataUri = require('mini-svg-data-uri')

const { filterArrayTokensByType, filterTokensByType } = require("./fns");
const tokens = require("./output/_tokens.json")

const colorTokens = filterTokensByType('color', tokens)
const typoTokens = filterArrayTokensByType('typography', tokens)

export const content = ["./src/**/*.{js,scss}", "index.html"]
export const darkMode = 'class'
export const theme = {
  extend: {
    colors: colorTokens.colors,
    backgroundImage: (theme) => ({
      'dropdown-arrow': `url("${svgToDataUri(
        `<svg fill='none' height='11' viewBox='0 0 10 11' width='10' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='m5 8.65918 4.5-5h-9z' fill='${theme('colors.blue.medium')}' fill-rule='evenodd'/></svg>`
      )}")`,
    }),
    borderRadius: {
      '3px': '3px'
    },
    borderWidth: {
      '1': '1px'
    },
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
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          h1: {
            color: theme('colors.gray.dark')
          },
          p: {
            fontSize: theme('fontSize.body-default[0]'),
            fontWeight: theme('fontSize.body-default[1].fontWeight'),
            letterSpacing: theme('fontSize.body-default[1].letterSpacing'),
            lineHeight: theme('fontSize.body-default[1].lineHeight'),
          }
        }
      }
    })
  }
}

export const plugins = [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
]