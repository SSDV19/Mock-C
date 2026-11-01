/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        serif: ['"Cormorant Garamond"', 'Didot', 'Georgia', 'serif'],
        tamil: ['"Noto Serif Tamil"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',  // pure royal ivory cream
          100: '#FAF5EC', // warm parchment
          200: '#F4EBDC', // sandalwood cream
          300: '#EBDDC5', // antique linen
          400: '#DEC9A6',
          500: '#CBB288',
        },
        brown: {
          900: '#1F120C', // deep espresso old-money brown
          850: '#2A1810', // royal Chettinad rosewood
          800: '#3D2418', // roasted teakwood
          700: '#523323', // antique mahogany
          600: '#6E4530',
          500: '#8E5C41',
          400: '#AD775A',
          300: '#CC9A7E',
        },
        gold: {
          300: '#E6CF8B',
          400: '#D5BA6A',
          500: '#C59B3F', // Kumbakonam brass / temple gold
          600: '#A47D28',
          700: '#7F5E19',
        },
        sacred: {
          kumkum: '#8B2226',  // temple vermilion red
          leaf: '#26532B',    // fresh banana leaf green
          leafLight: '#3D7D44',
          terracotta: '#9E4731',
          copper: '#B86A46',
        }
      },
      boxShadow: {
        'bezel-outer': '0 4px 20px -2px rgba(31, 18, 12, 0.06), 0 2px 6px -1px rgba(31, 18, 12, 0.04)',
        'bezel-inner': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(31, 18, 12, 0.05)',
        'gold-glow': '0 0 25px -5px rgba(197, 155, 63, 0.3)',
      },
      transitionTimingFunction: {
        'heritage': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
