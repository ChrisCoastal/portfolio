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
import ContactSection from '@/components/ContactSection/ContactSection';
import HeroIntersects from '@/components/HeroIntersects/HeroIntersects';
import Nav from '@/components/Nav/Nav';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ScrollPrompt from '@/components/ScrollPrompt/ScrollPrompt';
import SkillsMarquee from '@/components/SkillsMarquee/SkillsMarquee';
import SquareModel from '@/components/SquareModel/SquareModel';
import FoundationSection from '@/components/StackSection/StackSection';
import TestModel from '@/components/TestModel/TestModel';
import useDimensions from '@/hooks/useDimensions';
import type { ViewPortPos } from '@/hooks/useIntersectionObserver';
import useResizeWindow from '@/hooks/useResizeWindow';
import { config, useSpring } from '@react-spring/three';
import { animated, useScroll as useSpringScroll } from '@react-spring/web';
import {
  Backdrop,
  Environment,
  Float,
  Html,
  Scroll,
  ScrollControls,
  useProgress,
  useScroll,
} from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';

import HeroText from '../Hero/HeroText';
import HeroSection from '../HeroSection/HeroSection';
import Citation from '../UI/Citation/Citation';

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
  const cursorRef = useRef({ x: 50, y: 50 });
  const horzRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const heroTextRefs = useRef<HTMLDivElement[]>([]);
  const stickyRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
      <Html center className="h-screen w-screen bg-stone-800 text-white">
        {progress} % loaded
      </Html>
    );
  }

  const [styleBlock, animationBlock] = useSpring(() => ({
    from: { x: 0 },
  }));

  const [style, animation] = useSpring(() => ({
    from: { x: 0, opacity: 1 },
  }));

  function handleClick() {
    console.log('click');
  }

  function handleMove() {
    // do stuff on move
  }

  function handleScroll(wheelEvent: WheelEvent<HTMLDivElement>) {
    if (!horzRef.current?.clientWidth) return;
    const reverse = -1;
    const scrollSpeed = 1 / 20;
    const xFrom = positionRef.current;

    let xTo = positionRef.current + wheelEvent.deltaY * scrollSpeed * reverse;
    positionRef.current = xTo;

    animationBlock.start({
      from: { x: xFrom },
      to: { x: xTo },
      config: { tension: 30, friction: 8, mass: 1 },
    });
  }

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
    <div style={{ height: '100vh', width: '100vw' }} className="relative">
      <animated.div
        // prettier-ignore
        // @ts-expect-error
        style={{ transform: style.x.to((value) => `translateX(${value}px)`), opacity: style.opacity }}
        ref={stickyRef}
        className={`pointer-events-none absolute z-30 mx-auto flex w-full origin-center -translate-x-1/2 justify-center overflow-hidden`}
      >
        {/* <p className="whitespace-pre font-anton text-4xl font-extrabold text-black">
          {text}
        </p> */}
        {/* <div className="relative h-[60vw] w-[90vw] bg-blue-300/30">
          <div className="absolute left-[6vw] top-[11vw] h-[2.5vw] w-[2.5vw]">
            <div className="flex h-[2.5vw] w-[2.5vw] rotate-45 items-center justify-center border border-red-400">
              <p className="origin-center -rotate-45">1</p>
            </div>
          </div>

          <HeroText height="60vw" width="90vw" className="absolute" />
        </div> */}
      </animated.div>
      {/* <animated.div
        style={{
          // @ts-expect-error
          transform: styleBlock.x.to((value) => `translateX(${value}vw)`),
        }}
        ref={horzRef}
        className={`pointer-events-none absolute h-screen w-[300vw] overflow-hidden text-center`}
      >
        <div className="flex h-full w-full items-center justify-center gap-4">
          <div className="h-96 w-96 rotate-45 bg-pink-500 bg-blend-color-burn"></div>
        </div>
      </animated.div> */}

      <Canvas onMouseMove={handleMove} onWheel={handleScroll} id="canvas">
        <ambientLight intensity={0.4} />
        {/* <spotLight intensity={0.5} position={[10, 10, 10]} castShadow /> */}
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={pages}>
            <Float rotationIntensity={6}>
              <SquareModel />
            </Float>
            {/* <Float rotationIntensity={2}>
              <SquareModel />
            </Float>
            <Float rotationIntensity={10}>
              <SquareModel />
            </Float> */}

            <Scroll
              html
              // @ts-expect-error
              className="w-full"
              // onClick={() => console.log('click')}
            >
              <div
                className="wrapper w-full"
                id="scroll-container"
                ref={scrollContainerRef}
              >
                <HeroIntersects animateText={animateText} />
                {/* <Nav /> */}
                {/* <ScrollPrompt /> */}
                <div>
                  {/* <div className="h-[200vh] bg-gradient-to-br from-white to-stone-200"></div> */}
                  {/* <span className="absolute top-[105vh]" ref={blockRef}></span> */}
                  <HeroSection orientation={orientation} />
                  <FoundationSection />
                  <SkillsMarquee />
                  <ProjectsSection />
                  {/* <ScrollBlock top="300vh"> */}
                  <AboutSection />
                  <ContactSection />
                  {/* </ScrollBlock> */}
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        {/* <Environment preset="warehouse" /> */}
        <Environment files="/assets/clouds.hdr" />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
