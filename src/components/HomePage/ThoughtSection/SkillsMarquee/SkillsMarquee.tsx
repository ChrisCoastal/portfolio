import React, { FC } from 'react';

import { marqueeText } from '@/app/_pageContent/content';
import Marquee from '@/components/UI/Marquee/Marquee';

type SkillsMarqueeProps = {
  className?: string;
};

const SkillsMarquee: FC<SkillsMarqueeProps> = ({ className }) => {
  return (
    <div
      className={`${className} mb-44 mt-60 flex flex-col gap-24 md:mb-48 md:mt-24`}
    >
      <Marquee className="text-stone-800" text={marqueeText.rl} reverse />
      <Marquee className="text-stone-800" text={marqueeText.lr} />
    </div>
  );
};

export default SkillsMarquee;
