'use-client';

import React, { useEffect, useRef, useState } from 'react';

import { animated, useSpring } from '@react-spring/web';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

type Props = {};

const ScrollPrompt = (props: Props) => {
  const scrollPromptRef = useRef(null);
  const scrollTopRef = useRef(true);

  // note: useScroll does not work when destructured
  const data = useScroll();

  const [springs, api] = useSpring(() => ({
    from: { opacity: 1 },
  }));

  useFrame(() => {
    if (data.offset > 0.02 && scrollTopRef.current) {
      scrollTopRef.current = false;
      api.start({
        from: { opacity: 1 },
        to: { opacity: 0 },
      });
    }

    if (data.offset === 0 && !scrollTopRef.current) {
      scrollTopRef.current = true;
      const timer = setTimeout(() => {
        api.start({
          from: { opacity: 0 },
          to: { opacity: 1 },
        });
      }, 3000);
    }
  });

  return (
    <animated.div
      style={{ opacity: springs.opacity }}
      className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-xl font-medium text-pink-500"
    >
      <p>scroll down</p>
      <p>V</p>
    </animated.div>
  );
};

export default ScrollPrompt;
