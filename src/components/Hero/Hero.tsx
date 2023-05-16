import React, { FC, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import Carousel from '@/components/UI/Carousel/Carousel';
import { projectContent } from '@/constants/content';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { animated, useSpring } from '@react-spring/web';

type HeroProps = {};

const Hero: FC<HeroProps> = () => {
  return <div className="pointer-events-none h-[100vh]"></div>;
};

export default Hero;
