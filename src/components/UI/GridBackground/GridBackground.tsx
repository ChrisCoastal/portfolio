import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

type GridBackgroundProps = {
  className?: string;
};

const GridBackground: FC<GridBackgroundProps> = ({ className }) => {
  return (
    <div
      className={`${className} absolute grid h-96 w-96 origin-center rotate-45 grid-cols-4 grid-rows-4 gap-1`}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={uuid()} className={`${''} h-24 w-24 bg-stone-800`} />
      ))}
    </div>
  );
};

export default GridBackground;
