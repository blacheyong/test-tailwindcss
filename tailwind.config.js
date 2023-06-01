// import variables from './src/sass/variables.module.scss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,scss}", "index.html"],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'bell-primary': '#00549A',
        'blue' : {
          'dark': '#00215E',
          'medium': '#003778',
          'light': '#C2CEDF',
          'electric': '#0075FF'
        },
        'disabled': {
          'dark': '#8D8D8D',
          'light': '#BABEC2'
        }
      },
      fontFamily: {
        'base': ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        md: ['15px', '16px']
      },
      outlineOffset: {
        5: '5px'
      },
      padding: {
        '10px': '10px',
        '20px': '20px'
      },
      ringOffsetWidth: {
        5: '5px'
      }
    }
  },
  plugins: [],
}
