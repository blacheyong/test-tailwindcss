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
        'bell-primary': '#00549A', // should be 'primary' or 'blue-bell' or 'blue-primary' ?
        'blue' : {
          'dark': '#00215E',
          'light': '#C2CEDF',
          'medium': '#003778',
          'electric': '#0075FF'
        },
        'dark': '#16191C',
        'disabled': {
          'dark': '#8D8D8D',
          'light': '#BABEC2'
        },
        'gray': {
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
        lg: ['18px', '20px']
      },
      outlineOffset: {
        5: '5px'
      },
      padding: {
        '8px': '8px',
        '10px': '10px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px'
      },
      ringOffsetWidth: {
        5: '5px'
      }
    }
  },
  plugins: [],
}
