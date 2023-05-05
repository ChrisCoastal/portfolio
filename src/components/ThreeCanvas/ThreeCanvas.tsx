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

import { vollkorn } from '@/app/fonts';
import AboutSection from '@/components/AboutSection/AboutSection';
import CursorSpotLight from '@/components/CursorSpotLight/CursorSpotLight';
import Model from '@/components/Model/Model';
import Nav from '@/components/Nav/Nav';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ScrollPrompt from '@/components/ScrollPrompt/ScrollPrompt';
import StackSection from '@/components/StackSection/StackSection';
import ScrollBlock from '@/components/UI/ScrollBlock/ScrollBlock';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { mainSections } from '@/utils/content';
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

import Hero from '../Hero/Hero';
import TestModel from '../TestModel/TestModel';
import TestScroll from '../TestScroll/TestScroll';
import Tools from '../Tools/Tools';
import TransitionBlock from '../TransitionBlock/TransitionBlock';

type ThreeCanvasProps = {
  children?: ReactNode;
};

extend({ TestScroll });

const ThreeCanvas: FC<ThreeCanvasProps> = ({ children }) => {
  const pages = 8;
  const positionRef = useRef(0);
  const stickyRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  const observe = useIntersectionObserver(blockRef, {
    root: null,
    threshold: 0,
    rootMargin: '0px',
  });

  const [style, animation] = useSpring(() => ({
    from: { x: 0 },
  }));

  function handleClick() {
    console.log('click');
  }

  function handleMove() {
    // works
    // do stuff on move
  }

  function handleScroll(wheelEvent: WheelEvent<HTMLDivElement>) {
    if (!stickyRef.current?.clientWidth) return;
    console.log(
      'scroll',
      stickyRef.current?.getBoundingClientRect().top,
      stickyRef.current?.clientWidth
    );
    // const elWidth = stickyRef.current?.clientWidth / document.body.clientWidth;
    console.log(stickyRef.current?.clientWidth / document.body.clientWidth);
    const relativeElWidth =
      (stickyRef.current?.offsetWidth / document.body.clientWidth) * 50;
    console.log(relativeElWidth);
    const reverse = -1;
    const rMax = 50 + relativeElWidth;
    const lMax = rMax * -1;
    const xFrom = positionRef.current;
    let xTo = positionRef.current + wheelEvent.deltaY * 0.1 * reverse;

    if (xTo > rMax) xTo = rMax;
    if (xTo < lMax) xTo = lMax;
    positionRef.current = xTo;

    animation.start({
      from: { x: xFrom },
      to: { x: xTo },
      config: { tension: 140, friction: 12 },
    });
  }

  // observe.viewPortPos === 'intersect' && api();

  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      className="relative"
      // className="fixed bg-gradient-to-br from-pink-200 to-teal-700"
    >
      {/* <div className="absolute h-full w-full bg-gradient-to-br from-pink-200 to-teal-700"></div> */}
      {/* <div className="pointer-events-none absolute top-10 z-10 flex h-full w-full items-center justify-center">
        <p className="bg-green-400/20 pb-96">Yup, that&apos;s a problem</p>
      </div> */}
      <animated.div
        style={{
          // @ts-expect-error
          transform: style.x.to((value) => `translateX(${value}vw)`),
          // transform: style.x.to((value) => `rotateZ(${value}deg)`),
        }}
        ref={stickyRef}
        className={`pointer-events-none absolute left-1/2 top-1/3 z-30 mx-auto -translate-x-1/2 overflow-hidden text-center`}
      >
        <p className="text-4xl font-extrabold text-black">
          That looks like a problem.
        </p>
      </animated.div>
      {/* <Canvas style={{ background: 'black' }}> */}
      {/* <Hero /> */}
      {/* <TestScroll /> */}
      <Canvas onMouseMove={handleMove} onWheel={handleScroll}>
        <ambientLight intensity={0.4} />
        <spotLight intensity={0.5} position={[10, 10, 10]} castShadow />
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={pages}>
            <Float rotationIntensity={4}>
              <TestModel />
            </Float>
            {/* <Scroll>
    <Float rotationIntensity={3}>
      <TestModel />
    </Float>
  </Scroll> */}
            {/* <Model /> */}

            {/* prettier-ignore}*/}
            <Scroll
              html
              className="absolute h-full w-full"
              // onClick={() => console.log('click')}
              // onScroll={() => console.log('scrolling')}
            >
              {/* <TransitionBlock /> */}
              <Nav />
              {/* <div className=" bg-orange-500/30">
                <div className="h-96 bg-orange-500/10"></div>
                <div className="h-96 bg-orange-500/10">
                  <div className="sticky top-0 h-32 bg-orange-500/30"></div>
                  <div className="h-32 bg-orange-500/40"></div>
                  <div className="h-32 bg-orange-500/50"></div>
                </div>
              </div>
              <div className="h-screen bg-red-500/30"></div>
              <div className="h-screen bg-purple-500/30"></div> */}
              <span className="absolute top-[105vh]" ref={blockRef}></span>
              {/* <ScrollBlock top="300vh">

      <StackSection />
      <ProjectsSection />
      <AboutSection />
    </ScrollBlock> */}
            </Scroll>
          </ScrollControls>
        </Suspense>
        <Environment preset="night" />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
