module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato'
      },
      colors: {
        'morning-blue': '#8aa399',
        rhythm: '#7d84b2',
        'wild-blue-yonder': '#8fa6cb',
        'yellow-green-crayola': '#dbf4a7',
        'aero-blue': '#d5f9de'
      },
      animation: {
        'gradient-x':'gradient-x 10s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      }
      }
    },
  },
  plugins: [],
}
