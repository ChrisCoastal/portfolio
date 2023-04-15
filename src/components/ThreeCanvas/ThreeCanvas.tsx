'use client';

import { animated, config, useSpring } from '@react-spring/three';
import {
  Backdrop,
  Environment,
  Float,
  MarchingCube,
  MarchingCubes,
  MeshTransmissionMaterial,
  OrbitControls,
  Scroll,
  ScrollControls,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import type { FC, ReactNode } from 'react';
import React, { Suspense, useEffect, useRef, useState } from 'react';

import CursorSpotLight from '@/components/CursorSpotLight/CursorSpotLight';
import Model from '@/components/Model/Model';
import Nav from '@/components/Nav/Nav';
import ScrollPrompt from '@/components/ScrollPrompt/ScrollPrompt';
import StackSection from '@/components/StackSection/StackSection';
import TextModel from '@/components/TextModel/TextModel';
import Card from '@/components/UI/ScrollBlock/ScrollBlock';

type ThreeCanvasProps = {
  children?: ReactNode;
};

const ThreeCanvas: FC<ThreeCanvasProps> = ({ children }) => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        style={{ background: 'black' }}
        // camera={{
        //   fov: 75,
        //   near: 0.001,
        //   far: 2000,
        //   // position: [0, 0, 5],
        // }}
      >
        <ambientLight intensity={0.2} />
        <spotLight intensity={0.5} position={[10, 10, 10]} castShadow />
        <Suspense fallback={null}>
          <ScrollControls pages={4}>
            <TextModel />
            {/*@ts-expect-error className is passed to Scroll*/}
            <Scroll html className="h-full w-full">
              {/* <Foo /> */}
              <Nav />
              <StackSection />
              <ScrollPrompt />
              <Card />
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
