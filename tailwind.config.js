module.exports = {
  content: ['index.html', "./node_modules/tw-elements/dist/js/**/*.js", "./src/**/*.{html,js}",],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#729193',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
