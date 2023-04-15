import type { FC } from 'react';
import React from 'react';

type ScrollBlockProps = {
  className?: string;
};

const ScrollBlock: FC<ScrollBlockProps> = ({ className }) => {
  return (
    <div
      className={`${className} absolute top-[240vh] flex h-full w-full items-center justify-center bg-pink-500/50`}
    >
      ScrollBlock
    </div>
  );
};

export default ScrollBlock;
