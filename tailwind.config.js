/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        'primary-black': '#1A232E',
        'primary-pink': '#ee5d6c',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
