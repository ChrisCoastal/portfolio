import './globals.css';

export const metadata = {
  title: 'Christopher Allen | Frontend Developer',
  description:
    'Never wait for ink to dry. Selected web apps, projects, and writing authored by Christopher Allen. @ChrisCoastal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
