const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    // https://tailwindcss.com/docs/customizing-colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // black: colors.black,
      // white: colors.white,
      gray: colors.warmGray, // Change grays
      // red: colors.red,
      // yellow: colors.amber,
      // green: colors.emerald,
      // lightBlue: colors.lightBlue,
      // blue: colors.blue,
      // indigo: colors.indigo,
      // purple: colors.violet,
      // pink: colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
