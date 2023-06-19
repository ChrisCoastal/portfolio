import React from 'react';
import Image from 'next/image';

import { mainSections } from '@/app/_pageContent/content';
import Section from '@/components/UI/Section/Section';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <Section
      title={mainSections.aboutSection.title}
      className="relative overflow-hidden"
    >
      <div className="flex justify-center gap-16">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="relative z-10 flex flex-col gap-4 text-justify sm:w-80">
            <span>
              I have a breadth of experience in professional design, arts, and
              managerial/ownership roles in hospitality sectors. What it adds up
              to is someone who not only knows their stuff, but also how that
              stuff fits into a greater whole.
            </span>
            <span>
              Following five years of building and fostering my own business, I
              made the decision to return to programming and web design,
              spending 2022 / 2023 updating my front end design and development
              skillset. These skills buld upon previous freelance experience and
              being privileged to work as the media Coordinator for the
              internationally recognized design studio molo in Vancouver.
            </span>
            <span>
              Design and programming have been either the focus of or the
              suppliment to my career for the past 10 years. Regardless of the
              work I put my focus to, I have found that the core to my approach
              is accute attention to detail, dedication to excellence, and
              supporting clients and colleagues to do the same.
            </span>
            <button className="relative mt-8 flex h-8 w-48 flex-1 items-center self-center">
              <div className="absolute left-0 top-0 h-8 w-48 bg-stone-800" />
              <div className="static z-10 w-full border border-stone-800 bg-stone-100 transition-all duration-700 ease-in-out hover:-translate-y-1 hover:translate-x-1">
                CURRICULUM VITAE
              </div>
            </button>
          </div>
          {/* <div> */}
          {/* <span className="relative overflow-hidden mix-blend-overlay"> */}
          {/* <span className="absolute left-1/2 top-1/3 z-20 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-teal-400 mix-blend-screen"></span> */}
          {/* <div className="absolute bottom-1/4 right-0 z-20 h-48 w-48 rotate-45 bg-black sm:h-60 sm:w-60"></div> */}
          {/* <div className="object-fit h-72 w-screen bg-[url(/assets/about/chris-bw.jpg)] bg-blend-multiply"></div> */}
          {/* <Image
            src="/assets/about/chris-bw.jpg"
            alt="me"
            width={320}
            height={480}
            className="mix-blend-overlay"
          /> */}
          {/* </span> */}
          {/* </div> */}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
