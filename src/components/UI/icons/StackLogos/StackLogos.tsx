import React, { FC } from 'react';

import { paths } from './paths';

type StackLogoProps = {
  height: string;
  width: string;
  logo: string;
  color?: string;
  className?: string;
};

const StackLogo: FC<StackLogoProps> = ({
  height,
  width,
  logo,
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
      {paths[logo as keyof typeof paths]}
    </svg>
  );
};

export default StackLogo;
