'use client';

import Hero from '@/components/Hero/Hero';
import ThreeCanvas from '@/components/ThreeCanvas/ThreeCanvas';
import Cursor from '@/components/UI/Cursor/Cursor';
// import styles from './page.module.css';

export default function Home() {
  return (
    <main className="relative overflow-x-clip" id="main">
      <Cursor />
      <ThreeCanvas />
    </main>
  );
}
