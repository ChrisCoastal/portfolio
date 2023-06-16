import React from 'react';

import { mainSections } from '@/app/_pageContent/content';
import StackGrid from '@/components/StackGrid/StackGrid';
import Section from '@/components/UI/Section/Section';

const FoundationSection = () => {
  return (
    <Section title={mainSections.buildSection.title} className="relative">
      <div className="border-ty-12 flex flex-col-reverse items-center justify-center md:flex-col">
        <div className="mx-4 sm:w-96">
          <p className="">
            I like making nice stuff with nice stuff. Employing a core of
            industry standard tools interleaved with a continually expanding
            selection of what is new / trendy / exciting / best-suited, I create
            expressive Front End UI that works to balance elements of design and
            process. supported by a core of industry standard tools. Sewn
            together with creativity and care to content that is engaging and
            accessible.
          </p>
          <p className="">
            Finding balance between beauty and looking forward to
            maintainability and testability. Built around core Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Illo dolor earum accusamus
            ipsa vero exercitationem asperiores natus, reprehenderit architecto
            fugiat rem dolores veniam corrupti iure in voluptatum et, doloribus
            nisi!
          </p>
        </div>
        <span className="">◆</span>
        <StackGrid />
      </div>
    </Section>
  );
};

export default FoundationSection;
