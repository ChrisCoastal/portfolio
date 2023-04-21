import React, { CSSProperties, FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { logos } from '@/assets';
import type { ProjectContent } from '@/utils/content';
import { animated, SpringValue } from '@react-spring/web';

import GitHubIcon from '../UI/icons/GitHubIcon/GitHubIcon';
import LinkIcon from '../UI/icons/LinkIcon/LinkIcon';

export type ScrollImageProps = {
  // image: StaticImageData;
  content: ProjectContent;
  index: number;
  // alt: string;
  width: number;
  height: number;
  className?: string;
  style?: { [key: string]: any };
  animateHover?: (index: number | null) => void;
};

const ScrollImage: FC<ScrollImageProps> = ({
  // image,
  content,
  index,
  // alt,
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
    <>
      <animated.span
        style={{ ...style, position: 'absolute' }}
        className={`${className} absolute overflow-hidden shadow-md`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={content.image}
          alt={content.alt}
          width={width}
          height={height}
        />
      </animated.span>
      {isHover && (
        <div
          style={{
            top: style?.top - 30,
            left: style?.left,
            right: style?.right,
            zIndex: 20,
          }}
          className={`absolute flex w-[320px] items-center gap-2 opacity-0 transition-all duration-[1000] group-hover:opacity-100`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 className="pr-4 text-lg font-bold text-white">{content.title}</h4>
          <span className="rounded-lg bg-white px-1 text-xs backdrop-blur-md">
            <p>{content.kind}</p>
          </span>
          <span className="rounded-lg bg-white px-1 text-xs backdrop-blur-md">
            <p>{content.year}</p>
          </span>
        </div>
      )}

      {isHover && (
        <div
          style={{
            top: style?.top,
            left: style?.left !== undefined ? style?.left + width : null,
            right: style?.right !== undefined ? style?.right + width : null,
            zIndex: 30,
          }}
          className={`absolute flex flex-shrink flex-col gap-2 pb-3 pl-2 pr-2 opacity-0 transition-all duration-[1000] group-hover:opacity-100`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="rounded-full bg-white/30 p-1 backdrop-blur-md ">
            <a href={content.link} target="_blank">
              <LinkIcon
                width={'28px'}
                height={'28px'}
                className="transition-all duration-500 hover:fill-white"
              />
            </a>
          </span>
          <span className="rounded-full bg-white/30 p-1 backdrop-blur-md">
            <a href={content.github} target="_blank">
              <GitHubIcon
                width={'28px'}
                height={'28px'}
                className="transition-all duration-500 hover:fill-white"
              />
            </a>
          </span>
        </div>
      )}
    </>
    // </div>
  );
};

export default ScrollImage;
