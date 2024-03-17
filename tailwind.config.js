/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'back-in-right': {
          '0%': { transform: 'translateX(100%) scale(0.5)' },
          '75%': { transform: 'translateX(0) scale(1.1)' },
        },
        'back-in-down': {
          '0%': { transform: 'translateY(-100%) scale(0)', opacity: 0 },
          '100%': { display: 'flex' },
        },
        'back-out-up': {
          '0%': { display: 'flex' },
          '100%': { transform: 'translateY(-100%) scale(0)', opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.8, 0.2, 1, 0.5)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
