import React from 'react';

import StackGallery from '@/components/StackGallery/StackGallery';
import ScrollBlock from '@/components/UI/ScrollBlock/ScrollBlock';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainSections } from '@/utils/content';

type Props = {};

const StackSection = (props: Props) => {
  return (
    <section>
      <SectionTitle text={mainSections.stackSection.title} />
      <div className="flex justify-center gap-16 rounded-lg p-8">
        <StackGallery />
        <p>{mainSections.stackSection.text}</p>
      </div>
    </section>
  );
};

export default StackSection;
