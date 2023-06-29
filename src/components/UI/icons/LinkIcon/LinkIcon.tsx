import React, { FC } from 'react';

type LinkIconProps = {
  height: string;
  width: string;
  line?: 'thin' | 'thick';
  color?: string;
  className?: string;
};

const LinkIcon: FC<LinkIconProps> = ({
  height,
  width,
  line = 'thin',
  color = '#292524',
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
      shapeRendering="geometricPrecision"
    >
      {line === 'thin' ? (
        <g>
          <polygon points="96,19.5 96,27.5 146.84,27.5 84.17,90.17 89.83,95.83 152.5,33.16 152.5,84 160.5,84 160.5,19.5 	" />
          <polygon points="152.5,152.5 27.5,152.5 27.5,27.5 81,27.5 81,19.5 19.5,19.5 19.5,160.5 160.5,160.5 160.5,99 152.5,99 	" />
        </g>
      ) : (
        <g>
          <polygon points="96,16.5 96,30.5 139.6,30.5 81.05,89.05 90.95,98.95 149.5,40.4 149.5,84 163.5,84 163.5,16.5 	" />
          <polygon points="149.5,149.5 30.5,149.5 30.5,30.5 81,30.5 81,16.5 16.5,16.5 16.5,163.5 163.5,163.5 163.5,99 149.5,99 	" />
        </g>
      )}
    </svg>
  );
};

export default LinkIcon;
