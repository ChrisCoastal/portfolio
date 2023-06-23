import React, { FC, useRef } from 'react';

import type { ViewPortPos } from '@/hooks/useIntersectionObserver';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type HeroIntersectsProps = {
  animateText: (pos: ViewPortPos, from?: ViewPortPos) => void;
};

const HeroIntersects: FC<HeroIntersectsProps> = ({ animateText }) => {
  const animateRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    elementRef: animateRef,
    options: {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
    observeAfterEntry: true,
    callback: animateText,
  });

  return (
    <div
      ref={animateRef}
      className={`pointer-events-none absolute z-40 h-40 w-full`}
    ></div>
  );
};

export default HeroIntersects;
