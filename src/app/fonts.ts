import { Anton, Gantari, Red_Hat_Display, Vollkorn } from 'next/font/google';

export const redHat = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-redHat',
});

export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

// export const gantari = Gantari({
//   subsets: ['latin'],
//   variable: '--font-redHat',
// });

export const vollkorn = Vollkorn({
  subsets: ['latin'],
  variable: '--font-vollkorn',
});
