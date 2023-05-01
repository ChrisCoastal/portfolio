'use client';

import React, {
  CSSProperties,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react';
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

type ThreeCanvasProps = {
  children?: ReactNode;
};

extend({ TestScroll });

const ThreeCanvas: FC<ThreeCanvasProps> = ({ children }) => {
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
    to: { x: 1 },
  }));

  function handleClick() {
    console.log('click');
  }

  function handleMove() {
    // works
    // do stuff on move
  }

  function handleScroll(wheelEvent: WheelEvent<HTMLDivElement>) {
    console.log('scroll', stickyRef.current?.getBoundingClientRect().top);
    const max = 100;
    const min = max * -1;
    const start = positionRef.current;
    const end = positionRef.current + wheelEvent.deltaY;

    if (end > max) {
      positionRef.current = max;
    } else if (end < min) {
      positionRef.current = min;
    } else {
      positionRef.current += wheelEvent.deltaY;
    }

    animation.start({
      from: { x: start },
      to: { x: positionRef.current },
      config: {
        friction: 8,
        tension: 100,
      },
    });
    positionRef.current += wheelEvent.deltaY;

    // works
    // do stuff on wheel
  }

  const [slideIn, animateSlideIn] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 1 },
    config: {
      friction: 8,
      tension: 100,
    },
  }));

  // observe.viewPortPos === 'intersect' && api();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('position', stickyRef.current!.getBoundingClientRect().top);
    }, 500);

    return clearInterval(interval);
  }, []);

  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      className="fixed"
      // className="fixed bg-gradient-to-br from-pink-200 to-teal-700"
    >
      <div className="absolute h-full w-full bg-gradient-to-br from-pink-200 to-teal-700"></div>
      <div className="pointer-events-none absolute top-10 z-10 flex h-full w-full items-center justify-center">
        <p className="bg-green-400/20 pb-96">Yup, that&apos;s a problem</p>
      </div>
      {/* <animated.div
        style={{
          // @ts-expect-error
          transform: style.x.to((value) => `translateX(${value}px)`),
          // transform: style.x.to((value) => `rotateZ(${value}deg)`),
        }}
        className={`pointer-events-none absolute left-1/2 overflow-hidden bg-black`}
      >
        <p className="text-lg font-extrabold ">hello</p>
      </animated.div> */}
      {/* <Canvas style={{ background: 'black' }}> */}
      {/* <Hero /> */}
      {/* <TestScroll /> */}
      <Canvas onMouseMove={handleMove} onWheel={handleScroll}>
        <ambientLight intensity={0.4} />
        <spotLight intensity={0.5} position={[10, 10, 10]} castShadow />
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={8}>
            <Float rotationIntensity={4}>
              <TestModel />
            </Float>
            {/* <Scroll>
    <Float rotationIntensity={3}>
      <TestModel />
    </Float>
  </Scroll> */}
            {/* <Model /> */}
            {/*@ts-expect-error className is passed to Scroll*/}
            <Scroll html className="relative h-full w-full ">
              {/* <div className="fixed">This is in scroll.</div> */}
              <Nav />
              {/* <ScrollPrompt /> */}
              <div className="h-screen w-full overflow-auto bg-green-300/50">
                <div className="h-96 w-48 bg-blue-200/20">sibling</div>
                <h1
                  ref={stickyRef}
                  className="!sticky top-0 h-full bg-orange-400/30"
                >
                  STICKY
                </h1>
                <div className="h-96 w-48 bg-blue-200/20">sibling</div>
                <div className="relative h-96 w-48 bg-red-500">
                  <div className="h-24 w-48 bg-blue-200/20">sibling</div>
                </div>
                <div className="h-96 w-48 bg-blue-200/20">sibling</div>
              </div>

              <ScrollBlock top="200vh">
                <Tools />
              </ScrollBlock>
              <span className="absolute top-[105vh]" ref={blockRef}></span>
              {/* <ScrollBlock top="300vh">
      <h1
        className={`text-center font-vollkorn text-4xl font-medium`}
      >
        but instead take that moment...
      </h1>
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
