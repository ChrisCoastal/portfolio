import { redHat } from '@/app/fonts';

import './globals.css';

export const metadata = {
  title: 'Christopher Allen | Front End Developer Portfolio',
  description: 'I like making nice stuff. | GitHub @ChrisCoastal',
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
