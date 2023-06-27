import React, { FC } from 'react';

type LinkIconProps = {
  height: string;
  width: string;
  color?: string;
  className?: string;
};

const LinkIcon: FC<LinkIconProps> = ({
  height,
  width,
  color = '#292524',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 96 960 960"
      fill={color}
      className={`svg ${className}`}
      shape-rendering="crispEdges"
    >
      <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />{' '}
    </svg>
  );
};

export default LinkIcon;
