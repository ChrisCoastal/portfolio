'use client';

import React, { FC, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import Carousel from '@/components/UI/Carousel/Carousel';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { projectContent } from '@/utils/content';
import { animated, useSpring } from '@react-spring/web';

type HeroProps = {};

const Hero: FC<HeroProps> = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const firstElRef = useRef<HTMLDivElement>(null);
  const secondElRef = useRef<HTMLDivElement>(null);
  const thirdElRef = useRef<HTMLDivElement>(null);
  function renderSlide(image: StaticImageData) {
    return (
      <Image
        src={image}
        alt="project"
        height={400}
        width={400}
        className="absolute"
      />
    );
  }
  const slides = Object.values(projectContent).map((project) =>
    renderSlide(project.image)
  );

  const observer1 = useIntersectionObserver(firstElRef, null, () =>
    setSlideIndex(1)
  );
  const observer2 = useIntersectionObserver(secondElRef, null, () =>
    setSlideIndex(2)
  );
  const observer3 = useIntersectionObserver(thirdElRef, null, () =>
    setSlideIndex(3)
  );

  return (
    <div className="pointer-events-none relative z-20 h-[400vh]">
      <div
        className="absolute left-1/2 top-[100vh] -translate-x-1/2"
        ref={firstElRef}
      ></div>
      <div
        className="absolute left-1/2 top-[200vh] -translate-x-1/2"
        ref={secondElRef}
      ></div>
      <div
        className="absolute left-1/2 top-[300vh] -translate-x-1/2"
        ref={thirdElRef}
      ></div>
      <div className="sticky top-0 h-screen w-full bg-teal-300/10">
        <div className="">
          <Carousel slides={slides} slideIndex={slideIndex} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
