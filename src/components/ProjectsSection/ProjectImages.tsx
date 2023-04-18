import React, { CSSProperties, FC, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { v4 as uuid } from 'uuid';

import { projects } from '@/assets';
import ScrollImage from '@/components/UI/ScrollImage/ScrollImage';
import useIntersectionObserver from '@/useIntersectionObserver';
import { easings, useTrail } from '@react-spring/three';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

type ProjectImagesProps = {
  className?: string;
};

const ProjectImages: FC<ProjectImagesProps> = ({ className }) => {
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
  // const observer = true;
  const observer = useIntersectionObserver(sectionRef, {
    root: null,
    rootMargin: '200px',
    threshold: 0.5,
  });
  const [trails, entryAnimation] = useTrail(images.length, () => ({
    opacity: 0,
    transform: 'translate3d(0, 200px, 0)',
    config: { duration: 800, easing: easings.easeOutCubic },
  }));

  function animateImages() {
    // setScrollEntry(scroll.offset);
    entryAnimation.start({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    });
  }
  // console.log(scroll.offset);
  useFrame(() => {
    if (observer?.isIntersecting && scrollEntry.current === undefined) {
      scrollEntry.current = scroll.offset;
    }
    observer?.isIntersecting && animateImages();
  });

  // observer && animateImages();

  return (
    <div className={`relative h-[600px] w-full`} ref={sectionRef}>
      {trails.map((props, i) => (
        <ScrollImage
          image={images[i][1]}
          //@ts-expect-error
          style={{ ...pos[i], ...props }}
          alt={images[i][0]}
          className="w-80 rounded-md"
          key={uuid()}
        />
      ))}
    </div>
  );
};

export default ProjectImages;
