import React, { FC } from 'react';

type GitHubIconProps = {
  height: string;
  width: string;
  fill?: 'solid' | 'outline';
  color?: string;
  className?: string;
};

const GitHubIcon: FC<GitHubIconProps> = ({
  height,
  width,
  fill = 'solid',
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
    >
      {fill === 'solid' ? (
        <g>
          <path
            fill="none"
            stroke="#000000"
            stroke-width="6"
            stroke-miterlimit="10"
            d="M76.29,125.05c-2.49,2.67-3.73,5.74-4.36,9.11
          c-0.08,0.46-0.61,1-1.06,1.19c-8,3.21-15.58,1.78-20.43-6.17c-2.47-4.04-5.7-7.09-10.53-7.94c-1.12-0.2-2.35-0.06-3.47,0.2
          c-1.21,0.27-1.45,1.19-0.65,2.14c0.56,0.67,1.22,1.32,1.97,1.76c3.78,2.23,6.53,5.49,7.87,9.51c2.88,8.65,11.36,12.39,20.48,11.51
          c1.7-0.17,3.38-0.42,5.23-0.65c0.06,0.48,0.16,0.92,0.17,1.36c0.05,3.84,0.09,7.68,0.1,11.52c0.02,3.89-2.21,5.48-5.91,4.15
          c-17.52-6.32-31.02-17.54-40.25-33.71C0.97,86.14,23.99,31.58,71.72,19.15c40.53-10.55,82.3,15.4,91.02,56.54
          c7.49,35.33-10.2,70.29-42.96,84.91c-1.94,0.86-3.92,1.63-5.94,2.29c-3.1,1.02-5.32-0.6-5.32-3.85c0-6.32,0.03-12.64,0.1-18.96
          c0.06-5.5-0.7-10.72-4.74-15c3.19-0.65,6.27-1.12,9.26-1.9c14.61-3.77,22.89-13.48,24.02-28.51c0.33-4.43,0.19-8.96-0.32-13.38
          c-0.54-4.72-2.87-8.83-5.95-12.45c-0.65-0.76-0.8-1.37-0.5-2.36c1.79-5.86,1.22-11.65-0.68-17.4c-0.37-1.11-1.02-1.63-2.08-1.39
          c-2.97,0.68-6.05,1.14-8.84,2.28c-3.14,1.29-6,3.26-9.02,4.84c-0.65,0.34-1.57,0.55-2.26,0.38c-11.58-2.81-23.14-2.82-34.72-0.02
          c-0.74,0.18-1.76-0.03-2.41-0.43c-4.94-3.05-9.92-5.96-15.77-6.9c-0.29-0.05-0.58-0.11-0.87-0.13c-2.54-0.25-2.7-0.16-3.48,2.34
          c-1.74,5.49-2.02,10.99-0.43,16.57c0.17,0.6,0,1.54-0.38,2.02c-5.54,6.79-7.4,14.59-6.71,23.19c0.37,4.67,1.08,9.26,2.82,13.63
          c4.05,10.19,12.03,15.56,22.31,18C70.55,124.11,73.3,124.5,76.29,125.05z"
          />
        </g>
      ) : (
        <path
          d="M73.42,132.39c-3.01,3.23-4.51,6.94-5.27,11.02c-0.1,0.56-0.74,1.21-1.28,1.44c-9.67,3.88-18.84,2.15-24.71-7.46
		c-2.99-4.89-6.89-8.58-12.73-9.6c-1.35-0.24-2.84-0.07-4.2,0.24c-1.46,0.33-1.75,1.44-0.79,2.59c0.68,0.81,1.48,1.6,2.38,2.13
		c4.57,2.7,7.9,6.64,9.52,11.5c3.48,10.46,13.74,14.98,24.77,13.92c2.06-0.21,4.09-0.51,6.32-0.79c0.07,0.58,0.19,1.11,0.21,1.64
		c0.06,4.64,0.11,9.29,0.12,13.93c0.02,4.7-2.67,6.63-7.15,5.02c-21.19-7.64-37.51-21.21-48.68-40.77
		C-17.67,85.33,10.17,19.35,67.89,4.32c49.02-12.76,99.53,18.62,110.08,68.38c9.06,42.73-12.33,85-51.95,102.69
		c-2.35,1.04-4.74,1.97-7.18,2.77c-3.75,1.23-6.43-0.73-6.43-4.66c0-7.64,0.04-15.29,0.12-22.93c0.07-6.65-0.85-12.96-5.73-18.14
		c3.86-0.79,7.58-1.35,11.2-2.3c17.67-4.56,27.68-16.3,29.05-34.48c0.4-5.36,0.23-10.84-0.39-16.18
		c-0.65-5.71-3.47-10.68-7.19-15.06c-0.79-0.92-0.97-1.66-0.6-2.85c2.16-7.09,1.47-14.09-0.82-21.04c-0.45-1.34-1.23-1.97-2.52-1.68
		c-3.59,0.82-7.32,1.38-10.69,2.76c-3.8,1.56-7.26,3.94-10.91,5.85c-0.79,0.41-1.9,0.67-2.73,0.46c-14-3.4-27.98-3.41-41.99-0.02
		c-0.9,0.22-2.13-0.04-2.92-0.52c-5.97-3.69-12-7.21-19.07-8.34c-0.35-0.06-0.7-0.13-1.05-0.16c-3.07-0.3-3.27-0.19-4.21,2.83
		c-2.1,6.64-2.44,13.29-0.52,20.04c0.21,0.73,0,1.86-0.46,2.44c-6.7,8.21-8.95,17.64-8.11,28.04c0.45,5.65,1.31,11.2,3.41,16.48
		c4.9,12.32,14.55,18.82,26.98,21.77C66.48,131.25,69.8,131.73,73.42,132.39z"
        />
      )}
    </svg>
  );
};

export default GitHubIcon;
