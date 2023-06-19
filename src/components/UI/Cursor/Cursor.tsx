import React, { FC, useCallback, useEffect, useRef } from 'react';

import useResizeWindow from '@/hooks/useResizeWindow';
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
  const [outlineStyles, outlineAnimation] = useSpring(() => ({
    from: {
      transform: `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0)`,
      opacity: 0,
    },
    config: {
      tension: 120,
      friction: 12,
      mass: 1,
    },
  }));

  const { windowSize: size, breakPoints } = useResizeWindow();

  const handleMouseMove = useCallback(
    (event: globalThis.MouseEvent) => {
      cursorRef.current = { x: event.clientX, y: event.clientY };

      cursorAnimation.start({
        transform: `translate3d(${cursorRef.current.x - 8}px, ${
          cursorRef.current.y - 8
        }px, 0)`,
        opacity: 1,
      });
      outlineAnimation.start({
        transform: `translate3d(${cursorRef.current.x - 24}px, ${
          cursorRef.current.y - 24
        }px, 0)`,
        opacity: 1,
      });
    },
    [cursorAnimation, outlineAnimation]
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
      {size.innerWidth > breakPoints.lg ? (
        <>
          <animated.div
            aria-hidden
            style={cursorStyles}
            className="pointer-events-none fixed z-[1000] h-4 w-4 rounded-full bg-[#271c29] mix-blend-difference invert"
          />
          <animated.div
            aria-hidden
            style={outlineStyles}
            className="pointer-events-none fixed z-[1000] h-12 w-12 rounded-full border border-[#271c29] mix-blend-difference invert"
          >
            <span aria-hidden id="cursor" />
          </animated.div>
        </>
      ) : null}
    </>
  );
};

export default Cursor;
