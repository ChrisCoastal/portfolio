import React, { FC, MouseEvent, useEffect, useRef } from 'react';

import ClickIcon from '@/components/UI/Cursor/CursorText';
import { animated, useSpring } from '@react-spring/web';
type PageTransitionProps = {
  cursorPos: { x: number; y: number };
};

const PageTransition: FC<PageTransitionProps> = ({ cursorPos }) => {
  const originRef = useRef({ x: cursorPos.x, y: cursorPos.y });
  const clickableTargetRef = useRef(false);
  const [cursorStyles, cursorAnimation] = useSpring(() => ({
    from: {
      transform: `translate3d(${originRef.current.x}px, ${originRef.current.y}px, 0) scale(0)`,
    },
    config: {
      tension: 320,
      friction: 60,
      mass: 1,
    },
  }));

  // function handleMouseMove(event: globalThis.MouseEvent) {
  //   // console.log(
  //   //   event.target?.classList && event.target.classList.contains('clickable')
  //   // );
  //   // @ts-expect-error
  //   // prettier-ignore
  //   const clickable = Boolean(event.target?.classList && event.target.classList.contains('clickable'));
  //   if (clickableTargetRef.current !== clickable)
  //     clickableTargetRef.current = clickable;
  //   originRef.current = { x: event.clientX, y: event.clientY };

  //   cursorAnimation.start({
  //     transform: `translate3d(${originRef.current.x - 12}px, ${
  //       originRef.current.y - 12
  //     }px, 0) rotate(45deg)`,
  //   });
  // }

  useEffect(() => {
    cursorAnimation.start({
      transform: `translate3d(${originRef.current.x}px, ${originRef.current.y}px, 0) scale(1)`,
    });
  }, []);

  return (
    <>
      <animated.div
        style={cursorStyles}
        className="pointer-events-none absolute -left-full -top-full z-[1000] aspect-square min-h-[200vh] min-w-[200vw] rounded-full bg-rose-400/70"
      ></animated.div>
    </>
  );
};

export default PageTransition;
