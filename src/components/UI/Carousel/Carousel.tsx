import React, { CSSProperties, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import type { FC, ReactElement, ReactNode } from 'react';

import {
  animated,
  AnimatedProps,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/web';

type CarouselProps = {
  slides: ReactElement[];
  className?: string;
  // children: ReactNode;
};

const Carousel: FC<CarouselProps> = ({ slides, className }) => {
  const [index, setIndex] = useState(0);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  function clickHandler() {
    setIndex((prev) => (prev + 1) % slides.length);
  }

  // const animatedSlides: ((
  //   props: AnimatedProps<{ style: CSSProperties }>
  // ) => React.ReactElement)[] = [
  //   ({ style }) => ,
  // ];

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  return (
    <div className={`${className}`} onClick={clickHandler}>
      {transitions((style, item) => {
        // FIXME: type any
        // const Slide: any = slides[i];
        return <animated.div style={style}>{slides[item]}</animated.div>;
      })}
    </div>
  );
};

export default Carousel;
