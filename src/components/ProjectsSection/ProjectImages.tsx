import React, { CSSProperties, FC, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { v4 as uuid } from 'uuid';

import { projects } from '@/assets';
import ScrollImage from '@/components/UI/ScrollImage/ScrollImage';
import useIntersectionObserver from '@/useIntersectionObserver';
import { useTrail } from '@react-spring/three';

type ProjectImagesProps = {
  className?: string;
};

const ProjectImages: FC<ProjectImagesProps> = ({ className }) => {
  const pos = [
    { top: '200px', left: '-140px', right: '0px' },
    { top: '100px', left: '0px', right: '50px' },
    { top: '600px', left: '50px', right: '0px' },
    { top: '400px', left: '280px', right: '0px' },
  ];
  const images = Object.entries(projects);

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isIntersect = useIntersectionObserver(sectionRef);
  // isIntersect && animateImages();

  const [trails, api] = useTrail(
    images.length,
    () => ({
      from: { opacity: 0, transform: 'translate3d(0, 60px, 0)' },
      to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    }),
    [isIntersect]
  );

  return (
    <div className="relative" ref={sectionRef}>
      {trails.map((props, i) => (
        <ScrollImage
          image={images[i][1]}
          //@ts-expect-error
          style={{ ...pos[i], ...props }}
          alt={images[i][0]}
          className="w-56 duration-700 ease-in-out"
          key={uuid()}
        />
      ))}

      {/* {images} */}
      {/* <ScrollImage image={projects} top="200px" className="w-96" /> */}
    </div>
  );
};

export default ProjectImages;
