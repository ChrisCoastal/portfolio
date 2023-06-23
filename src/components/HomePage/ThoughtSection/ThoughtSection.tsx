import React, { FC, forwardRef, LegacyRef, Ref, RefObject } from 'react';

import { homeSections } from '@/app/_pageContent/content';
import Section from '@/components/HomePage/Section/Section';
import SectionTitle from '@/components/HomePage/SectionTitle/SectionTitle';
import SkillsMarquee from '@/components/HomePage/ThoughtSection/SkillsMarquee/SkillsMarquee';

const ThoughtSection = forwardRef(function ThoughtSection(
  _,
  ref: Ref<HTMLElement> | undefined
) {
  return (
    <Section ref={ref}>
      <div className="flex items-center">
        <SkillsMarquee />
      </div>
    </Section>
  );
});

export default ThoughtSection;
