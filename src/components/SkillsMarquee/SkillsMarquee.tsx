import React from 'react';

import { marqueeText } from '@/app/_pageContent/content';
import Marquee from '@/components/UI/Marquee/Marquee';

const SkillsMarquee = () => {
  return (
    <div>
      <Marquee text={marqueeText.rl} reverse />
      <Marquee text={marqueeText.lr} />
    </div>
  );
};

export default SkillsMarquee;
