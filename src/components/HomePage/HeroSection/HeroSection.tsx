import React, { FC } from 'react';

import HeroText from '@/components/HomePage/HeroSection/HeroText/HeroText';
import Citation, { CitationProps } from '@/components/UI/Citation/Citation';
import Section from '@/components/UI/Section/Section';
import { heroTextRatio, heroTextWidth } from '@/constants/constants';

type HeroSectionProps = {
  orientation: 'landscape' | 'portrait';
};

const HeroSection: FC<HeroSectionProps> = ({ orientation }) => {
  const width = heroTextWidth;
  const height = width * heroTextRatio[orientation];

  return (
    <Section className="flex h-screen items-center justify-center">
      <div className={`relative w-[${width}vw] h-[${height}vw]`}>
        <HeroText
          width={width}
          className="mix-blend-difference"
          orientation={orientation}
        />
      </div>
    </Section>
  );
};

export default HeroSection;
