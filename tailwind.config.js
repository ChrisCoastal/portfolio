/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    '.src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
      },
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['var(--font-redHat)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-vollkorn)', ...defaultTheme.fontFamily.serif],
        anton: 'var(--font-anton)',
        'red-hat': 'var(--font-redHat)',
        vollkorn: 'var(--font-vollkorn)',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      screens: {
        xs: '420px',
      },
      animation: {
        'spin-slow': 'spin-slow 4s linear infinite',
        'marquee-rl': 'marquee 80s linear infinite',
        'marquee-lr': 'marquee 80s linear infinite reverse',
        'rotate3d-45': 'rotate3d-45 1s ease-in-out',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'spin-slow': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
        'rotate3d-45': {
          '0%': {
            transform: 'rotate3d(0, 0, 0) rotate(45deg)',
            opacity: 0,
          },
          '60%': {
            opacity: 1,
          },
          '100%': {
            transform: 'rotate3d(0, 1, 0, 180deg) rotate(45deg)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
