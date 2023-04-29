import { redHat, vollkorn } from '@/app/fonts';

import './globals.css';

export const metadata = {
  title: 'Christopher Allen | Frontend Developer',
  description:
    'Never wait for ink to dry. Selected web apps, projects, and writing authored by Christopher Allen. GitHub @ChrisCoastal',
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
