// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Satoshi',
        secondary: 'Clash Display'
      },
      screens: {
        md: '821px',
        lg: '1024px',
        xl: '1281px',
        '2xl': '1441px',
        '3xl': '1729px',
        xs: '270px'
      },
      colors: {
        brand_primary_color: '#004db3',
        brand_secondary_color: '#a1a1a1',
        social_media_color: '#2A2A2B',
        button_bg_color: '#054FB3',
        brand_footer: '#000F24'
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0'
          },
          '100%': {
            backgroundPosition: '700px 0'
          }
        }
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
