import React, { FC } from 'react';

type CodeIconProps = {
  height: string;
  width: string;
  text?: string;
  color?: string;
  className?: string;
};

const CodeIcon: FC<CodeIconProps> = ({
  height,
  width,
  text = 'code',
  color = '#292524',
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

      {/* <g>
        <polygon points="20.38,7.21 3.59,24 20.38,40.79 23.8,37.38 10.42,24 23.8,10.62 	" />
        <text
          transform="matrix(1 0 0 1 22.2227 30.6201)"
          font-size="23.7749"
          className="font-mono font-extrabold"
        >
          {text}
        </text>
        <polygon points="75.45,7.21 72.04,10.63 85.41,24 72.04,37.38 75.46,40.79 92.25,24 	" />
      </g> */}
    </svg>
  );
};

export default CodeIcon;
