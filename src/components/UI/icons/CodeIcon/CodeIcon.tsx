import React, { FC } from 'react';

type CodeIconProps = {
  height: string;
  width: string;
  color?: string;
  className?: string;
};

const CodeIcon: FC<CodeIconProps> = ({
  height,
  width,
  color = '#000',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 48 48"
      fill={color}
      className={`svg ${className}`}
    >
      <g>
        <path
          d="M16.51,35.23L5.28,24l11.32-11.32l2.01,2.01L9.31,24l9.22,9.22L16.51,35.23z M31.39,35.32l-2.01-2.01L38.69,24l-9.22-9.22
		l2.01-2.01L42.72,24L31.39,35.32z"
        />
      </g>
    </svg>
  );
};

export default CodeIcon;
