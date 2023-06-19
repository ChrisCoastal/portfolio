import React, { FC, forwardRef, LegacyRef, Ref, RefObject } from 'react';

import { mainSections } from '@/app/_pageContent/content';
import SkillsMarquee from '@/components/SkillsMarquee/SkillsMarquee';
import Section from '@/components/UI/Section/Section';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';

const ThoughtSection = forwardRef(function ThoughtSection(
  _,
  ref: Ref<HTMLElement> | undefined
) {
  return (
    <Section ref={ref}>
      <div className="flex items-center">
        {/* <div className="absolute -left-1/2 h-[60vw] w-[60vw] rotate-45 bg-stone-800" /> */}
        {/* <div className="border border-stone-800 bg-stone-100"> */}
        {/* <SectionTitle
              className="-rotate-45"
              title={mainSections.thoughtSection.title}
            /> */}
        {/* </div> */}

        <SkillsMarquee />
      </div>
    </Section>
  );
});

export default ThoughtSection;
