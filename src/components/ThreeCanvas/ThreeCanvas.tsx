'use client';

import React, {
  CSSProperties,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react';
import { log } from 'console';
import type { FC, ReactNode, WheelEvent } from 'react';

// import { vollkorn } from '@/app/fonts';
// import AboutSection from '@/components/AboutSection/AboutSection';
// import CursorSpotLight from '@/components/CursorSpotLight/CursorSpotLight';
// import Hero from '@/components/Hero/Hero';
// import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import HeroIntersects from '@/components/HeroIntersects/HeroIntersects';
// import Model from '@/components/Model/Model';
import Nav from '@/components/Nav/Nav';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ScrollPrompt from '@/components/ScrollPrompt/ScrollPrompt';
import StackIcons from '@/components/StackIcons/StackIcons';
// import ScrollPrompt from '@/components/ScrollPrompt/ScrollPrompt';
// import StackSection from '@/components/StackSection/StackSection';
import TestModel from '@/components/TestModel/TestModel';
import Tools from '@/components/Tools/Tools';
import Cursor from '@/components/UI/Cursor/Cursor';
import Marquee from '@/components/UI/Marquee/Marquee';
// import TransitionBlock from '@/components/TransitionBlock/TransitionBlock';
// import ScrollBlock from '@/components/UI/ScrollBlock/ScrollBlock';
// import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import type { ViewPortPos } from '@/hooks/useIntersectionObserver';
// import useIntersectionObserver from '@/hooks/useIntersectionObserver';
// import { mainSections } from '@/utils/content';
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
    // const scrollHeight = document.getElementById('scroll-controls');
    // console.log('scroll', scrollHeight);
    if (!horzRef.current?.clientWidth) return;
    // console.log(
    //   'scroll',
    //   horzRef.current?.getBoundingClientRect().top,
    //   horzRef.current?.clientWidth
    // );
    // const elWidth = horzRef.current?.clientWidth / document.body.clientWidth;
    // console.log(horzRef.current?.clientWidth / document.body.clientWidth);
    const relativeElWidth =
      (horzRef.current?.offsetWidth / document.body.clientWidth) * 50;
    // console.log(wheelEvent.deltaY * 0.01);
    const reverse = -1;
    // const rMax = 50 + relativeElWidth;
    // const lMax = rMax * -1;
    const xFrom = positionRef.current;
    let xTo = positionRef.current + (wheelEvent.deltaY / 20) * reverse;
    // console.log(xTo);
    // if (xTo > rMax) xTo = rMax;
    // if (xTo < lMax) xTo = lMax;
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
    console.log(
      stickyRef.current?.offsetWidth,
      width / (2 * document.body.clientWidth)
    );
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
      <Cursor />
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
          <div className="h-24 w-24 bg-blue-300"></div>
          <div className="h-24 w-24 bg-blue-300"></div>
          <div className="h-24 w-24 bg-blue-300"></div>
          <div className="h-24 w-24 bg-blue-300"></div>
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
              className="w-full"
              // onClick={() => console.log('click')}
            >
              <div className="wrapper w-full">
                <HeroIntersects animateText={animateText} />
                {/* <Nav /> */}
                <ScrollPrompt />
                <div>
                  <div className="hero-spacer h-screen"></div>
                  {/* <div className="h-[200vh] bg-gradient-to-br from-white to-stone-200"></div> */}
                  {/* <span className="absolute top-[105vh]" ref={blockRef}></span> */}
                  <h1 className="text-4xl font-extrabold text-black">
                    Built around core
                  </h1>
                  <StackIcons />
                  <Marquee />
                  <ProjectsSection />
                  {/* <ScrollBlock top="300vh">

<StackSection />
<AboutSection />
</ScrollBlock> */}
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
