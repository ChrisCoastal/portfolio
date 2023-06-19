import React, { FC, useRef } from 'react';

import type { ViewPortPos } from '@/hooks/useIntersectionObserver';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type IntersectProps = {
  yPos: number;
  animate: (pos: ViewPortPos, from?: ViewPortPos) => void;
};

const Intersect: FC<IntersectProps> = ({ animate, yPos }) => {
  const animateRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    elementRef: animateRef,
    options: {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
    observeAfterEntry: true,
    callback: animate,
  });

  return (
    <div
      ref={animateRef}
      className={`pointer-events-none absolute z-40 h-40 w-full top-[${yPos}px]`}
    ></div>
  );
};

export default Intersect;
