import React from 'react';

import { homeSections } from '@/app/_pageContent/content';
import Section from '@/components/HomePage/Section/Section';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import Paragraph from '@/components/UI/Paragraph/Paragraph';

const AboutSection = () => {
  return (
    <Section
      title={homeSections.aboutSection.title}
      className="relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center justify-center gap-12">
        <Paragraph text={homeSections.aboutSection.text} />
        <ClickableCursor text="click">
          <button className="grid h-8 w-48 items-center">
            <div className="col-start-1 row-start-1 h-8 w-48 bg-stone-800 " />
            <a
              href="/resume/christopher-allen-resume.pdf"
              target="_blank"
              className="static z-10 col-start-1 row-start-1 flex h-full w-full items-center justify-center border border-stone-800/50 bg-stone-100 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 active:-translate-y-0 active:translate-x-0"
            >
              CURRICULUM VITAE
            </a>
          </button>
        </ClickableCursor>
      </div>
    </Section>
  );
};

export default AboutSection;
