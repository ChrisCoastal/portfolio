import React, { FC } from 'react';

import {
  clickForMoreA,
  clickForMoreB,
  gitHub,
  gitHubRepo,
} from '@/constants/clickableText';

type CursorTextProps = {
  height: string;
  width: string;
  text: 'click' | 'github' | 'link' | undefined;
  color?: string;
  className?: string;
};

const CursorText: FC<CursorTextProps> = ({
  height,
  width,
  text,
  color = '#fff',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 180 180"
      fill={color}
      className={`svg ${className}`}
    >
      {gitHubRepo}
    </svg>
  );
};

export default CursorText;
