import React, { CSSProperties, FC, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { v4 as uuid } from 'uuid';

import { projects } from '@/assets';
import ScrollImage from '@/components/UI/ScrollImage/ScrollImage';
import useIntersectionObserver from '@/useIntersectionObserver';
import { animated, easings, useSprings, useTrail } from '@react-spring/three';
import { useScroll } from '@react-three/drei';

type ProjectImagesProps = {
  className?: string;
};

const ProjectImages: FC<ProjectImagesProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [isHover, setIsHover] = useState<number | null>(null);
  const hoverRef = useRef<number | null>(null);
  const imageOpacityRef = useRef<number>(0);
  const scrollEntry = useRef<number>();
  const scroll = useScroll();

  const pos = [
    { top: `${200}px`, right: '20px' },
    { top: `${100}px`, left: '0px', right: '50px' },
    { top: `${500}px`, left: '50px', right: '0px' },
    { top: `${400}px`, left: '280px', right: '0px' },
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

  function setHover(index: number | null) {
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

  // const siblingHover = (i: number) => {
  //   if (hoverRef.current !== null && hoverRef.current !== i)
  //     return { opacity: 0.5 };
  //   return { opacity: 1 };
  // };

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
        imageOpacityRef.current = 1;
        break;
      case 'out':
        entryAnimation.start({
          // opacity: 0,
          transform: 'translate3d(0, 250px, 0) rotateX(60deg)',
        });
        imageOpacityRef.current = 0;
        break;
      default:
        null;
    }
  }

  observer?.isIntersecting ? animateImageEntry('in') : animateImageEntry('out');

  return (
    <div
      style={{ perspective: '800px' }}
      className={`relative h-[1600px] w-full`}
      ref={sectionRef}
    >
      {entryStyles.map((entryStyles, i) => {
        console.log(hoverStyles);
        return (
          <ScrollImage
            image={images[i][1]}
            index={i}
            setHover={setHover}
            //@ts-expect-error
            style={{
              ...pos[i],
              ...hoverStyles[i],
              ...entryStyles,
              // ...siblingHover(i),
            }}
            alt={images[i][0]}
            className="w-80 rounded-md"
            key={uuid()}
          />
        );
      })}
    </div>
  );
};

export default ProjectImages;
