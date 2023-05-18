import React, { FC, MouseEvent, useEffect, useRef } from 'react';

import ClickIcon from '@/components/UI/icons/ClickIcon/ClickIcon';
import { animated, useSpring } from '@react-spring/web';
type CursorProps = {
  // cursorPos: { x: number; y: number };
};

const Cursor: FC<CursorProps> = () => {
  const cursorRef = useRef({ x: 0, y: 0 });
  const clickableTargetRef = useRef(false);
  const [cursorStyles, cursorAnimation] = useSpring(() => ({
    from: {
      transform: `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0) rotate(45deg)`,
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
    },
    config: {
      tension: 120,
      friction: 12,
      mass: 1,
    },
  }));
  const [textStyles, textAnimation] = useSpring(() => ({
    from: {
      scale: 0,
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
    // console.log(
    //   event.target?.classList && event.target.classList.contains('clickable')
    // );
    // @ts-expect-error
    // prettier-ignore
    const clickable = Boolean(event.target?.classList && event.target.classList.contains('clickable'));
    if (clickableTargetRef.current !== clickable)
      clickableTargetRef.current = clickable;
    cursorRef.current = { x: event.clientX, y: event.clientY };
    cursorAnimation.start({
      transform: `translate3d(${cursorRef.current.x - 12}px, ${
        cursorRef.current.y - 12
      }px, 0) rotate(45deg)`,
    });
    outlineAnimation.start({
      transform: `translate3d(${cursorRef.current.x - 24}px, ${
        cursorRef.current.y - 24
      }px, 0) rotate(45deg)`,
    });
    textAnimation.start({
      scale: clickableTargetRef.current ? 1.2 : 0,
    });
  }

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
        <animated.div
          style={textStyles}
          className={`absolute -left-[50%] -top-[52%] flex h-24 w-24 items-center justify-center overflow-visible`}
        >
          <ClickIcon
            height="180px"
            width="180px"
            color="#4ADE80dd"
            className="origin-center animate-spin-slow mix-blend-overlay"
          />
        </animated.div>
      </animated.div>
    </>
  );
};

export default Cursor;
