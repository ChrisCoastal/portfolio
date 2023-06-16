import { anton, redHat, vollkorn } from '@/app/fonts';
import Cursor from '@/components/UI/Cursor/Cursor';

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
    <html lang="en" className={`${redHat.variable} font-sans text-stone-800`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
