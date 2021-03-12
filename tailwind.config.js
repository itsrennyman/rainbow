const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    options: {
      safelist: [/^border-/, /^bg-/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        orange: colors.orange,
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        lime: colors.lime,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray
      }
    }
  },
  variants: {
    extend: {
      transform: ['hover'],
      borderWidth: ['hover']
    }
  },
  plugins: []
}
