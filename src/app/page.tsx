import { Inter } from 'next/font/google';

import ThreeCanvas from '@/components/ThreeCanvas/ThreeCanvas';

import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <ThreeCanvas />
    </main>
  );
}
