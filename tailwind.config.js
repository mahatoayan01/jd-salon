/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8EE',
          100: '#F5EFCF',
          200: '#ECDD9E',
          300: '#E1C768',
          400: '#D5B03C',
          500: '#C59E27',
          600: '#A9811C',
          700: '#876217',
          800: '#6E4E18',
          900: '#5C4018',
        },
        dark: {
          950: '#0F0F10',
          900: '#161618',
          800: '#222226',
          700: '#303036',
          600: '#45454E',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FAF6EF',
          200: '#F3EBDD',
          300: '#E9DBC4',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
