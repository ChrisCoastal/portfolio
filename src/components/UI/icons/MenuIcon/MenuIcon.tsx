import React, { FC } from 'react';

type MenuIconProps = {
  height: string;
  width: string;
  color?: string;
  className?: string;
};

const MenuIcon: FC<MenuIconProps> = ({
  height,
  width,
  color = '#fff',
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
          d="M47,10.06c0,1.92-1.72,3.47-3.83,3.47H4.83C2.72,13.53,1,11.98,1,10.06l0,0c0-1.92,1.72-3.47,3.83-3.47h38.33
          C45.28,6.59,47,8.15,47,10.06L47,10.06z"
        />
        <path
          d="M47,24c0,1.92-1.72,3.47-3.83,3.47H4.83C2.72,27.47,1,25.92,1,24l0,0c0-1.92,1.72-3.47,3.83-3.47h38.33
          C45.28,20.53,47,22.08,47,24L47,24z"
        />
        <path
          d="M47,37.94c0,1.92-1.72,3.47-3.83,3.47H4.83C2.72,41.41,1,39.85,1,37.94l0,0c0-1.92,1.72-3.47,3.83-3.47h38.33
          C45.28,34.47,47,36.02,47,37.94L47,37.94z"
        />
      </g>
    </svg>
  );
};

export default MenuIcon;
