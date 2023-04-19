import React, { CSSProperties, FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { animated, SpringValue } from '@react-spring/web';
type ImagePath = string;
type ImageAlt = string;

type ScrollImageProps = {
  image: StaticImageData;
  index: number;
  alt: string;
  style: { [key: string]: string };
  setHover: (index: number | null) => void;
  dimensions?: { width: number; height: number };
  className?: string;
};

const ScrollImage: FC<ScrollImageProps> = ({
  image,
  index,
  alt,
  style,
  setHover,
  dimensions,
  className,
}) => {
  return (
    <animated.span
      style={{ ...style }}
      className={`${className} absolute overflow-hidden shadow-md`}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(null)}
    >
      <Image
        src={image}
        alt={alt}
        width={dimensions?.width}
        height={dimensions?.height}
      />
    </animated.span>
  );
};

export default ScrollImage;
