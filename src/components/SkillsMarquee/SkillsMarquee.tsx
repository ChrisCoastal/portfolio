import React from 'react';

import Marquee from '@/components/UI/Marquee/Marquee';
import { marqueeText } from '@/constants/content';

const SkillsMarquee = () => {
  return (
    <div>
      <Marquee text={marqueeText.rl} reverse />
      <Marquee text={marqueeText.lr} />
    </div>
  );
};

export default SkillsMarquee;
