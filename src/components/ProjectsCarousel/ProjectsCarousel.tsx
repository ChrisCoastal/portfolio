import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { projects } from '@/assets';
import Carousel from '@/components/UI/Carousel/Carousel';
import { animated } from '@react-spring/web';

type Props = {};

const ProjectsCarousel = (props: Props) => {
  function renderSlide(image: StaticImageData) {
    return <Image src={image} alt="project" />;
  }
  const slides = Object.values(projects).map((image) => renderSlide(image));

  return <Carousel slides={slides} />;
};

export default ProjectsCarousel;
