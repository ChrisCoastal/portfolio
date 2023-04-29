import React from 'react';

import { vollkorn } from '@/app/fonts';
import StackGallery from '@/components/StackGallery/StackGallery';
import ScrollBlock from '@/components/UI/ScrollBlock/ScrollBlock';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainSections } from '@/utils/content';

type Props = {};

const StackSection = (props: Props) => {
  return (
    <section className="stack">
      <SectionTitle
        text={mainSections.stackSection.title}
        className={`font-vollkorn`}
      />
      <StackGallery />
      <div className="flex justify-center gap-16 rounded-lg p-8">
        <p className="text-white">{mainSections.stackSection.text}</p>
      </div>
    </section>
  );
};

export default StackSection;
