module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    "postcss-easy-import": { prefix: "_", extensions: [".css", ".scss"] },
  },
};