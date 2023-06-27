import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { homeSections } from '@/app/_pageContent/content';
import Section from '@/components/HomePage/Section/Section';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import LinkIcon from '@/components/UI/icons/LinkIcon/LinkIcon';
import Paragraph from '@/components/UI/Paragraph/Paragraph';

type ReachSectionProps = {
  screenWidth: number;
};

const ReachSection: FC<ReachSectionProps> = ({ screenWidth }) => {
  return (
    <Section title={homeSections.reachSection.title} className="relative">
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Paragraph text={homeSections.reachSection.text} />
        <div className="flex h-96 w-96 items-center justify-center">
          <div
            className="relative flex h-[271.5px] w-[271.5px] origin-center rotate-45 
              items-center justify-center bg-stone-800"
          >
            <span className="absolute bottom-1/2 right-1/2 mb-6 mr-6 -rotate-45">
              <ClickableCursor text="hello">
                <Link href="mailto:hello@chriscoastal.com">
                  <LinkIcon
                    height="48"
                    width="48"
                    line="thin"
                    className=" fill-stone-100 "
                  />
                </Link>
              </ClickableCursor>
            </span>
            <span className="-rotate-45">
              <ClickableCursor text="hello">
                <Link
                  href="mailto:hello@chriscoastal.com"
                  className="origin-center text-lg font-thin tracking-widest text-stone-100 md:text-xl"
                >
                  hello@chriscoastal.com
                </Link>
              </ClickableCursor>
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ReachSection;
