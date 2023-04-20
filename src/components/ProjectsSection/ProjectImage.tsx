import React, { CSSProperties, FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { logos } from '@/assets';
import { animated, SpringValue } from '@react-spring/web';

import GitHubIcon from '../UI/icons/GitHubIcon/GitHubIcon';
import LinkIcon from '../UI/icons/LinkIcon/LinkIcon';

export type ScrollImageProps = {
  image: StaticImageData;
  index: number;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: { [key: string]: any };
  animateHover?: (index: number | null) => void;
};

const ScrollImage: FC<ScrollImageProps> = ({
  image,
  index,
  alt,
  className,
  height,
  width,
  style,
  animateHover,
}) => {
  const [isHover, setIsHover] = React.useState(false);

  function handleMouseEnter() {
    animateHover ? animateHover(index) : null;
    setIsHover(true);
  }

  function handleMouseLeave() {
    animateHover ? animateHover(null) : null;
    setIsHover(false);
  }

  return (
    // <div
    //   style={{
    //     top: style?.top,
    //     bottom: style?.bottom,
    //     left: style?.left,
    //     right: style?.right,
    //     zIndex: style?.zIndex,
    //     perspective: '1000px',
    //   }}
    //   // className={`group absolute flex`}
    //   className={`group absolute flex`}
    // >
    <div style={{ perspective: '800px' }} className="group">
      <animated.span
        style={{ ...style }}
        className={`${className} absolute overflow-hidden shadow-md `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={image} alt={alt} width={width} height={height} />
      </animated.span>
      {isHover && (
        <div
          style={{
            top: style?.top,
            bottom: style?.bottom,
            left: style?.left !== undefined ? style?.left + width : null,
            right: style?.right !== undefined ? style?.right + width : null,
            zIndex: 30,
          }}
          className={`absolute flex flex-shrink flex-col gap-2 pl-2 pr-2 opacity-0 transition-all duration-[1000] group-hover:opacity-100`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <span className="rounded-full bg-white/10 backdrop-blur-sm">
          <Image
            src={logos.gitHubLogo}
            alt="check out this project on GitHub"
            width={36}
            height={36}
            className=""
          />
        </span> */}
          <span className="rounded-full bg-white/30 p-1 backdrop-blur-sm">
            <a href="https://cribbage.netlify.app/">
              <LinkIcon width={'28px'} height={'28px'} />
            </a>
          </span>
          <span className="rounded-full bg-white/30 p-1 backdrop-blur-sm">
            <GitHubIcon width={'28px'} height={'28px'} />
          </span>
          <span className="pointer-events-none h-full w-full"></span>
        </div>
      )}
    </div>
    // </div>
  );
};

export default ScrollImage;
