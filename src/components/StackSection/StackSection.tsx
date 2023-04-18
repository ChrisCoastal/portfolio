import React from 'react';

import StackGallery from '@/components/StackGallery/StackGallery';
import ScrollBlock from '@/components/UI/ScrollBlock/ScrollBlock';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainPage } from '@/utils/textContent';

type Props = {};

const StackSection = (props: Props) => {
  return (
    <div>
      <SectionTitle text={mainPage.stackSection.title} />
      <div className="flex justify-center gap-16 rounded-lg p-8">
        <StackGallery />
        <p>{mainPage.stackSection.text}</p>
      </div>
    </div>
  );
};

export default StackSection;
