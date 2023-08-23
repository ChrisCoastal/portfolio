'use client';
import React, { FC, useCallback, useEffect, useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';

type CursorProps = {};

const Cursor: FC<CursorProps> = () => {
  const cursorRef = useRef({ x: 0, y: 0 });
  const [cursorStyles, cursorAnimation] = useSpring(() => ({
    from: {
      transform: `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0)`,
      opacity: 0,
    },
    config: {
      tension: 320,
      friction: 18,
      mass: 0.2,
    },
  }));

  const handleMouseMove = useCallback(
    (event: globalThis.MouseEvent) => {
      cursorRef.current = { x: event.clientX, y: event.clientY };

      cursorAnimation.start({
        transform: `translate3d(${cursorRef.current.x - 8}px, ${
          cursorRef.current.y - 8
        }px, 0)`,
        opacity: 1,
      });
    },
    [cursorAnimation]
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('wheel', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('wheel', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <>
      <animated.div
        aria-hidden
        style={cursorStyles}
        className="pointer-events-none invisible fixed z-[1000] h-16 w-16 mix-blend-difference canHover:visible"
      >
        <span aria-hidden id="cursor" />
      </animated.div>
    </>
  );
};

export default Cursor;
