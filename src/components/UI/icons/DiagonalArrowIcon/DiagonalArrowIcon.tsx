import React, { FC } from 'react';

type GitHubIconProps = {
  height: string;
  width: string;
  color?: string;
  className?: string;
};

const GitHubIcon: FC<GitHubIconProps> = ({
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
      viewBox="0 0 180 180"
      fill={color}
      className={`svg ${className}`}
    >
      <polygon
        points="68.34,31.23 68.34,39.23 135.11,39.23 32.4,141.94 38.06,147.6 140.77,44.89 140.77,111.66 148.77,111.66 
	148.77,31.23 "
      />
    </svg>
  );
};

export default GitHubIcon;
