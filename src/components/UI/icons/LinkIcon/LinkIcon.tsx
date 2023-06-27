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
      shape-rendering="crispEdges"
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
      {/* <path */}
      {/* //       d="M14.7,14.7V165.3H165.3V14.7H14.7z M141.06,141.06H38.94V38.94H90v5.32H44.27v91.46h91.46V90h5.32V141.06z M141.06,84.67
	// h-5.32V48.03l-42.8,42.81l-3.76-3.76l42.8-42.81H95.33v-5.32h45.73V84.67z"
  //     /> */}
      {/* <polygon points="26.42,0.75 26.42,3.17 43.11,3.17 23.62,22.67 25.33,24.38 44.83,4.89 44.83,21.57 47.25,21.57 47.25,0.75 " /> */}
      {/* <polygon points="47.25,47.25 0.75,47.25 0.75,0.75 24,0.75 24,3.17 3.17,3.17 3.17,44.83 44.83,44.83 44.83,24 47.25,24 " /> */}
      {/* <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />{' '} */}
    </svg>
  );
};

export default LinkIcon;
