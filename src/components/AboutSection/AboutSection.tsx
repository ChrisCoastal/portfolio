import React from 'react';

import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainPage } from '@/utils/textContent';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div>
      <SectionTitle text={mainPage.stackSection.title} />
      <div className="flex justify-center gap-16 rounded-lg p-8"></div>
    </div>
  );
};

export default AboutSection;
