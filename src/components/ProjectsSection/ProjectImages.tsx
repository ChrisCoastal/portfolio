import React, { CSSProperties, FC, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { v4 as uuid } from 'uuid';

import { projects } from '@/assets';
import ScrollImage from '@/components/UI/ScrollImage/ScrollImage';
import useIntersectionObserver from '@/useIntersectionObserver';
import { easings, useSprings, useTrail } from '@react-spring/three';
import { useScroll } from '@react-three/drei';

type ProjectImagesProps = {
  className?: string;
};

const ProjectImages: FC<ProjectImagesProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [isHover, setIsHover] = useState<number | null>(null);
  const hoverRef = useRef<number | null>(null);
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
    rootMargin: '0px',
    threshold: 0.3,
  });

  const [hoverStyles, hoverAnimation] = useSprings(images.length, () => ({
    from: { transform: 'scale(1)', opacity: 1 },
    to: { transform: 'scale(1.1)' },
    config: { duration: 600, easing: easings.easeOutCubic },
  }));

  function setHover(index: number | null) {
    if (index !== null) {
      hoverAnimation.start((i) => {
        if (i === index) {
          return { transform: 'scale(1.1)' };
        }
        return { transform: 'scale(1)', opacity: 0.3 };
      });
    } else {
      hoverAnimation.start({ transform: 'scale(1)', opacity: 1 });
    }
  }

  // const siblingHover = (i: number) => {
  //   if (hoverRef.current !== null && hoverRef.current !== i)
  //     return { opacity: 0.5 };
  //   return { opacity: 1 };
  // };

  const [entryStyles, entryAnimation] = useTrail(images.length, () => ({
    opacity: 0,
    transform: 'translate3d(0, 200px, 0)',
    config: { duration: 600, easing: easings.easeOutCubic },
  }));

  function animateImageEntry(direction: 'in' | 'out') {
    console.log('animate entry');
    switch (direction) {
      case 'in':
        entryAnimation.start({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
        });
        break;
      case 'out':
        entryAnimation.start({
          opacity: 0,
          transform: 'translate3d(0, 200px, 0)',
        });
        break;
      default:
        null;
    }
  }

  observer?.isIntersecting ? animateImageEntry('in') : animateImageEntry('out');

  return (
    <div className={`relative h-[1600px] w-full`} ref={sectionRef}>
      {entryStyles.map((entryStyles, i) => (
        <ScrollImage
          image={images[i][1]}
          index={i}
          setHover={setHover}
          //@ts-expect-error
          style={{
            ...pos[i],
            ...entryStyles,
            ...hoverStyles[i],
            // ...siblingHover(i),
          }}
          alt={images[i][0]}
          className="w-80 rounded-md"
          key={uuid()}
        />
      ))}
    </div>
  );
};

export default ProjectImages;
