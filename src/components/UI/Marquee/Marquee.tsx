import React, { FC } from 'react';

type MarqueeProps = {
  text: string[];
  reverse?: boolean;
  animationDelay?: number;
  className?: string;
};

const Marquee: FC<MarqueeProps> = ({
  text,
  reverse = false,
  animationDelay = -40000, // 1/2 of the animate-marquee-* duration
  className,
}) => {
  const marqueeScroll = reverse ? 'animate-marquee-rl' : 'animate-marquee-lr';
  const scrollText = text
    .reduce((accStr, curStr): string => (accStr += ` ◆ ` + curStr), '')
    .toUpperCase();

  return (
    <>
      <div className="relative translate-y-40 -rotate-45 md:translate-y-0 md:rotate-0">
        <h3
          className={`${className} ${marqueeScroll} absolute whitespace-nowrap text-6xl font-extrabold sm:text-7xl lg:text-[6rem]`}
        >
          {scrollText}
        </h3>
        <h3
          style={{ animationDelay: `${animationDelay}ms` }}
          className={`${className} ${marqueeScroll} absolute whitespace-nowrap text-6xl font-extrabold sm:text-7xl lg:text-[6rem]`}
        >
          {scrollText}
        </h3>
      </div>
    </>
  );
};

export default Marquee;
