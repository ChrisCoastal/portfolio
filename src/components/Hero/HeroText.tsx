import React, { FC } from 'react';

import { heroSvgRatio } from '@/constants/constants';

type HeroTextProps = {
  orientation: 'landscape' | 'portrait';
  width: number;
  color?: string;
  className?: string;
};

const HeroText: FC<HeroTextProps> = ({
  orientation,
  width,
  color = '#000',
  className,
}) => {
  const height = width * heroSvgRatio[orientation];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${height}vw`}
      width={`${width}vw`}
      viewBox={text[orientation].viewBox}
      fill={color}
      className={`svg ${className}`}
      aria-label="I like making nice stuff."
    >
      {text[orientation].path}
    </svg>
  );
};

export default HeroText;

const text = {
  landscape: {
    path: (
      <g>
        <path d="M43.68,313.44V105.85h43.63v207.59H43.68z" />
        <path d="M185.99,313.44V105.85h43.63v169.63h115.24v37.96H185.99z" />
        <path d="M374.95,313.44V105.85h43.63v207.59H374.95z" />
        <path d="M456.79,313.44V105.85h43.63v92.82l92.07-92.82h53.26l-102.3,98.75l107.12,108.84h-58.37l-91.77-96.38v96.38H456.79z" />
        <path d="M659.29,313.44V105.85h161.88v37.37H702.92v47.45h77.93v36.18h-77.93v49.23h119.45v37.37H659.29z" />
        <path d="M43.68,551.73V344.14h55.97l57.77,111.8l57.77-111.8h55.97v207.59h-41.22V399l-73.12,137.9L84,398.41v153.32H43.68z" />
        <path
          d="M288.9,551.73l86.66-207.59h50.25l85.75,207.59h-47.24l-21.36-54.57H356l-21.66,54.57H288.9z M369.54,462.76h60.18
			l-30.09-76.51L369.54,462.76z"
        />
        <path d="M529.31,551.73V344.14h43.63v92.82l92.07-92.82h53.26l-102.3,98.75l107.12,108.84h-58.37l-91.77-96.38v96.38H529.31z" />
        <path d="M731.82,551.73V344.14h43.63v207.59H731.82z" />
        <path d="M813.66,551.73V344.14h41.52l104.71,134.04V344.14h40.92v207.59H962.3L854.88,412.94v138.79H813.66z" />
        <path
          d="M1142.53,554.99c-15.65,0-30.19-2.72-43.63-8.15c-13.44-5.44-25.28-13.05-35.51-22.83c-10.23-9.79-18.2-21.15-23.92-34.1
			c-5.72-12.95-8.58-26.94-8.58-41.96c0-15.02,2.86-29.01,8.58-41.96c5.72-12.95,13.59-24.32,23.62-34.1
			c10.03-9.79,21.81-17.4,35.36-22.83c13.54-5.44,28.03-8.16,43.48-8.16c17.45,0,33.9,3.41,49.35,10.23
			c15.44,6.82,28.18,16.36,38.21,28.62l-30.39,27.58c-7.22-8.9-15.75-15.62-25.58-20.17c-9.83-4.55-20.36-6.82-31.59-6.82
			c-9.43,0-18.16,1.73-26.18,5.19c-8.03,3.46-15.04,8.21-21.06,14.24c-6.02,6.03-10.68,13.15-13.99,21.35
			c-3.31,8.21-4.97,17.15-4.97,26.84c0,9.69,1.7,18.68,5.12,26.99c3.41,8.3,8.17,15.47,14.29,21.5
			c6.12,6.03,13.24,10.78,21.36,14.23c8.12,3.46,17,5.19,26.63,5.19c10.03,0,19.05-1.83,27.08-5.49c8.02-3.66,14.79-8.8,20.31-15.42
			c5.51-6.62,9.18-14.09,10.98-22.39h-62.29v-37.37h108.92v13.05c0,15.42-2.66,29.61-7.97,42.56
			c-5.32,12.95-12.69,24.22-22.12,33.81c-9.43,9.59-20.56,17.05-33.4,22.39C1171.82,552.32,1157.77,554.99,1142.53,554.99z"
        />
        <path
          d="M195.27,758.78c11.85,0,21.5-11.68,21.5-33.41v-143.7h11.85v143.7c0,45.91-25.91,64.65-52.64,64.65
			c-17.64,0-33.35-17.39-33.35-38.85c0-16.84,9.37-36.13,34.45-52.43c3.31-1.9,4.13-3.8,4.13-5.43c0-1.36-0.83-2.45-2.48-2.45
			c-0.83,0-2.2,0.54-3.86,1.36c-12.95,8.42-23.15,12.22-31.42,12.22c-22.6,0-30.59-27.98-47.68-55.42
			c-12.4-19.56-25.08-34.5-32.8-34.5c-4.69,0-7.44,5.71-7.44,19.02v20.65c0,34.77,20.95,54.87,34.45,70.9
			c10.2,11.68,13.51,24.18,13.51,35.04c0,14.13-5.51,25.54-11.3,29.88H43.68c9.37-20.37,12.68-36.13,12.68-49.17
			c0-26.62-12.68-44.28-12.68-77.15v-52.16c0-17.93,11.3-29.88,25.36-29.88s24.81,4.89,53.75,48.62
			c12.13,18.47,13.51,34.23,28.39,34.23c7.17,0,25.36-9.78,35.56-9.78c10.2,0,16.54,6.25,16.54,16.03c0,8.96-5.79,21.19-20.4,33.96
			c-8.82,7.88-13.23,17.39-13.23,26.08C169.64,743.84,182.04,758.78,195.27,758.78z"
        />
        <path
          d="M304.2,661.8c8.27,0,15.16,9.51,15.16,20.37c0,7.61-3.31,16.03-12.13,22.28c-11.3,8.15-16.54,17.93-16.54,29.61
			c0,8.15,2.21,16.84,6.34,27.17c1.93,4.35,3.31,10.32,3.31,15.75c0,5.43-1.1,9.78-4.69,13.04h-43.55v-39.39h0.28
			c0-30.42,24.53-42.38,46.58-54.6c3.31-1.63,4.13-3.8,4.13-5.43s-1.1-2.44-3.03-2.44c-0.83,0-1.93,0-3.31,0.54
			c-7.99,3.8-14.33,5.7-19.85,5.7c-22.05,0-24.81-28.25-24.81-45.36c0-4.62,0.28-8.69,0.28-10.87v-56.23h38.04v60.31
			c0,12.5,0.55,22.55,5.24,22.55C298.41,664.79,301.44,661.8,304.2,661.8z"
        />
        <path
          d="M446.42,790.02h-12.4c-45.2,0-108.6-29.61-108.6-93.45c0-3.8,0.28-7.33,0.55-11.14c9.1-82.04,68.91-103.77,136.71-103.77
			c29.77,0,60.09,14.13,60.09,37.49c0,10.32-6.89,18.74-17.64,18.74c-8.27,0-21.22-8.69-29.22-8.69c-4.96,0-9.37,1.63-12.68,4.89
			c-7.17,6.79-13.78,9.51-19.29,9.51c-10.2,0-16.81-9.78-16.81-19.56c0-10.59,7.99-21.73,27.29-21.73h1.65
			c11.85,0.27,21.22,11.41,34.73,17.11c0.55,0.27,1.1,0.54,1.65,0.54c2.76,0,4.96-3.26,4.96-7.33c0-7.61-7.44-18.47-32.8-18.47
			h-1.65c-19.42,0-38.75,6.88-53.76,19.02c-28.29,22.89-45.33,61.54-38.85,98c1.62,9.12,4.83,20.23,9.89,28.09
			c7.6,11.8,20.03,24.13,32.95,29.96c7.86,3.54,17.94,6.13,26.62,6.13c33.9,0,48.79-29.34,48.79-53.51c0-3.26-0.28-6.52-0.83-9.24
			c1.93-0.27,3.58-0.27,5.51-0.27c21.22,0,30.59,14.12,30.59,29.07C523.87,782.41,470.67,790.02,446.42,790.02z"
        />
        <path
          d="M639.84,793.84c-11.07,0.61-22.23,0.25-33.18-0.61c-9.3-0.73-18.56-1.97-27.78-3.35c-16.25-2.42-32.22-9.26-37.29-26.22
			c-1.34-4.48-2.83-9.97-2.83-14.66c0-19.29,11.3-39.12,30.04-44.82c22.05-6.79,73.59-19.29,88.2-28.25
			c2.76-1.9,4.13-3.53,4.13-5.16s-1.1-2.45-2.76-2.45c-0.83,0-2.21,0.27-3.58,0.82c-12.95,7.06-39.97,18.47-61.19,19.29
			c-0.83,0-1.65,0.27-2.48,0.27c-31.7,0-47.68-23.9-47.68-48.62c0-42.65,40.24-58.68,81.31-58.68c30.87,0,75.25,10.59,75.25,32.33
			c0,8.42-7.44,15.48-15.71,15.48c-3.86,0-7.99-1.63-11.58-5.16c-10.47-10.32-20.67-24.72-51.54-24.72h-4.41
			c-19.29,0.54-35,15.76-35,39.93c0,16.3,10.75,23.09,27.29,23.09c21.77,0,40.52-14.4,47.41-18.47c5.51-3.26,9.65-4.08,13.78-4.08
			c9.92,0,15.44,7.61,15.44,16.84c0,10.05-6.34,22-20.4,28.52c-33.35,15.48-82.96,19.83-82.96,59.49c0,22,17.64,33.41,44.38,33.41
			c10.47,0,19.84-0.81,21.77-1.09c29.49-5.43,40.79-31.78,40.79-53.24c0-3.53,0-6.25-0.55-9.51c1.65-0.27,3.03-0.81,4.69-0.81
			c16.54,0,24.53,14.12,24.53,29.07c0,6.77-2.89,15.47-6.01,21.41c-3.19,6.08-8.13,10.78-14.03,14.2
			C680.05,788.4,660.09,792.73,639.84,793.84z"
        />
        <path
          d="M876.82,792.98c-17.05,0-33.7-3.11-49.95-9.34c-16.25-6.23-30.69-15.07-43.33-26.54l24.97-30.84
			c12.23,10.48,24.02,18.14,35.35,22.98c11.33,4.85,23.32,7.27,35.96,7.27c8.82,0,16.45-1.04,22.87-3.11
			c6.42-2.08,11.38-5.09,14.89-9.04c3.51-3.95,5.27-8.6,5.27-13.94c0-7.12-2.61-12.6-7.82-16.46c-5.22-3.86-14.14-6.87-26.78-9.04
			l-41.82-7.12c-17.86-2.96-31.44-9.19-40.77-18.68c-9.33-9.49-13.99-21.75-13.99-36.77c0-12.85,3.36-24.02,10.08-33.51
			c6.72-9.49,16.25-16.76,28.58-21.8c12.34-5.04,27.03-7.56,44.08-7.56c15.44,0,30.84,2.57,46.19,7.71
			c15.35,5.14,28.93,12.26,40.77,21.35l-23.47,32.03c-22.07-16.61-44.23-24.91-66.5-24.91c-7.82,0-14.64,0.99-20.46,2.97
			c-5.82,1.98-10.28,4.7-13.39,8.15c-3.11,3.46-4.66,7.56-4.66,12.31c0,6.33,2.3,11.22,6.92,14.68c4.61,3.46,12.34,6.08,23.17,7.86
			l39.72,6.52c21.06,3.37,36.81,9.94,47.24,19.72c10.43,9.79,15.65,22.69,15.65,38.7c0,13.45-3.61,25.16-10.83,35.14
			c-7.22,9.98-17.5,17.7-30.84,23.13C910.56,790.26,894.87,792.98,876.82,792.98z"
        />
        <path d="M1044.41,790.02V620.39H973.4v-37.96h185.35v37.96h-70.71v169.63H1044.41z" />
        <path
          d="M1273.09,792.98c-19.06,0-35.56-3.75-49.5-11.27c-13.95-7.51-24.73-18.24-32.35-32.18c-7.63-13.94-11.43-30.3-11.43-49.08
			V582.43h43.63v118.03c0,10.68,2.05,20.02,6.17,28.02c4.11,8.01,9.93,14.14,17.45,18.39c7.52,4.25,16.29,6.38,26.33,6.38
			c10.03,0,18.75-2.12,26.18-6.38c7.42-4.25,13.19-10.38,17.3-18.39c4.11-8.01,6.17-17.35,6.17-28.02V582.43h43.33v118.03
			c0,18.59-3.81,34.84-11.43,48.78c-7.63,13.94-18.41,24.72-32.35,32.32C1308.64,789.18,1292.15,792.98,1273.09,792.98z"
        />
        <path d="M1401.27,790.02V582.43h162.78v37.37H1444.9v48.93h79.14v36.18h-79.14v85.11H1401.27z" />
        <path d="M1593.54,790.02V582.43h162.78v37.37h-119.15v48.93h79.14v36.18h-79.14v85.11H1593.54z" />
        <path
          d="M1760.02,789.88c-6.62,0-12.34-2.37-17.15-7.12c-4.81-4.74-7.22-10.38-7.22-16.9c0-6.72,2.41-12.46,7.22-17.2
			s10.53-7.12,17.15-7.12c6.62,0,12.34,2.37,17.15,7.12c4.81,4.75,7.22,10.48,7.22,17.2c0,6.52-2.41,12.16-7.22,16.9
			C1772.35,787.51,1766.64,789.88,1760.02,789.88z"
        />
      </g>
    ),
    viewBox: '0 0 1800 900',
  },
  portrait: {
    path: (
      //   <g>
      //     <path d="M43.77,313.57V105.98H87.4v207.59H43.77z" />
      //     <path d="M186.08,313.57V105.98h43.63v169.63h115.24v37.96H186.08z" />
      //     <path d="M375.04,313.57V105.98h43.63v207.59H375.04z" />
      //     <path d="M456.88,313.57V105.98h43.63v92.82l92.07-92.82h53.26l-102.3,98.75l107.12,108.84h-58.37l-91.77-96.38v96.38H456.88z" />
      //     <path d="M659.38,313.57V105.98h161.88v37.37H703.01v47.45h77.93v36.18h-77.93v49.23h119.45v37.37H659.38z" />
      //     <path d="M43.77,551.86V344.27h55.97l57.77,111.8l57.77-111.8h55.97v207.59h-41.22V399.13l-73.12,137.9L84.08,398.54v153.32H43.77z" />
      //     <path
      //       d="M288.99,551.86l86.66-207.59h50.25l85.75,207.59h-47.24l-21.36-54.57h-86.96l-21.66,54.57H288.99z M369.63,462.89h60.18
      // l-30.09-76.51L369.63,462.89z"
      //     />
      //     <path d="M529.4,551.86V344.27h43.63v92.82l92.07-92.82h53.26l-102.3,98.75l107.12,108.84h-58.37l-91.77-96.38v96.38H529.4z" />
      //     <path d="M731.91,551.86V344.27h43.63v207.59H731.91z" />
      //     <path d="M813.75,551.86V344.27h41.52l104.71,134.04V344.27h40.92v207.59h-38.51L854.97,413.07v138.79H813.75z" />
      //     <path
      //       d="M1142.62,555.12c-15.65,0-30.19-2.72-43.63-8.15c-13.44-5.44-25.28-13.05-35.51-22.83c-10.23-9.79-18.2-21.15-23.92-34.1
      // c-5.72-12.95-8.58-26.94-8.58-41.96c0-15.02,2.86-29.01,8.58-41.96c5.72-12.95,13.59-24.32,23.62-34.1
      // c10.03-9.79,21.81-17.4,35.36-22.83c13.54-5.44,28.03-8.16,43.48-8.16c17.45,0,33.9,3.41,49.35,10.23
      // c15.44,6.82,28.18,16.36,38.21,28.62l-30.39,27.58c-7.22-8.9-15.75-15.62-25.58-20.17c-9.83-4.55-20.36-6.82-31.59-6.82
      // c-9.43,0-18.16,1.73-26.18,5.19c-8.03,3.46-15.04,8.21-21.06,14.24c-6.02,6.03-10.68,13.15-13.99,21.35
      // c-3.31,8.21-4.97,17.15-4.97,26.84c0,9.69,1.7,18.68,5.12,26.99c3.41,8.3,8.17,15.47,14.29,21.5c6.12,6.03,13.24,10.78,21.36,14.23
      // c8.12,3.46,17,5.19,26.63,5.19c10.03,0,19.05-1.83,27.08-5.49c8.02-3.66,14.79-8.8,20.31-15.42c5.51-6.62,9.18-14.09,10.98-22.39
      // h-62.29v-37.37h108.92v13.05c0,15.42-2.66,29.61-7.97,42.56c-5.32,12.95-12.69,24.22-22.12,33.81
      // c-9.43,9.59-20.56,17.05-33.4,22.39C1171.91,552.45,1157.86,555.12,1142.62,555.12z"
      //     />
      //     <path
      //       d="M195.36,758.9c11.85,0,21.5-11.68,21.5-33.41v-143.7h11.85v143.7c0,45.91-25.91,64.65-52.64,64.65
      // c-17.64,0-33.35-17.39-33.35-38.85c0-16.84,9.37-36.13,34.45-52.43c3.31-1.9,4.13-3.8,4.13-5.43c0-1.36-0.83-2.45-2.48-2.45
      // c-0.83,0-2.2,0.54-3.86,1.36c-12.95,8.42-23.15,12.22-31.42,12.22c-22.6,0-30.59-27.98-47.68-55.42
      // c-12.4-19.56-25.08-34.5-32.8-34.5c-4.69,0-7.44,5.71-7.44,19.02v20.65c0,34.77,20.95,54.87,34.45,70.9
      // c10.2,11.68,13.51,24.18,13.51,35.04c0,14.13-5.51,25.54-11.3,29.88H43.77c9.37-20.37,12.68-36.13,12.68-49.17
      // c0-26.62-12.68-44.28-12.68-77.15v-52.16c0-17.93,11.3-29.88,25.36-29.88s24.81,4.89,53.75,48.62
      // c12.13,18.47,13.51,34.23,28.39,34.23c7.17,0,25.36-9.78,35.56-9.78c10.2,0,16.54,6.25,16.54,16.03c0,8.96-5.79,21.19-20.4,33.96
      // c-8.82,7.88-13.23,17.39-13.23,26.08C169.73,743.96,182.13,758.9,195.36,758.9z"
      //     />
      //     <path
      //       d="M304.29,661.92c8.27,0,15.16,9.51,15.16,20.37c0,7.61-3.31,16.03-12.13,22.28c-11.3,8.15-16.54,17.93-16.54,29.61
      // c0,8.15,2.21,16.84,6.34,27.17c1.93,4.35,3.31,10.32,3.31,15.75c0,5.43-1.1,9.78-4.69,13.04h-43.55v-39.39h0.28
      // c0-30.42,24.53-42.38,46.58-54.6c3.31-1.63,4.13-3.8,4.13-5.43s-1.1-2.44-3.03-2.44c-0.83,0-1.93,0-3.31,0.54
      // c-7.99,3.8-14.33,5.7-19.85,5.7c-22.05,0-24.81-28.25-24.81-45.36c0-4.62,0.28-8.69,0.28-10.87v-56.23h38.04v60.31
      // c0,12.5,0.55,22.55,5.24,22.55C298.5,664.91,301.53,661.92,304.29,661.92z"
      //     />
      //     <path
      //       d="M446.51,790.14h-12.4c-45.2,0-108.6-29.61-108.6-93.45c0-3.8,0.28-7.33,0.55-11.14c9.1-82.04,68.91-103.77,136.71-103.77
      // c29.77,0,60.09,14.13,60.09,37.49c0,10.32-6.89,18.74-17.64,18.74c-8.27,0-21.22-8.69-29.22-8.69c-4.96,0-9.37,1.63-12.68,4.89
      // c-7.17,6.79-13.78,9.51-19.29,9.51c-10.2,0-16.81-9.78-16.81-19.56c0-10.59,7.99-21.73,27.29-21.73h1.65
      // c11.85,0.27,21.22,11.41,34.73,17.11c0.55,0.27,1.1,0.54,1.65,0.54c2.76,0,4.96-3.26,4.96-7.33c0-7.61-7.44-18.47-32.8-18.47h-1.65
      // c-19.42,0-38.75,6.88-53.76,19.02c-28.29,22.89-45.33,61.54-38.85,98c1.62,9.12,4.83,20.23,9.89,28.09
      // c7.6,11.8,20.03,24.13,32.95,29.96c7.86,3.54,17.94,6.13,26.62,6.13c33.9,0,48.79-29.34,48.79-53.51c0-3.26-0.28-6.52-0.83-9.24
      // c1.93-0.27,3.58-0.27,5.51-0.27c21.22,0,30.59,14.12,30.59,29.07C523.96,782.54,470.76,790.14,446.51,790.14z"
      //     />
      //     <path
      //       d="M639.93,793.97c-11.07,0.61-22.23,0.25-33.18-0.61c-9.3-0.73-18.56-1.97-27.78-3.35c-16.25-2.42-32.22-9.26-37.29-26.22
      // c-1.34-4.48-2.83-9.97-2.83-14.66c0-19.29,11.3-39.12,30.04-44.82c22.05-6.79,73.59-19.29,88.2-28.25c2.76-1.9,4.13-3.53,4.13-5.16
      // s-1.1-2.45-2.76-2.45c-0.83,0-2.21,0.27-3.58,0.82c-12.95,7.06-39.97,18.47-61.19,19.29c-0.83,0-1.65,0.27-2.48,0.27
      // c-31.7,0-47.68-23.9-47.68-48.62c0-42.65,40.24-58.68,81.31-58.68c30.87,0,75.25,10.59,75.25,32.33c0,8.42-7.44,15.48-15.71,15.48
      // c-3.86,0-7.99-1.63-11.58-5.16c-10.47-10.32-20.67-24.72-51.54-24.72h-4.41c-19.29,0.54-35,15.76-35,39.93
      // c0,16.3,10.75,23.09,27.29,23.09c21.77,0,40.52-14.4,47.41-18.47c5.51-3.26,9.65-4.08,13.78-4.08c9.92,0,15.44,7.61,15.44,16.84
      // c0,10.05-6.34,22-20.4,28.52c-33.35,15.48-82.96,19.83-82.96,59.49c0,22,17.64,33.41,44.38,33.41c10.47,0,19.84-0.81,21.77-1.09
      // c29.49-5.43,40.79-31.78,40.79-53.24c0-3.53,0-6.25-0.55-9.51c1.65-0.27,3.03-0.81,4.69-0.81c16.54,0,24.53,14.12,24.53,29.07
      // c0,6.77-2.89,15.47-6.01,21.41c-3.19,6.08-8.13,10.78-14.03,14.2C680.14,788.53,660.18,792.85,639.93,793.97z"
      //     />
      //     <path
      //       d="M127.69,1031.12c-17.05,0-33.7-3.11-49.95-9.34c-16.25-6.23-30.69-15.07-43.33-26.54l24.97-30.84
      // c12.23,10.48,24.02,18.14,35.35,22.98c11.33,4.85,23.32,7.27,35.96,7.27c8.82,0,16.45-1.04,22.87-3.11
      // c6.42-2.08,11.38-5.09,14.89-9.04c3.51-3.95,5.27-8.6,5.27-13.94c0-7.12-2.61-12.6-7.82-16.46c-5.22-3.86-14.14-6.87-26.78-9.04
      // l-41.82-7.12c-17.86-2.96-31.44-9.19-40.77-18.68c-9.33-9.49-13.99-21.75-13.99-36.77c0-12.85,3.36-24.02,10.08-33.51
      // c6.72-9.49,16.25-16.76,28.58-21.8c12.34-5.04,27.03-7.56,44.08-7.56c15.44,0,30.84,2.57,46.19,7.71
      // c15.35,5.14,28.93,12.26,40.77,21.35l-23.47,32.03c-22.07-16.61-44.23-24.91-66.5-24.91c-7.82,0-14.64,0.99-20.46,2.97
      // c-5.82,1.98-10.28,4.7-13.39,8.15c-3.11,3.46-4.66,7.56-4.66,12.31c0,6.33,2.3,11.22,6.92,14.68c4.61,3.46,12.34,6.08,23.17,7.86
      // l39.72,6.52c21.06,3.37,36.81,9.94,47.24,19.72c10.43,9.79,15.65,22.69,15.65,38.7c0,13.45-3.61,25.16-10.83,35.14
      // c-7.22,9.98-17.5,17.7-30.84,23.13C161.44,1028.4,145.74,1031.12,127.69,1031.12z"
      //     />
      //     <path d="M295.29,1028.16V858.53h-71.01v-37.96h185.35v37.96h-70.71v169.63H295.29z" />
      //     <path
      //       d="M523.96,1031.12c-19.06,0-35.56-3.75-49.5-11.27c-13.95-7.51-24.73-18.24-32.35-32.18c-7.63-13.94-11.43-30.3-11.43-49.08
      // V820.57h43.63V938.6c0,10.68,2.05,20.02,6.17,28.02c4.11,8.01,9.93,14.14,17.45,18.39c7.52,4.25,16.29,6.38,26.33,6.38
      // c10.03,0,18.75-2.12,26.18-6.38c7.42-4.25,13.19-10.38,17.3-18.39c4.11-8.01,6.17-17.35,6.17-28.02V820.57h43.33V938.6
      // c0,18.59-3.81,34.84-11.43,48.78c-7.63,13.94-18.41,24.72-32.35,32.32C559.52,1027.32,543.02,1031.12,523.96,1031.12z"
      //     />
      //     <path d="M652.14,1028.16V820.57h162.78v37.37H695.77v48.93h79.14v36.18h-79.14v85.11H652.14z" />
      //     <path d="M844.41,1028.16V820.57h162.78v37.37H888.04v48.93h79.14v36.18h-79.14v85.11H844.41z" />
      //     <path
      //       d="M1010.89,1028.02c-6.62,0-12.34-2.37-17.15-7.12c-4.81-4.74-7.22-10.38-7.22-16.9c0-6.72,2.41-12.46,7.22-17.2
      // s10.53-7.12,17.15-7.12c6.62,0,12.34,2.37,17.15,7.12s7.22,10.48,7.22,17.2c0,6.52-2.41,12.16-7.22,16.9
      // C1023.23,1025.65,1017.51,1028.02,1010.89,1028.02z"
      //     />
      //   </g>
      <g>
        <path d="M60.97,436.83V147.62h60.78v289.21H60.97z" />
        <path d="M259.25,436.83V147.62h60.78v236.32h160.55v52.89H259.25z" />
        <path d="M522.5,436.83V147.62h60.79v289.21H522.5z" />
        <path d="M636.52,436.83V147.62h60.78v129.32l128.28-129.32h74.2L757.25,285.21l149.24,151.63h-81.33L697.3,302.56v134.28H636.52z" />
        <path d="M918.65,436.83V147.62h225.53v52.06H979.43v66.1H1088v50.41H979.43v68.58h166.42v52.06H918.65z" />
        <path
          d="M60.97,768.81V479.6h77.97l80.49,155.76l80.49-155.76h77.97v289.21h-57.43V556.04L218.59,748.16L117.15,555.21v213.6H60.97
		z"
        />
        <path
          d="M402.62,768.81L523.35,479.6h70.01l119.47,289.21h-65.81l-29.76-76.02H496.1l-30.18,76.02H402.62z M514.96,644.87h83.84
		l-41.92-106.6L514.96,644.87z"
        />
        <path d="M737.56,768.81V479.6h60.78v129.32L926.62,479.6h74.2L858.29,617.18l149.24,151.63H926.2L798.34,634.54v134.28H737.56z" />
        <path d="M1019.69,768.81V479.6h60.78v289.21H1019.69z" />
        <path d="M1133.7,768.81V479.6h57.85l145.88,186.75V479.6h57.01v289.21h-53.66l-149.66-193.36v193.36H1133.7z" />
        <path
          d="M1591.89,773.36c-21.8,0-42.06-3.79-60.78-11.36c-18.73-7.57-35.21-18.18-49.47-31.81s-25.36-29.47-33.33-47.51
		c-7.97-18.04-11.95-37.53-11.95-58.46c0-20.93,3.98-40.42,11.95-58.46c7.96-18.04,18.93-33.88,32.91-47.51
		c13.97-13.63,30.39-24.23,49.26-31.81c18.86-7.57,39.05-11.36,60.57-11.36c24.32,0,47.23,4.75,68.75,14.25
		c21.52,9.5,39.26,22.79,53.24,39.87l-42.34,38.42c-10.06-12.39-21.94-21.76-35.63-28.1c-13.7-6.33-28.37-9.5-44.02-9.5
		c-13.14,0-25.29,2.42-36.47,7.23c-11.18,4.82-20.96,11.43-29.34,19.83c-8.38,8.41-14.88,18.32-19.49,29.75
		c-4.61,11.43-6.92,23.9-6.92,37.39c0,13.5,2.37,26.03,7.13,37.6c4.75,11.57,11.38,21.55,19.91,29.95
		c8.52,8.4,18.45,15.01,29.76,19.83c11.32,4.82,23.69,7.23,37.1,7.23c13.97,0,26.55-2.54,37.73-7.64
		c11.18-5.09,20.61-12.25,28.3-21.49c7.68-9.22,12.78-19.63,15.3-31.19h-86.78v-52.06h151.75v18.18c0,21.49-3.71,41.25-11.11,59.29
		c-7.41,18.04-17.68,33.74-30.81,47.1c-13.14,13.36-28.65,23.76-46.53,31.19C1632.69,769.64,1613.12,773.36,1591.89,773.36z"
        />
        <path
          d="M272.17,1057.27c16.51,0,29.95-16.27,29.95-46.55V810.51h16.51v200.21c0,63.96-36.1,90.08-73.34,90.08
		c-24.57,0-46.46-24.22-46.46-54.12c0-23.46,13.06-50.33,48-73.04c4.61-2.65,5.76-5.3,5.76-7.57c0-1.89-1.15-3.41-3.46-3.41
		c-1.15,0-3.07,0.75-5.38,1.89c-18.05,11.73-32.26,17.03-43.78,17.03c-31.49,0-42.62-38.98-66.43-77.2
		c-17.28-27.25-34.94-48.07-45.7-48.07c-6.53,0-10.37,7.95-10.37,26.49v28.76c0,48.44,29.18,76.45,48,98.78
		c14.21,16.27,18.81,33.68,18.81,48.82c0,19.68-7.68,35.58-15.74,41.63H60.97c13.06-28.39,17.66-50.34,17.66-68.5
		c0-37.09-17.66-61.69-17.66-107.48v-72.66c0-24.98,15.74-41.63,35.33-41.63c19.58,0,34.56,6.81,74.88,67.75
		c16.9,25.73,18.81,47.68,39.55,47.68c9.98,0,35.33-13.62,49.54-13.62c14.21,0,23.04,8.7,23.04,22.33
		c0,12.49-8.06,29.52-28.42,47.31c-12.29,10.98-18.43,24.22-18.43,36.33C236.46,1036.46,253.74,1057.27,272.17,1057.27z"
        />
        <path
          d="M423.93,922.16c11.52,0,21.12,13.25,21.12,28.38c0,10.6-4.61,22.33-16.9,31.03c-15.74,11.35-23.04,24.98-23.04,41.25
		c0,11.35,3.07,23.46,8.83,37.85c2.69,6.06,4.61,14.38,4.61,21.95c0,7.57-1.54,13.62-6.53,18.17h-60.67v-54.88h0.38
		c0-42.39,34.18-59.04,64.9-76.07c4.61-2.27,5.76-5.3,5.76-7.57c0-2.27-1.54-3.4-4.22-3.4c-1.15,0-2.69,0-4.61,0.76
		c-11.13,5.3-19.97,7.95-27.65,7.95c-30.72,0-34.56-39.36-34.56-63.2c0-6.44,0.38-12.11,0.38-15.14v-78.34h52.99v84.02
		c0,17.41,0.77,31.41,7.3,31.41C415.87,926.32,420.09,922.16,423.93,922.16z"
        />
        <path
          d="M622.07,1100.79h-17.28c-62.98,0-151.3-41.25-151.3-130.19c0-5.3,0.38-10.22,0.77-15.52
		c12.67-114.29,96-144.57,190.46-144.57c41.47,0,83.71,19.68,83.71,52.23c0,14.38-9.6,26.11-24.58,26.11
		c-11.52,0-29.57-12.11-40.7-12.11c-6.91,0-13.06,2.27-17.67,6.81c-9.98,9.46-19.2,13.25-26.88,13.25
		c-14.21,0-23.42-13.63-23.42-27.25c0-14.76,11.14-30.28,38.02-30.28h2.31c16.51,0.38,29.57,15.9,48.38,23.84
		c0.77,0.38,1.54,0.76,2.3,0.76c3.84,0,6.91-4.54,6.91-10.22c0-10.6-10.37-25.73-45.7-25.73h-2.3c-27.05,0-53.99,9.58-74.9,26.5
		c-39.41,31.89-63.16,85.73-54.13,136.53c2.26,12.71,6.73,28.18,13.78,39.13c10.59,16.43,27.9,33.61,45.91,41.73
		c10.95,4.94,25,8.54,37.08,8.54c47.23,0,67.97-40.87,67.97-74.55c0-4.54-0.38-9.08-1.15-12.87c2.69-0.38,4.99-0.38,7.68-0.38
		c29.57,0,42.62,19.68,42.62,40.49C729.97,1090.2,655.86,1100.79,622.07,1100.79z"
        />
        <path
          d="M891.54,1106.12c-15.42,0.85-30.97,0.35-46.22-0.85c-12.96-1.02-25.86-2.75-38.71-4.67c-22.63-3.38-44.89-12.9-51.96-36.53
		c-1.87-6.24-3.95-13.88-3.95-20.43c0-26.87,15.75-54.5,41.86-62.45c30.72-9.46,102.53-26.87,122.88-39.36
		c3.84-2.65,5.76-4.92,5.76-7.19c0-2.27-1.54-3.41-3.84-3.41c-1.15,0-3.07,0.38-4.99,1.14c-18.05,9.84-55.68,25.73-85.25,26.87
		c-1.15,0-2.3,0.38-3.46,0.38c-44.16,0-66.43-33.3-66.43-67.75c0-59.42,56.06-81.75,113.28-81.75c43.01,0,104.83,14.76,104.83,45.04
		c0,11.73-10.37,21.57-21.89,21.57c-5.38,0-11.14-2.27-16.13-7.19c-14.59-14.38-28.8-34.44-71.81-34.44h-6.14
		c-26.88,0.76-48.77,21.95-48.77,55.63c0,22.71,14.98,32.17,38.02,32.17c30.34,0,56.45-20.06,66.05-25.74
		c7.68-4.54,13.44-5.68,19.2-5.68c13.83,0,21.5,10.6,21.5,23.47c0,14-8.83,30.66-28.42,39.74
		c-46.46,21.57-115.58,27.63-115.58,82.88c0,30.66,24.58,46.55,61.82,46.55c14.59,0,27.65-1.13,30.34-1.51
		c41.09-7.57,56.83-44.28,56.83-74.18c0-4.92,0-8.71-0.77-13.25c2.3-0.38,4.22-1.14,6.53-1.14c23.04,0,34.18,19.68,34.18,40.5
		c0,9.43-4.03,21.55-8.37,29.82c-4.44,8.47-11.33,15.02-19.55,19.78C947.56,1098.54,919.76,1104.57,891.54,1106.12z"
        />
        <path
          d="M177.9,1436.52c-23.76,0-46.95-4.34-69.59-13.02c-22.64-8.67-42.76-21-60.37-36.98l34.79-42.97
		c17.04,14.6,33.46,25.27,49.26,32.02c15.79,6.75,32.49,10.12,50.1,10.12c12.29,0,22.91-1.45,31.86-4.34
		c8.94-2.89,15.86-7.09,20.75-12.6c4.89-5.5,7.34-11.98,7.34-19.42c0-9.92-3.64-17.56-10.9-22.93c-7.27-5.37-19.7-9.57-37.31-12.6
		l-58.27-9.92c-24.88-4.13-43.81-12.81-56.8-26.03c-13-13.22-19.49-30.3-19.49-51.23c0-17.9,4.68-33.46,14.04-46.69
		c9.36-13.22,22.64-23.34,39.82-30.37c17.19-7.02,37.66-10.54,61.41-10.54c21.52,0,42.97,3.58,64.35,10.74
		c21.38,7.17,40.31,17.08,56.8,29.75l-32.7,44.62c-30.74-23.14-61.62-34.71-92.64-34.71c-10.9,0-20.4,1.38-28.51,4.13
		c-8.11,2.76-14.32,6.55-18.65,11.36c-4.34,4.82-6.5,10.54-6.5,17.15c0,8.82,3.21,15.63,9.64,20.45
		c6.42,4.82,17.19,8.47,32.28,10.95l55.33,9.09c29.35,4.69,51.28,13.84,65.82,27.48c14.53,13.63,21.8,31.61,21.8,53.92
		c0,18.74-5.03,35.05-15.09,48.96c-10.06,13.91-24.38,24.66-42.97,32.23C224.91,1432.73,203.05,1436.52,177.9,1436.52z"
        />
        <path d="M411.39,1432.39v-236.33h-98.93v-52.89h258.23v52.89h-98.51v236.33H411.39z" />
        <path
          d="M729.98,1436.52c-26.55,0-49.54-5.23-68.96-15.7c-19.43-10.47-34.45-25.41-45.07-44.83
		c-10.62-19.42-15.93-42.21-15.93-68.38v-164.44h60.79v164.44c0,14.87,2.86,27.89,8.59,39.04c5.73,11.15,13.83,19.7,24.32,25.62
		c10.48,5.92,22.7,8.88,36.68,8.88c13.97,0,26.13-2.96,36.47-8.88c10.33-5.92,18.37-14.46,24.1-25.62
		c5.72-11.16,8.59-24.17,8.59-39.04v-164.44h60.37v164.44c0,25.89-5.31,48.55-15.93,67.96c-10.62,19.42-25.64,34.43-45.06,45.03
		C779.51,1431.22,756.53,1436.52,729.98,1436.52z"
        />
        <path d="M908.56,1432.39v-289.21h226.79v52.06h-166v68.17h110.25v50.4H969.34v118.58H908.56z" />
        <path d="M1176.43,1432.39v-289.21h226.79v52.06h-166v68.17h110.25v50.4h-110.25v118.58H1176.43z" />
        <path
          d="M1408.36,1432.2c-9.22,0-17.19-3.31-23.89-9.92c-6.71-6.61-10.06-14.46-10.06-23.55c0-9.36,3.35-17.35,10.06-23.96
		c6.71-6.61,14.67-9.91,23.89-9.91c9.22,0,17.19,3.3,23.9,9.91c6.71,6.61,10.06,14.6,10.06,23.96c0,9.09-3.35,16.94-10.06,23.55
		C1425.55,1428.9,1417.58,1432.2,1408.36,1432.2z"
        />
      </g>
    ),
    // viewBox: '0 0 1292 1134',
    viewBox: '0 0 1800 1580',
  },
};
