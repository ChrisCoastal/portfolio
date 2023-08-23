import { redHat } from '@/app/fonts';

import './globals.css';

export const metadata = {
  title: 'Christopher Allen | Front End Developer + Designer',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'front end',
    'portfolio',
    'developer',
    'designer',
    'UI/UX',
    'React',
    'Next.js',
    'Typescript',
  ],
  description: 'I like making nice stuff. | GitHub @ChrisCoastal',
  authors: [{ name: 'Christopher Allen', url: 'https://chriscoastal.com' }],
  creator: 'Christopher Allen',
  metadataBase: new URL('https://chriscoastal.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${redHat.variable} font-sans text-stone-800`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
