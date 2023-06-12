import React, { FC } from 'react';

import { marqueeText } from '@/app/_pageContent/content';
import Marquee from '@/components/UI/Marquee/Marquee';

type SkillsMarqueeProps = {
  className?: string;
};

const SkillsMarquee: FC<SkillsMarqueeProps> = ({ className }) => {
  return (
    <div
      // className={`my-24 flex flex-col gap-14 bg-stone-800 py-56 ${className}`}
      className={`my-24 flex flex-col gap-14 py-56 backdrop-blur-sm `}
    >
      <Marquee className="text-white" text={marqueeText.rl} reverse />
      <Marquee className="text-white" text={marqueeText.lr} />
    </div>
  );
};

export default SkillsMarquee;
