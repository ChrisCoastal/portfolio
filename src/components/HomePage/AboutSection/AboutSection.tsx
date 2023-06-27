import React from 'react';
import Image from 'next/image';

import { homeSections } from '@/app/_pageContent/content';
import Section from '@/components/HomePage/Section/Section';
import SectionTitle from '@/components/HomePage/SectionTitle/SectionTitle';
import Paragraph from '@/components/UI/Paragraph/Paragraph';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <Section
      title={homeSections.aboutSection.title}
      className="relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Paragraph text={homeSections.aboutSection.text} />
        <button className="relative mt-8 flex h-8 w-48 flex-1 items-center self-center">
          <div className="absolute left-0 top-0 h-8 w-48 bg-stone-800" />
          <div className="static z-10 w-full border border-stone-800/50 bg-stone-100 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 active:-translate-y-0 active:translate-x-0">
            CURRICULUM VITAE
          </div>
        </button>
      </div>
    </Section>
  );
};

export default AboutSection;
