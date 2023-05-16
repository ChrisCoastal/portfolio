import React from 'react';

import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainSections } from '@/constants/content';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section>
      <SectionTitle text={mainSections.aboutSection.title} />
      <div className="flex justify-center gap-16 rounded-lg p-8"></div>
    </section>
  );
};

export default AboutSection;
