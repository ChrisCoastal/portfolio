import React, { FC } from 'react';

import { marqueeText } from '@/app/_pageContent/content';
import { mainSections } from '@/app/_pageContent/content';
import Marquee from '@/components/UI/Marquee/Marquee';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';

type SkillsMarqueeProps = {
  className?: string;
};

const SkillsMarquee: FC<SkillsMarqueeProps> = ({ className }) => {
  return (
    <div
      // className={`my-24 flex flex-col gap-14 bg-stone-800 py-56 ${className}`}
      className={`my-24 flex flex-col gap-14 py-56`}
    >
      <Marquee className="text-stone-800" text={marqueeText.rl} reverse />
      <Marquee className="text-stone-800" text={marqueeText.lr} />
    </div>
  );
};

export default SkillsMarquee;
