import React, { FC } from 'react';

import { CursorTextOptions } from '@/@types/types';
import cursorTextSvg from '@/constants/cursorTextSvg';

type CursorTextProps = {
  height: string;
  width: string;
  text: CursorTextOptions;
  color?: string;
  className?: string;
};

const CursorText: FC<CursorTextProps> = ({
  height,
  width,
  text,
  color = '#ff3654',
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
      {cursorTextSvg[text]}
    </svg>
  );
};

export default CursorText;
