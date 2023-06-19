import React, { FC, useEffect, useState } from 'react';

import { mainSections } from '@/app/_pageContent/content';

import Section from '@/components/UI/Section/Section';

import Paragraph from '@/components/UI/Paragraph/Paragraph';

type ReachSectionProps = {
  screenWidth: number;
};

const ReachSection: FC<ReachSectionProps> = ({ screenWidth }) => {
  return (
    <Section title={mainSections.reachSection.title} className="relative">
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Paragraph text={mainSections.reachSection.text} />
        <div className="flex h-96 w-96 items-center justify-center">
          <div
            className="flex h-[271.5px] w-[271.5px] origin-center rotate-45 
          items-center justify-center bg-stone-800"
          >
            <span className="origin-center -rotate-45 text-lg font-light tracking-widest text-stone-100 md:text-xl">
              hello@chriscoastal.com
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ReachSection;
