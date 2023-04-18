import React, { FC, ReactNode } from 'react';

type GalleryProps = {
  children?: ReactNode;
  className?: string;
};

const Gallery: FC<GalleryProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} grid max-w-fit grid-cols-[repeat(6,_1fr)] place-content-center justify-center gap-2`}
    >
      {children}
    </div>
  );
};

export default Gallery;
