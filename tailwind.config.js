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
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['var(--font-redHat)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-vollkorn)', ...defaultTheme.fontFamily.serif],
        anton: 'var(--font-anton)',
        'red-hat': 'var(--font-redHat)',
        vollkorn: 'var(--font-vollkorn)',
      },
      animation: {
        'marquee-rl': 'marquee 50s linear infinite',
        'marquee-lr': 'marquee 50s linear infinite reverse',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    // plugin(({ matchUtilities, theme }) => {
    //   matchUtilities(
    //     {
    //       'animation-delay': (value) => {
    //         return {
    //           'animation-delay': value,
    //         };
    //       },
    //     },
    //     {
    //       values: theme('transitionDelay'),
    //     }
    //   );
    // }),
  ],
};
