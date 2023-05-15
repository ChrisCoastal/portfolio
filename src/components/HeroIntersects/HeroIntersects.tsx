import React, { FC, useRef } from 'react';

import type { ViewPortPos } from '@/hooks/useIntersectionObserver';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { mainSections } from '@/utils/content';

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

  const heroText = mainSections.heroSection.title;
  const heroIntersects = heroText.map((_, i) => (
    <div
      key={i}
      ref={animateRef}
      className={`absolute z-40 h-48 w-full top-[${
        i * 100 + 'vh'
      }] bg-red-500/20`}
    ></div>
  ));

  return <>{heroIntersects}</>;
};

export default HeroIntersects;
