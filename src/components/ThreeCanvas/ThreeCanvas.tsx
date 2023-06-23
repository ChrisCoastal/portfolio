'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';

import AboutSection from '@/components/HomePage/AboutSection/AboutSection';
import BuildSection from '@/components/HomePage/BuildSection/BuildSection';
import CheckSection from '@/components/HomePage/CheckSection/CheckSection';
import HeroIntersects from '@/components/HomePage/HeroSection/HeroIntersects/HeroIntersects';
import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import ScrollPrompt from '@/components/HomePage/HeroSection/ScrollPrompt/ScrollPrompt';
import ReachSection from '@/components/HomePage/ReachSection/ReachSection';
import ThoughtSection from '@/components/HomePage/ThoughtSection/ThoughtSection';
import SquareModel from '@/components/SquareModel/SquareModel';
import type { ViewPortPos } from '@/hooks/useIntersectionObserver';
import { useSpring } from '@react-spring/three';
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
  // const positionRef = useRef(0);
  const stickyRef = useRef<HTMLDivElement>(null);

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
      <Html
        center
        className="relative z-[1000] h-screen w-screen bg-stone-800 text-stone-100"
      >
        {progress} % loaded
      </Html>
    );
  }

  const [style, animation] = useSpring(() => ({
    from: { x: 0, opacity: 1 },
  }));

  function handleClick() {
    console.log('click');
  }

  function handleMove() {
    // do stuff on move
  }

  // function handleScroll(wheelEvent: WheelEvent<HTMLDivElement>) {
  //   if (!horzRef.current?.clientWidth) return;
  //   const reverse = -1;
  //   const scrollSpeed = 1 / 20;
  //   const xTo = positionRef.current + wheelEvent.deltaY * scrollSpeed * reverse;
  //   positionRef.current = xTo;
  // }

  function animateText(pos: ViewPortPos) {
    if (!stickyRef.current?.offsetWidth) return;
    const config = { tension: 140, friction: 20, mass: 1.8 };
    const width = stickyRef.current?.offsetWidth;

    if (pos === 'intersect')
      animation.start({
        to: { x: 0, opacity: 1 },
        config,
      });
    if (pos === 'above')
      animation.start({
        to: { x: 30, opacity: 0 },
        config,
      });
    if (pos === 'below')
      animation.start({
        to: { x: -30, opacity: 0 },
        config,
      });
  }

  useEffect(() => {
    function updatePages(): NodeJS.Timeout | void {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      const scrollContainerHeight = scrollContainerRef.current?.clientHeight;
      if (!scrollContainerHeight) {
        return (timeoutRef.current = setTimeout(() => {
          return updatePages();
        }, 40));
      } else setPages(scrollContainerHeight / window.innerHeight);
    }

    function updateScreen() {
      const width = window.innerWidth;
      width > window.innerHeight
        ? setScreen({ orientation: 'landscape', width })
        : setScreen({ orientation: 'portrait', width });
    }

    function handleResize() {
      updatePages();
      updateScreen();
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(thoughtSectionRef);

  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      className="relative bg-stone-100"
    >
      {/* <animated.div
        // prettier-ignore
        // @ts-expect-error
        style={{ transform: style.x.to((value) => `translateX(${value}px)`), opacity: style.opacity }}
        ref={stickyRef}
        className={`pointer-events-none absolute z-30 mx-auto flex w-full origin-center -translate-x-1/2 justify-center overflow-hidden`}
      >
      </animated.div> */}

      <Canvas onMouseMove={handleMove} id="canvas">
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
                className="wrapper relative w-full backdrop-blur-[1px]"
                id="scroll-container"
                ref={scrollContainerRef}
              >
                <HeroIntersects animateText={animateText} />
                {/* <ScrollPrompt /> */}
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
        <Environment files="/assets/background.hdr" />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
