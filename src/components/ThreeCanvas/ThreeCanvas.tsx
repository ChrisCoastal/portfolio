'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
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
import { animated, config, useSpring } from '@react-spring/three';
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
  const rotationRef = useRef(1);
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

  const scroll = useScroll();

  const [spring, api] = useSpring(() => ({
    from: { opacity: 1 },
    to: { opacity: 0 },
  }));

  function handleMove() {
    // works
    // do stuff on move
  }

  function handleScroll(e: WheelEvent<HTMLDivElement>) {
    console.log('scroll', e);
    rotationRef.current += 0.1;
  }

  observe.viewPortPos === 'intersect' && api();

  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      onScroll={handleScroll}
      className="relative bg-gradient-to-br from-pink-200 to-teal-700"
    >
      {/* {observe.viewPortPos === 'intersect' && (
        <animated.div
          className={`pointer-events-none fixed z-50 h-full w-full bg-pink-500/30`}
        ></animated.div>
      )} */}
      {/* <Canvas style={{ background: 'black' }}> */}
      <Hero pos={rotationRef.current} />
      <div className="fixed text-red-500">hry</div>
      {/* <TestScroll /> */}
      <Canvas onMouseMove={handleMove} onWheel={(e) => handleScroll(e)}>
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
            <Scroll html className="relative h-full w-full">
              <div className="fixed">This is in scroll.</div>
              <Nav />
              {/* <ScrollPrompt /> */}
              <ScrollBlock top="200vh">
                <Tools />
              </ScrollBlock>
              {/* <span className="absolute top-[295vh]" ref={blockRef}></span>
              <ScrollBlock top="300vh">
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
