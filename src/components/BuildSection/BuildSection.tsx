import React from 'react';

import { mainSections } from '@/app/_pageContent/content';
import StackGrid from '@/components/StackGrid/StackGrid';
import Section from '@/components/UI/Section/Section';

const FoundationSection = () => {
  return (
    <Section title={mainSections.buildSection.title}>
      <div className="flex flex-col-reverse place-items-center md:flex-col">
        <div className="mx-4 text-justify sm:w-96">
          <p className="">
            I like making nice stuff with nice stuff. Employing a core of
            industry standard tools like React, Typescript, and Tailwind
            interleaved with a continually expanding selection of what is new /
            trendy / exciting / best-suited, I design and develop expressive
            Front End UI that works to balance elements of usabillity,
            creatvity, and aesthetics.
          </p>
        </div>
        {/* <span className="">◆</span> */}
        <StackGrid />
      </div>
    </Section>
  );
};

export default FoundationSection;
