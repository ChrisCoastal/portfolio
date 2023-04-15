'use client';

import { addEffect, useFrame } from '@react-three/fiber';
import Lenis from '@studio-freight/lenis';
import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import * as THREE from 'three';

const state = {
  top: 0,
  progress: 0,
};

const { damp } = THREE.MathUtils;

type ScrollProps = {
  children: ReactNode;
};

const Scroll: FC<ScrollProps> = ({ children }) => {
  const content = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapper.current || !content.current) return;
    const lenis = new Lenis({
      wrapper: wrapper.current,
      content: content.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ({ scroll, progress }) => {
      state.top = scroll;
      state.progress = progress;
    });
    const effectSub = addEffect((time) => lenis.raf(time));
    return () => {
      effectSub();
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={wrapper}
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        top: 0,
      }}
    >
      <div
        ref={content}
        style={{
          position: 'relative',
          minHeight: '200vh',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Scroll;

export const ScrollTicker = ({ smooth = 9999999 }) => {
  useFrame(({ viewport, camera }, delta) => {
    camera.position.y = damp(
      camera.position.y,
      -state.progress * viewport.height,
      smooth,
      delta
    );
  });

  return null;
};
