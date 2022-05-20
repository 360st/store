module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '0.5rem'
    },
    screens: {
      'xl': '1266px',
      '2xl': '1266px'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
