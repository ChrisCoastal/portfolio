import React, { FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { contactInfo, mainSections } from '@/app/_pageContent/content';
import DiagonalArrowIcon from '@/components/UI/icons/DiagonalArrowIcon/DiagonalArrowIcon';
import Section from '@/components/UI/Section/Section';
import { cols, rows } from '@/constants/constants';
import useResizeWindow from '@/hooks/useResizeWindow';

import SectionTitle from '../UI/SectionTitle/SectionTitle';

type ReachSectionProps = {
  screenWidth: number;
};
const minDiagonal = 137.5;
const gap = 1;

const ReachSection: FC<ReachSectionProps> = ({ screenWidth }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const numSquares = Math.floor(screenWidth / minDiagonal);
  const diagonal = Math.floor(screenWidth / numSquares);
  const side = +(diagonal / Math.sqrt(2) - gap).toFixed(2);
  const centerShiftX = (diagonal - side) / 2;
  const shiftY = centerShiftX + 7;
  // const { side, diagonal } = calcGridSquareSide();
  const minorGridWidth = 384;
  const minorGridDiagonal = 548;
  const majorGridCols = [
    { cols: 'grid-cols-1', width: 548 },
    { cols: 'grid-cols-2', width: 1096 },
    { cols: 'grid-cols-3', width: 1644 },
    { cols: 'grid-cols-4', width: 2192 },
    { cols: 'grid-cols-5', width: 'w-[2740px]' },
    { cols: 'grid-cols-6', width: 3288 },
    { cols: 'grid-cols-7', width: 3836 },
  ];

  function calcMajorGridCols() {
    const numCol = Math.ceil(screenWidth / minorGridDiagonal);
    return majorGridCols[numCol - 1];
  }

  function calcGridSquareSide() {
    return { side: +side, diagonal };
  }

  function handleMouseEnter() {
    //
  }
  function handleMouseLeave() {
    //
  }

  const minorGrid = (
    <div className="grid h-96 w-96 grid-cols-4 grid-rows-4 gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={uuid()} className={`${''} h-24 w-24 bg-stone-800 `} />
      ))}
    </div>
  );

  // calcGridSquareSize();
  // useEffect(() => {
  // }, [screenWidth]);
  const contact = 'hello@chriscoastal.com'.split('');
  console.log(screenWidth / 137.18, side, diagonal, numSquares);
  return (
    <Section
      title={mainSections.reachSection.title}
      className="relative !mx-0 w-full text-white"
    >
      <SectionTitle
        title={mainSections.reachSection.title}
        className="absolute left-0 z-40 text-green-400"
      />
      {/* <div className="flex justify-center">
        <div className={`flex justify-evenly`}>
          <div
            className={`absolute z-10 grid origin-center -rotate-45 grid-cols-5 grid-rows-5 !gap-1`}
          >
            {Array.from({ length: 16 }).map((_, i) => minorGrid)}
          </div>
        </div>
      </div> */}
      <div>
        <div
          style={{
            transform: `translateX(${centerShiftX - diagonal / 2}px)`,
            display: 'grid',
            // gap: `${gap}px`,
            gridTemplateColumns: `repeat(${numSquares + 1}, ${diagonal}px)`,
          }}
        >
          {Array.from({ length: numSquares + 1 }).map((_, i) => (
            <div
              key={uuid()}
              style={{ height: side, width: side }}
              className={`${cols[i]} origin-center rotate-45 bg-stone-800`}
            />
          ))}
        </div>
        <div
          style={{
            transform: `translateX(${centerShiftX}px) translateY(-${
              centerShiftX + 7
            }px)`,
            display: 'grid',
            // gap: `${gap}px`,
            gridTemplateColumns: `repeat(${numSquares + 1}, ${diagonal}px)`,
          }}
        >
          {Array.from({ length: numSquares + 1 }).map((_, i) => (
            <div
              key={uuid()}
              style={{ height: side, width: side }}
              className={`${cols[i]} origin-center rotate-45 bg-stone-800`}
            />
          ))}
        </div>
        <div
          style={{
            transform: `translateX(${
              centerShiftX - diagonal / 2
            }px) translateY(-${shiftY * 2}px)`,
            display: 'grid',
            // gap: `${gap}px`,
            gridTemplateColumns: `repeat(${numSquares + 1}, ${diagonal}px)`,
          }}
        >
          {Array.from({ length: numSquares + 1 }).map((_, i) => (
            <div
              key={uuid()}
              style={{ height: side, width: side }}
              className={`${cols[i]} origin-center rotate-45 bg-stone-800`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ReachSection;
