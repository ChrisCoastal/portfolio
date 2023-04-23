import React, { CSSProperties, FC, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { v4 as uuid } from 'uuid';

// import { projects } from '@/assets';
import ProjectImage from '@/components/ProjectsSection/ProjectImage';
import ScrollImage from '@/components/ProjectsSection/ProjectImage';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { projectContent } from '@/utils/content';
import type { SpringValue } from '@react-spring/three';
import { animated, easings, useSprings, useTrail } from '@react-spring/three';
import { useScroll } from '@react-three/drei';

type ProjectImagesProps = {
  className?: string;
};

const ProjectImages: FC<ProjectImagesProps> = ({ className }) => {
  const scroll = useScroll();

  const pos = [
    { top: 200, right: 50 },
    { top: 100, left: 0 },
    { top: 500, left: 50 },
    { top: 400, left: 280 },
    { top: 600, right: 120 },
  ];
  const projects = Object.values(projectContent);

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const observer = useIntersectionObserver(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const [hoverStyles, hoverAnimation] = useSprings(projects.length, () => ({
    from: {
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 1,
    },
    to: { zIndex: 10 },
    config: { duration: 800, easing: easings.easeOutCubic },
  }));

  function animateHover(index: number | null) {
    if (index !== null) {
      hoverAnimation.start((i) => {
        if (i === index) {
          return { zIndex: 100, pointerEvents: 'auto' };
        }
        return { opacity: 0.1, zIndex: 1, pointerEvents: 'none' };
      });
    } else {
      hoverAnimation.start({ opacity: 1, zIndex: 1, pointerEvents: 'auto' });
    }
  }

  const [entryStyles, entryAnimation] = useTrail(projects.length, () => ({
    transform: 'translate3d(0, 300px, 0) rotateX(90deg)',
    config: { easing: easings.easeOutCubic },
  }));

  function animateImageEntry(direction: 'in' | 'out') {
    console.log('animate entry');
    switch (direction) {
      case 'in':
        entryAnimation.start({
          transform: 'translate3d(0, 0, 0) rotateX(0deg)',
        });
        break;
      case 'out':
        entryAnimation.start({
          transform: 'translate3d(0, 250px, 0) rotateX(90deg)',
        });
        hoverAnimation.start({ opacity: 1, zIndex: 1, pointerEvents: 'auto' });
        break;
      default:
        null;
    }
  }

  observer.viewPortPos === 'intersect' ? animateImageEntry('in') : null;
  observer.viewPortPos === 'above' ? animateImageEntry('out') : null;

  return (
    <div
      style={{ perspective: '800px' }}
      className={`group relative h-[1000px] w-full transition-all`}
      ref={sectionRef}
    >
      {entryStyles.map((entryStyles, i) => {
        return (
          <ProjectImage
            content={projects[i]}
            index={i}
            width={320}
            height={320}
            animateHover={animateHover}
            style={{
              ...pos[i],
              ...hoverStyles[i],
              ...entryStyles,
            }}
            className="rounded-md"
            key={uuid()}
          />
        );
      })}
    </div>
  );
};

export default ProjectImages;
