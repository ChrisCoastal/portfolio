import { anton, redHat, vollkorn } from '@/app/fonts';

import './globals.css';

export const metadata = {
  title: 'Christopher Allen | Frontend Developer Portfolio',
  description: 'I like making nice stuff. | GitHub @ChrisCoastal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${redHat.variable} ${vollkorn.variable} ${anton.className} font-sans text-black`}
    >
      <body>{children}</body>
    </html>
  );
}
