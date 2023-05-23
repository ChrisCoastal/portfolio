import React, { useState } from 'react';

import DiagonalArrowIcon from '@/components/UI/icons/DiagonalArrowIcon/DiagonalArrowIcon';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { contactInfo, mainSections } from '@/constants/content';

type Props = {};

const ContactSection = (props: Props) => {
  const [mouseOver, setMouseOver] = useState(false);
  function handleMouseEnter() {
    //
  }
  function handleMouseLeave() {
    //
  }

  const contact = 'hello@chriscoastal.com'.split('');

  return (
    <section
      className="border-t border-stone-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SectionTitle text={mainSections.contactSection.title} />
      <div className="flex justify-center gap-2 text-white">
        <p className="w-96 text-black">{mainSections.contactSection.text}</p>
        <div className="flex gap-0.5">
          <div className="h-[198px] w-[198px] bg-black">
            <DiagonalArrowIcon height="180px" width="180px" />
          </div>
          <div className={`grid grid-cols-7 gap-0.5`}>
            {/* {contact.map((char, i) => (
            <p key={i} className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">
              {char}
            </p>
          ))} */}
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">h</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">e</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">l</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">l</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">o</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">@</p>
            <span className="h-12 w-12 pl-2 pt-1 text-lg"></span>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">c</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">h</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">r</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">i</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">s</p>
            <span className="h-12 w-12 pl-2 pt-1 text-lg"></span>
            <span className="h-12 w-12 pl-2 pt-1 text-lg"></span>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">c</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">o</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">a</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">s</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">t</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">a</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">l</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">.</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">c</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">o</p>
            <p className="h-12 w-12 bg-black pl-2 pt-1 text-2xl">m</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
