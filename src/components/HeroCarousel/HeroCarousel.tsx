import React, { FC, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { v4 as uuid } from 'uuid';

import { mainSections } from '@/app/_pageContent/content';
import Carousel from '@/components/UI/Carousel/Carousel';
import {
  animated,
  AnimatedProps,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/web';

type Props = {};

const HeroCarousel = (props: Props) => {
  const [index, setIndex] = useState(0);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    from: { opacity: 1, transform: 'translate3d(120%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0.7, transform: 'translate3d(-200%,0,0)' },
    config: { tension: 180, friction: 4, duration: 700 },
  });

  function clickHandler() {
    setIndex((prev) => (prev + 1) % slides.length);
  }

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  const slides = mainSections.heroSection.title.map((text) => (
    <h1 key={uuid()} className="text-4xl font-bold">
      {text}
    </h1>
  ));

  return (
    <div
      className="absolute left-1/2 top-1/3 z-30 grid grid-cols-1 grid-rows-1 text-black"
      onClick={clickHandler}
    >
      {transitions((style, item) => {
        // FIXME: type any
        // const Slide: any = slides[i];
        return (
          <animated.div style={style} className="col-start-1 row-start-1">
            {slides[item]}
          </animated.div>
        );
      })}
    </div>
  );
};

export default HeroCarousel;
