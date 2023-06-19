import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

type GridBackgroundProps = {
  gridStart: string;
};

const GridBackground: FC<GridBackgroundProps> = ({ gridStart }) => {
  return (
    <div className="grid h-96 w-96 grid-cols-4 grid-rows-4 gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={uuid()} className={`${gridStart} h-24 w-24 bg-stone-800 `} />
      ))}
    </div>
  );
};

export default GridBackground;
