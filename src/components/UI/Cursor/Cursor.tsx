import React, { FC, useCallback, useEffect, useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';
type CursorProps = {};

const Cursor: FC<CursorProps> = () => {
  const cursorRef = useRef({ x: 0, y: 0 });
  const [cursorStyles, cursorAnimation] = useSpring(() => ({
    from: {
      transform: `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0) rotate(45deg)`,
      opacity: 0,
    },
    config: {
      tension: 320,
      friction: 18,
      mass: 0.2,
    },
  }));
  const [outlineStyles, outlineAnimation] = useSpring(() => ({
    from: {
      transform: `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0) rotate(45deg)`,
      opacity: 0,
    },
    config: {
      tension: 120,
      friction: 12,
      mass: 1,
    },
  }));

  const handleMouseMove = useCallback(
    (event: globalThis.MouseEvent) => {
      cursorRef.current = { x: event.pageX, y: event.pageY };

      cursorAnimation.start({
        transform: `translate3d(${cursorRef.current.x - 12}px, ${
          cursorRef.current.y - 12
        }px, 0) rotate(45deg)`,
        opacity: 1,
      });
      outlineAnimation.start({
        transform: `translate3d(${cursorRef.current.x - 24}px, ${
          cursorRef.current.y - 24
        }px, 0) rotate(45deg)`,
        opacity: 1,
      });
    },
    [cursorAnimation, outlineAnimation]
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <>
      <animated.div
        style={cursorStyles}
        className="pointer-events-none absolute z-[1000] h-6 w-6 rounded-full bg-green-400/70"
      />
      <animated.div
        style={outlineStyles}
        className="pointer-events-none absolute z-[1000] h-12 w-12 rounded-full border border-green-400/70"
      >
        <span id="cursor" />
      </animated.div>
    </>
  );
};

export default Cursor;
