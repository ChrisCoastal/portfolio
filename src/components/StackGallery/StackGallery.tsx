import React, { FC } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import Gallery from '@/components/UI/Gallery/Gallery';
import { logos } from '@/utils/content';
import { useTrail } from '@react-spring/three';
import { useSprings } from '@react-spring/web';

type StackGalleryProps = {};

const StackGallery: FC<StackGalleryProps> = ({}) => {
  const images = Object.entries(logos).map((logo, i) => (
    <div
      key={uuid()}
      className="relative h-20 w-20 overflow-hidden blur-md transition-all duration-[1200ms] hover:blur-none"
    >
      <span className="absolute h-20 w-20 rounded-md blur transition-all duration-[1200ms] hover:blur-none">
        <Image
          src={logo[1]}
          alt={logo[0]}
          className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
        />
      </span>
      {/* <Image
        src={logo[1]}
        alt={logo[0]}
        className={`absolute opacity-0 transition-all duration-700 ease-in-out hover:opacity-70`}
      /> */}
    </div>
  ));

  // TODO: trigger with intersection observer
  // const [trail, api] = useTrail(images.length, () => ({
  //   rotateX: 0,
  // }));

  // const springs = useSprings();

  const images2 = images;

  return (
    <div className="relative h-[450px] w-full">
      <div
        style={{ perspective: '800px' }}
        className="absolute flex origin-left"
      >
        {/* <Gallery>
        {images}
        {images2}
      </Gallery> */}
        <div
          style={{
            transform: 'rotateY(-62deg) scaleY(0.44) translateX(360px)',
          }}
          className={`grid max-w-fit grid-cols-[repeat(2,_1fr)] place-content-center justify-center gap-2`}
        >
          {images}
        </div>
        <div
          style={{ transform: 'rotateY(-50deg) scaleY(0.88) translateX(52px)' }}
          className={`grid max-w-fit grid-cols-[repeat(2,_1fr)] place-content-center justify-center gap-2`}
        >
          {images}
        </div>
        <div
          className={`grid max-w-fit grid-cols-[repeat(2,_1fr)] place-content-center justify-center gap-2`}
        >
          {images}
        </div>
        <div
          style={{ transform: 'rotateY(50deg) scaleY(0.88) translateX(-52px)' }}
          className={`grid max-w-fit grid-cols-[repeat(2,_1fr)] place-content-center justify-center gap-2`}
        >
          {images}
        </div>
        <div
          style={{
            transform: 'rotateY(62deg) scaleY(0.44) translateX(-360px)',
          }}
          className={`grid max-w-fit grid-cols-[repeat(2,_1fr)] place-content-center justify-center gap-2`}
        >
          {images}
        </div>
      </div>
    </div>
  );
};

export default StackGallery;
