import React, { FC, MouseEvent, useEffect, useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';
type CursorProps = {
  // cursorPos: { x: number; y: number };
};

const Cursor: FC<CursorProps> = () => {
  const cursorRef = useRef({ x: 0, y: 0 });
  const [cursorStyles, cursorAnimation] = useSpring(() => ({
    from: {
      transform: `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0)`,
    },
    config: {
      tension: 320,
      friction: 18,
      mass: 0.6,
    },
  }));
  const [outlineStyles, outlineAnimation] = useSpring(() => ({
    from: {
      transform: `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0)`,
    },
    config: {
      tension: 120,
      friction: 12,
      mass: 1,
    },
  }));

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return document.addEventListener('mousemove', handleMouseMove);
  }, []);

  function handleMouseMove(event: globalThis.MouseEvent) {
    // console.log(event.clientX);
    cursorRef.current = { x: event.clientX, y: event.clientY };
    cursorAnimation.start({
      transform: `translate3d(${cursorRef.current.x - 12}px, ${
        cursorRef.current.y - 12
      }px, 0)`,
    });
    outlineAnimation.start({
      transform: `translate3d(${cursorRef.current.x - 24}px, ${
        cursorRef.current.y - 24
      }px, 0)`,
    });
  }

  return (
    <>
      <animated.div
        style={cursorStyles}
        className="pointer-events-none absolute z-[1000] h-6 w-6 rounded-full bg-pink-500/80"
      />
      <animated.div
        style={outlineStyles}
        className="pointer-events-none absolute z-[1000] h-12 w-12 rounded-full border border-pink-500/40"
      />
    </>
  );
};

export default Cursor;
