import React from 'react';
import type { FC } from 'react';

type ScrollBlockProps = {
  top: string;
  rowGap?: string;
  className?: string;
  children?: React.ReactNode;
};

const ScrollBlock: FC<ScrollBlockProps> = ({ top, className, children }) => {
  return (
    <div
      style={{ top }}
      className={`bg-pink-500/00 absolute flex w-full items-center justify-center`}
    >
      <div className={`${className} mx-12 w-full `}>
        <div className="mx-auto flex max-w-5xl flex-col gap-40">{children}</div>
      </div>
    </div>
  );
};

export default ScrollBlock;
