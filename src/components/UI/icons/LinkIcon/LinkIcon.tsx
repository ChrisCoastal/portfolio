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
  color = '#000',
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
    >
      <path d="M185.087 950.131q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862V281.087q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521H459v79.783H185.087v589.826h589.826V597h79.783v273.913q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087ZM395.001 717 340 660.999l379.912-379.912H519v-79.783h335.696V537h-79.783V337.088L395.001 717Z" />{' '}
    </svg>
  );
};

export default LinkIcon;
