import React, { FC } from 'react';

import HeroText from '@/components/Hero/HeroText';
import Citation, { CitationProps } from '@/components/UI/Citation/Citation';
import { heroSvgRatio } from '@/constants/constants';

type HeroSectionProps = {
  orientation: 'landscape' | 'portrait';
};

const HeroSection: FC<HeroSectionProps> = ({ orientation }) => {
  const width = 90;
  const height = width * heroSvgRatio[orientation];
  const citations: Omit<CitationProps, 'orientation'>[] = [
    {
      superscript: '1',
      pos: { top: 5, left: 9 },
      direction: 't',
      cite: {
        text: `CHRISTOPHER ALLEN`,
        offset: 'top-[6vw] -left-[8vw]',
      },
    },
    {
      superscript: '2',
      pos: { top: 29, left: 120 },
      direction: 't',
      cite: {
        text: `DESIGNING &
        DEVELOPING`,
        offset: 'top-[6vw] -left-[8vw]',
      },
    },

    {
      superscript: '3',
      pos: { top: 80, left: 72 },
      direction: 'b',
      cite: {
        text: `FRONT
      END`,
        offset: '-bottom-[6vw] -left-[8vw]',
      },
    },
  ];

  return (
    <div className="hero-spacer flex h-screen items-center justify-center">
      <div className={`relative w-[${width}vw] h-[${height}vw] bg-blue-300/30`}>
        {citations.map((citation) => (
          <Citation
            key={citation.superscript}
            orientation={orientation}
            superscript={citation.superscript}
            pos={citation.pos}
            direction={citation.direction}
            cite={citation.cite}
          />
        ))}
        <HeroText width={width} className="" orientation={orientation} />
      </div>
    </div>
  );
};

export default HeroSection;
