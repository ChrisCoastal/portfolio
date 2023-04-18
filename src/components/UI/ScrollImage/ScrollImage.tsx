import React, { CSSProperties, FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { animated } from '@react-spring/web';
type ImagePath = string;
type ImageAlt = string;

type ScrollImageProps = {
  image: StaticImageData;
  alt: string;
  style: { [key: string]: string };
  className?: string;
};

const ScrollImage: FC<ScrollImageProps> = ({
  image,
  alt,
  style,
  className,
}) => {
  return (
    <animated.span
      style={{ ...style }}
      className={`${className} absolute overflow-hidden`}
    >
      <Image src={image} alt={alt} />
    </animated.span>
  );
};

export default ScrollImage;
