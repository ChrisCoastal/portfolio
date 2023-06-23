import React from 'react';

import { homeSections } from '@/app/_pageContent/content';
import Section from '@/components/HomePage/Section/Section';
import Paragraph from '@/components/UI/Paragraph/Paragraph';
import StackGrid from '@/components/UI/StackGrid/StackGrid';

const FoundationSection = () => {
  return (
    <Section title={homeSections.buildSection.title}>
      <div className="flex flex-col-reverse place-items-center gap-4 md:flex-col">
        <Paragraph text={homeSections.buildSection.text} />
        <StackGrid />
      </div>
    </Section>
  );
};

export default FoundationSection;
