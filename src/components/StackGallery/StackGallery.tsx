import React, { FC } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import { logos } from '@/assets';
import Gallery from '@/components/UI/Gallery/Gallery';
import { useTrail } from '@react-spring/three';

type StackGalleryProps = {};

const StackGallery: FC<StackGalleryProps> = ({}) => {
  const images = Object.entries(logos).map((logo, i) => (
    <span
      key={uuid()}
      className="h-20 w-20 overflow-hidden rounded-md bg-stone-800"
    >
      <Image
        src={logo[1]}
        alt={logo[0]}
        className={`grayscale-[40%] transition-all duration-700 ease-in-out hover:scale-110 hover:grayscale-0`}
      />
    </span>
  ));

  // TODO: trigger with intersection observer
  // const [trail, api] = useTrail(images.length, () => ({
  //   rotateX: 0,
  // }));

  const images2 = images;

  return (
    <Gallery>
      {images}
      {images2}
    </Gallery>
  );
};

export default StackGallery;
