import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import Carousel from '@/components/UI/Carousel/Carousel';
import { projectContent } from '@/utils/content';
import { animated } from '@react-spring/web';

type Props = {};

const ProjectsCarousel = (props: Props) => {
  function renderSlide(image: StaticImageData) {
    return <Image src={image} alt="project" />;
  }
  const slides = Object.values(projectContent).map((project) =>
    renderSlide(project.image)
  );

  return <Carousel slides={slides} />;
};

export default ProjectsCarousel;
