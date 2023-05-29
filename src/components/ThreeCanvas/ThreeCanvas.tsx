'use client';

import React, { Suspense, useRef } from 'react';
import type { FC, ReactNode, WheelEvent } from 'react';

import AboutSection from '@/components/AboutSection/AboutSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import FoundationSection from '@/components/FoundationSection/FoundationSection';
import HeroIntersects from '@/components/HeroIntersects/HeroIntersects';
import Nav from '@/components/Nav/Nav';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ScrollPrompt from '@/components/ScrollPrompt/ScrollPrompt';
import SkillsMarquee from '@/components/SkillsMarquee/SkillsMarquee';
import type { ViewPortPos } from '@/hooks/useIntersectionObserver';
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

type ThreeCanvasProps = {
  children?: ReactNode;
};

const ThreeCanvas: FC<ThreeCanvasProps> = ({ children }) => {
  const pages = 8;
  const cursorRef = useRef({ x: 50, y: 50 });
  const horzRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const heroTextRefs = useRef<HTMLDivElement[]>([]);
  const stickyRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>{progress} % loaded</Html>;
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

  const text = `
  I LIKE MAKING
  NICE STUFF.`;
  return (
    <div style={{ height: '100vh', width: '100vw' }} className="relative">
      <animated.div
        // prettier-ignore
        // @ts-expect-error
        style={{ transform: style.x.to((value) => `translateX(${value}px)`), opacity: style.opacity }}
        ref={stickyRef}
        className={`pointer-events-none absolute top-1/4 z-30 mx-auto flex w-full -translate-x-1/2 justify-center overflow-hidden`}
      >
        <p className="whitespace-pre font-anton text-4xl font-extrabold text-black">
          {text}
        </p>
      </animated.div>
      <animated.div
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
      </animated.div>

      <Canvas onMouseMove={handleMove} onWheel={handleScroll} id="canvas">
        <ambientLight intensity={0.4} />
        <spotLight intensity={0.5} position={[10, 10, 10]} castShadow />
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={pages}>
            {/* <Float rotationIntensity={4}>
              <TestModel />
            </Float> */}

            <Scroll
              html
              // @ts-expect-error
              className="w-full"
              // onClick={() => console.log('click')}
            >
              <div className="wrapper w-full">
                <HeroIntersects animateText={animateText} />
                {/* <Nav /> */}
                {/* <ScrollPrompt /> */}
                <div>
                  <div className="hero-spacer h-screen"></div>
                  {/* <div className="h-[200vh] bg-gradient-to-br from-white to-stone-200"></div> */}
                  {/* <span className="absolute top-[105vh]" ref={blockRef}></span> */}
                  <FoundationSection />
                  <SkillsMarquee />
                  <ProjectsSection />
                  {/* <ScrollBlock top="300vh"> */}
                  <div className="h-[0.5px]"></div>
                  <AboutSection />
                  <ContactSection />
                  {/* </ScrollBlock> */}
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
