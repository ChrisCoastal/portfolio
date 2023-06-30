'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';

import AboutSection from '@/components/HomePage/AboutSection/AboutSection';
import BuildSection from '@/components/HomePage/BuildSection/BuildSection';
import CheckSection from '@/components/HomePage/CheckSection/CheckSection';
import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import ReachSection from '@/components/HomePage/ReachSection/ReachSection';
import ThoughtSection from '@/components/HomePage/ThoughtSection/ThoughtSection';
import SquareModel from '@/components/SquareModel/SquareModel';
import {
  Environment,
  Html,
  Scroll,
  ScrollControls,
  useProgress,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

type ThreeCanvasProps = {
  children?: ReactNode;
};

const ThreeCanvas: FC<ThreeCanvasProps> = ({ children }) => {
  const [pages, setPages] = useState(0);
  const [screen, setScreen] = useState<{
    orientation: 'landscape' | 'portrait';
    width: number;
  }>({ orientation: 'landscape', width: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const thoughtSectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
      <Html
        center
        className="relative z-[1000] flex h-screen w-screen flex-col items-center justify-center bg-stone-800 text-xl font-bold text-stone-100"
      >
        {progress} % loaded
      </Html>
    );
  }

  useEffect(() => {
    function updatePages(): NodeJS.Timeout | void {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      const scrollContainerHeight = scrollContainerRef.current?.clientHeight;
      if (!scrollContainerHeight) {
        return (timeoutRef.current = setTimeout(() => {
          return updatePages();
        }, 40));
      }
      // documentElement.offsetHeight (not window.innerHeight) must be used for consistency on mobile browsers
      else
        setPages(scrollContainerHeight / document.documentElement.offsetHeight);
    }

    function updateScreen() {
      const width = window.innerWidth;
      width > window.innerHeight
        ? setScreen({ orientation: 'landscape', width })
        : setScreen({ orientation: 'portrait', width });
      return width;
    }

    function handleResize() {
      updateScreen();
      updatePages();
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="relative h-screen w-screen bg-stone-100">
      <Canvas id="canvas">
        <ambientLight intensity={0.6} />
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={pages}>
            <SquareModel />
            <Scroll
              html
              // @ts-expect-error
              className="w-full"
            >
              <div
                className="wrapper relative w-full"
                id="scroll-container"
                ref={scrollContainerRef}
              >
                <HeroSection orientation={screen.orientation} />
                <BuildSection />
                <ThoughtSection ref={thoughtSectionRef} />
                <CheckSection />
                <AboutSection />
                <ReachSection screenWidth={screen.width} />
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <Environment files="/render/background.hdr" />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
