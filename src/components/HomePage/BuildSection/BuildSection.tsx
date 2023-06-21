import React from 'react';

import { mainSections } from '@/app/_pageContent/content';
import Section from '@/components/HomePage/Section/Section';
import StackGrid from '@/components/UI/StackGrid/StackGrid';

const FoundationSection = () => {
  return (
    <Section title={mainSections.buildSection.title}>
      <div className="flex flex-col-reverse place-items-center gap-4 md:flex-col">
        <div className="text-justify sm:w-96">
          <p>
            I like making nice stuff with nice stuff. Employing a core of
            industry standard tools like React, Typescript, and Tailwind
            interleaved with a continually expanding selection of what is new /
            trendy / exciting / best-suited, I design and develop expressive
            Front End UI that works to balance elements of usabillity,
            creatvity, and aesthetics.
          </p>
        </div>
        <StackGrid />
      </div>
    </Section>
  );
};

export default FoundationSection;
