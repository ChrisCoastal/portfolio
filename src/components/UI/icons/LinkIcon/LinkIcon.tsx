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
          <polygon
            points="96.47,11.25 96.47,25.35 144.67,25.35 81.78,88.25 91.75,98.22 154.65,35.33 154.65,83.53 168.75,83.53 
		168.75,11.25 	"
          />
          <polygon
            points="154.65,154.65 25.35,154.65 25.35,25.35 80.3,25.35 80.3,11.25 11.25,11.25 11.25,168.75 168.75,168.75 
		168.75,99.7 154.65,99.7 	"
          />
        </g>
      )}
    </svg>
  );
};

export default LinkIcon;
