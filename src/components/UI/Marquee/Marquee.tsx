import React from 'react';

import { projectContent } from '@/constants/content';
import { animated, easings, useSpring, useTrail } from '@react-spring/web';
type Props = {};

const Marquee = (props: Props) => {
  return (
    <>
      <div className="relative h-12">
        <div>
          <h1 className="absolute animate-marquee-lr text-4xl font-extrabold text-black">
            ◆ REVERSE SCROLL ◆
          </h1>
        </div>
      </div>
      <div className="relative h-12">
        <div>
          <h1
            style={{ animationDelay: '-25000ms' }}
            className="absolute animate-marquee-rl whitespace-nowrap text-4xl font-extrabold text-black"
          >
            ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH◆ THOUGHTFUL APPROACH◆
            THOUGHTFUL APPROACH◆ THOUGHTFUL APPROACH END
          </h1>
          <h1 className="absolute animate-marquee-rl whitespace-nowrap text-4xl font-extrabold text-black">
            ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH◆ THOUGHTFUL APPROACH◆
            THOUGHTFUL APPROACH◆ THOUGHTFUL APPROACH END
          </h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
