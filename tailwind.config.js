/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        glow: {
          50: '#f4f6f3',
          100: '#e3e8e1',
          200: '#c7d2c3',
          300: '#a1b59a',
          400: '#436238',
          500: '#5d784f',
          600: '#60914F',
          700: '#5d784f',
          800: '#436238',
          900: '#5d784f',
        },
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
