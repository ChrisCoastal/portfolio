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
  slideIndex?: number;
  config?: {
    tension: number;
    friction: number;
    duration: number;
  };
  clickable?: boolean;
  className?: string;
};

const Carousel: FC<CarouselProps> = ({
  slides,
  slideIndex,
  clickable = true,
  config,
  className,
}) => {
  const [index, setIndex] = useState(0);
  const transRef = useSpringRef();
  const transitions = useTransition(slideIndex || index, {
    ref: transRef,
    from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0.5, transform: 'translate3d(-200%,0,0)' },
    config: { tension: 180, friction: 4, duration: 700 },
  });

  function clickHandler() {
    setIndex((prev) => (prev + 1) % slides.length);
  }

  useEffect(() => {
    transRef.start();
  }, [slideIndex, index, transRef]);

  return (
    <div className={`${className}`} onClick={clickHandler}>
      {transitions((style, item) => {
        return <animated.div style={style}>{slides[item]}</animated.div>;
      })}
    </div>
  );
};

export default Carousel;
