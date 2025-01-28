/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#feefde',
        dark: {
          100: '#1a1a1a',
          200: '#2a2a2a',
          300: '#3a3a3a',
          400: '#4a4a4a',
        }
      },
      borderRadius: {
        'full': '9999px',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#D1D5DB',
            a: {
              color: '#feefde',
              '&:hover': {
                color: '#feefde',
              },
            },
          },
        },
      },
      animation: {
        'wee1': 'wee1 2s linear infinite',
        'wee2': 'wee2 2s linear infinite 0.75s',
      },
      keyframes: {
        wee1: {
          '0%': { transform: 'translateX(-10em) rotate(0deg)' },
          '100%': { transform: 'translateX(7em) rotate(180deg)' },
        },
        wee2: {
          '0%': { transform: 'translateX(-8em) rotate(0deg)' },
          '100%': { transform: 'translateX(8em) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};