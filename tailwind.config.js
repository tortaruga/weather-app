const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};