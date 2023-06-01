// import variables from './src/sass/variables.module.scss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,scss}", "index.html"],
  theme: {
    extend: {
      colors: {
        'bell-primary': '#00549A',
        'blue' : {
          'dark': '#00215E',
          'medium': '#003778',
          'light': '#C2CEDF'
        }
      }
    }
  },
  plugins: [],
}
