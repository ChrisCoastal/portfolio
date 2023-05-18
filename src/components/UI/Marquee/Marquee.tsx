import React, { FC } from 'react';

import { projectContent } from '@/constants/content';
import { animated, easings, useSpring, useTrail } from '@react-spring/web';
type MarqueeProps = {
  text: string;
  reverse?: boolean;
  animationDelay?: number;
  className?: string;
};

const Marquee: FC<MarqueeProps> = ({
  text,
  reverse = false,
  animationDelay = -40000,
  className,
}) => {
  const marqueeScroll = reverse ? 'animate-marquee-rl' : 'animate-marquee-lr';

  return (
    <>
      <div className="relative h-12">
        <div>
          <h3
            style={{ animationDelay: `${animationDelay}ms` }}
            className={`${className} ${marqueeScroll} absolute whitespace-nowrap text-4xl font-extrabold text-black`}
          >
            {text}
          </h3>
          <h3
            className={`${className} ${marqueeScroll} absolute whitespace-nowrap text-4xl font-extrabold text-black`}
          >
            {text}
          </h3>
        </div>
      </div>
      {/* <div className="relative h-12">
        <div>
          <h3
            style={{ animationDelay: '-25000ms' }}
            className="absolute animate-marquee-rl whitespace-nowrap text-4xl font-extrabold text-black"
          >
            ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH◆ THOUGHTFUL APPROACH◆
            THOUGHTFUL APPROACH◆ THOUGHTFUL APPROACH END
          </h3>
          <h3 className="absolute animate-marquee-rl whitespace-nowrap text-4xl font-extrabold text-black">
            ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH◆ THOUGHTFUL APPROACH◆
            THOUGHTFUL APPROACH◆ THOUGHTFUL APPROACH END
          </h3>
        </div>
      </div> */}
    </>
  );
};

export default Marquee;
