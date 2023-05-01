import ThreeCanvas from '@/components/ThreeCanvas/ThreeCanvas';

// import styles from './page.module.css';

export default function Home() {
  return (
    <main className="relative">
      {/* <div className="absolute z-10 flex h-[300vh] flex-col gap-[98vh] bg-red-600">
        <p>here</p>
        <p>here</p>
        <p>here</p>
      </div> */}
      <ThreeCanvas />
    </main>
  );
}
