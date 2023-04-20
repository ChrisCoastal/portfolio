import React, { CSSProperties, FC, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { v4 as uuid } from 'uuid';

import { projects } from '@/assets';
import ProjectImage from '@/components/ProjectsSection/ProjectImage';
import ScrollImage from '@/components/ProjectsSection/ProjectImage';
import useIntersectionObserver from '@/useIntersectionObserver';
import type { SpringValue } from '@react-spring/three';
import { animated, easings, useSprings, useTrail } from '@react-spring/three';
import { useScroll } from '@react-three/drei';

type ProjectImagesProps = {
  className?: string;
};

const ProjectImages: FC<ProjectImagesProps> = ({ className }) => {
  const scroll = useScroll();

  const pos = [
    { top: `${200}px`, right: 50 },
    { top: `${100}px`, left: 0 },
    { top: `${500}px`, left: 50 },
    { top: `${400}px`, left: 280 },
    { top: `${600}px`, right: 120 },
  ];
  const images = Object.entries(projects);

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const observer = useIntersectionObserver(sectionRef, {
    root: null,
    rootMargin: '100px',
    threshold: 0.2,
  });

  const [hoverStyles, hoverAnimation] = useSprings(images.length, () => ({
    from: {
      opacity: 1,
      zIndex: 1,
    },
    to: { zIndex: 10 },
    config: { duration: 1000, easing: easings.easeOutCubic },
  }));

  function animateHover(index: number | null) {
    if (index !== null) {
      hoverAnimation.start((i) => {
        if (i === index) {
          return { zIndex: 10 };
        }
        return { opacity: 0.1, zIndex: 1 };
      });
    } else {
      hoverAnimation.start({ opacity: 1 });
    }
  }

  const [entryStyles, entryAnimation] = useTrail(images.length, () => ({
    // opacity: 0,
    transform: 'translate3d(0, 250px, 0) rotateX(60deg)',
    config: { duration: 600, easing: easings.easeOutCubic },
  }));

  function animateImageEntry(direction: 'in' | 'out') {
    console.log('animate entry');
    switch (direction) {
      case 'in':
        entryAnimation.start({
          // opacity: 1,
          transform: 'translate3d(0, 0, 0) rotateX(0deg)',
        });
        break;
      case 'out':
        entryAnimation.start({
          // opacity: 0,
          transform: 'translate3d(0, 250px, 0) rotateX(60deg)',
        });
        break;
      default:
        null;
    }
  }

  observer?.isIntersecting ? animateImageEntry('in') : animateImageEntry('out');

  return (
    <div className={`relative h-[1200px] w-full`} ref={sectionRef}>
      {entryStyles.map((entryStyles, i) => {
        return (
          <ProjectImage
            image={images[i][1]}
            index={i}
            width={320}
            height={320}
            animateHover={animateHover}
            style={{
              ...pos[i],
              ...hoverStyles[i],
              ...entryStyles,
            }}
            alt={images[i][0]}
            className="rounded-md"
            key={uuid()}
          />
        );
      })}
    </div>
  );
};

export default ProjectImages;
