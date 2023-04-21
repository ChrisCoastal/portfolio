'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';

import CursorSpotLight from '@/components/CursorSpotLight/CursorSpotLight';
import Model from '@/components/Model/Model';
import Nav from '@/components/Nav/Nav';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ScrollPrompt from '@/components/ScrollPrompt/ScrollPrompt';
import StackSection from '@/components/StackSection/StackSection';
import ScrollBlock from '@/components/UI/ScrollBlock/ScrollBlock';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainSections } from '@/utils/content';
import { animated, config, useSpring } from '@react-spring/three';
import {
  Backdrop,
  Environment,
  Scroll,
  ScrollControls,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

type ThreeCanvasProps = {
  children?: ReactNode;
};

const ThreeCanvas: FC<ThreeCanvasProps> = ({ children }) => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas style={{ background: 'black' }}>
        <ambientLight intensity={0.2} />
        <spotLight intensity={0.5} position={[10, 10, 10]} castShadow />
        <Suspense fallback={null}>
          <ScrollControls pages={8}>
            <Model />
            {/*@ts-expect-error className is passed to Scroll*/}
            <Scroll html className="h-full w-full">
              <Nav />
              <ScrollPrompt />
              <ScrollBlock top="300vh">
                <StackSection />
                <ProjectsSection />
              </ScrollBlock>
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
