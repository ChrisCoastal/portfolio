import React, { useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

type Props = {};

const TransitionBlock = (props: Props) => {
  const positionRef = useRef(0);
  const scroll = useScroll();
  const [style, animation] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 1 },
  }));
  // const interval = setInterval(() => {
  //   console.log(scroll);
  // }, 1000);

  // function handleScroll(wheelEvent: WheelEvent<HTMLDivElement>) {
  //   console.log('scroll', stickyRef.current?.getBoundingClientRect().top);
  //   // const max = 2000;
  //   // const min = max * -1;
  //   const xFrom = positionRef.current;
  //   let xTo = positionRef.current + wheelEvent.deltaY * 0.01;

  //   // if (xTo > max) xTo = max;
  //   // if (xTo < min) xTo = min;
  //   positionRef.current = xTo;

  //   animation.start({
  //     from: { x: xFrom },
  //     to: { x: xTo },
  //     config: {
  //       friction: 120,
  //       tension: 100,
  //     },
  //   });
  //   positionRef.current += wheelEvent.deltaY;

  //   // works
  //   // do stuff on wheel
  // }

  const center = scroll.curve(1 / 6, 1 / 6);
  useFrame(() => {
    const xFrom = positionRef.current;
    let xTo = positionRef.current + center;

    positionRef.current = xTo;
    animation.start({
      from: { x: xFrom },
      to: { x: xTo },
      config: {
        friction: 120,
        tension: 100,
      },
    });
  });

  return (
    <animated.div
      style={{
        transform: style.x.to((value) => `translateX(${value}vw)`),

        // transform: style.x.to((value) => `rotateZ(${value}deg)`),
      }}
      className={`pointer-events-none absolute left-1/2 overflow-hidden bg-black`}
    >
      <p className="text-lg font-extrabold ">hello</p>
    </animated.div>
  );
};

export default TransitionBlock;
