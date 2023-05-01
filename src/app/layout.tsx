import { redHat, vollkorn } from '@/app/fonts';

import './globals.css';

export const metadata = {
  title: 'Christopher Allen | Frontend Developer Portfolio',
  description:
    'I like to solve problems in nice ways. | Christopher Allen | GitHub @ChrisCoastal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${redHat.variable} ${vollkorn.variable} font-sans text-white`}
    >
      <body>{children}</body>
    </html>
  );
}
