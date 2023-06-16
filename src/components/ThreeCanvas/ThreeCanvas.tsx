'use client';

import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { FC, ReactNode, WheelEvent } from 'react';

import AboutSection from '@/components/AboutSection/AboutSection';
import BuildSection from '@/components/BuildSection/BuildSection';
import CheckSection from '@/components/CheckSection/CheckSection';
import HeroIntersects from '@/components/HeroIntersects/HeroIntersects';
import HeroSection from '@/components/HeroSection/HeroSection';
import Nav from '@/components/Nav/Nav';
import ReachSection from '@/components/ReachSection/ReachSection';
import ScrollPrompt from '@/components/ScrollPrompt/ScrollPrompt';
import SkillsMarquee from '@/components/SkillsMarquee/SkillsMarquee';
import SquareModel from '@/components/SquareModel/SquareModel';
import ThoughtSection from '@/components/ThoughtSection/ThoughtSection';
import type { ViewPortPos } from '@/hooks/useIntersectionObserver';
import { useSpring } from '@react-spring/three';
import { animated, useScroll as useSpringScroll } from '@react-spring/web';
import {
  Environment,
  Float,
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
  const [orientation, setOrientation] = useState<'landscape' | 'portrait'>(
    'landscape'
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // const horzRef = useRef<HTMLDivElement>(null);
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

    function updateOrientation() {
      window.innerWidth > window.innerHeight
        ? setOrientation('landscape')
        : setOrientation('portrait');
    }

    function handleResize() {
      updatePages();
      updateOrientation();
    }

    window.addEventListener('resize', handleResize);
    updatePages();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      className="relative bg-stone-100"
    >
      <animated.div
        // prettier-ignore
        // @ts-expect-error
        style={{ transform: style.x.to((value) => `translateX(${value}px)`), opacity: style.opacity }}
        ref={stickyRef}
        className={`pointer-events-none absolute z-30 mx-auto flex w-full origin-center -translate-x-1/2 justify-center overflow-hidden`}
      >
        <HeroSection orientation={orientation} />
      </animated.div>

      <Canvas onMouseMove={handleMove} id="canvas">
        <ambientLight intensity={0.4} />
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
                <div className="hero-spacer h-[100vh]"></div>
                {/* <Nav /> */}
                {/* <ScrollPrompt /> */}
                <div>
                  <div className="spacer h-[20rem]" />
                  <BuildSection />
                  <ThoughtSection />
                  <CheckSection />
                  <AboutSection />
                  <ReachSection />
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <Environment files="/assets/clouds.hdr" />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
