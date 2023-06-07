'use client';

import ThreeCanvas from '@/components/ThreeCanvas/ThreeCanvas';
import useColorScrollThumb from '@/hooks/useColorScrollThumb';

export default function Home() {
  useColorScrollThumb();

  return (
    <main className="relative overflow-x-clip" id="main">
      <ThreeCanvas />
    </main>
  );
}
