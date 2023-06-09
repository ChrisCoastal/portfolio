import React, { FC, useRef } from 'react';

import { logoIndex } from '@/app/_pageContent/content';
import StackLogo from '@/components/UI/icons/StackLogos/StackLogos';
import useIntersectionObserver, {
  ViewPortPos,
} from '@/hooks/useIntersectionObserver';
import { animated, easings, useSprings, useTrail } from '@react-spring/web';

const StackGrid: FC = () => {
  const animatedIndices = [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15];
  const observerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const rotationRefs = useRef<{ [key: number]: number }>({});
  const indexRef = useRef(30);

  useIntersectionObserver({
    elementRef: observerRef,
    options: {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    },
    observeAfterEntry: true,
    callback: animateEntry,
  });
  const [entryStyles, entryAnimation] = useTrail(16, (_) => ({
    from: {
      opacity: 0,
      transform: `translate3d(0, 70px, 0)`,
    },
    config: { delay: 400, duration: 300, easing: easings.easeOutCubic },
  }));
  const [rotationStyles, rotationAnimation] = useSprings(16, (_) => ({
    from: {
      transform: `rotate3d(0, 0, 0, 0deg)`,
    },
    // loop: true,
    config: { delay: 1200, duration: 1400, easing: easings.easeOutCubic },
  }));

  function randomIndex() {
    let index = Math.floor(Math.random() * 24);
    if (index === indexRef.current) index = randomIndex();
    return index;
  }

  function animateEntry(pos: ViewPortPos) {
    if (pos !== 'intersect') return;
    entryAnimation.start((_) => ({
      opacity: 1,
      transform: `translate3d(0, 0, 0)`,
    }));
    if (intervalRef.current) clearInterval(intervalRef.current);
    const interval = setInterval(() => {
      rotationAnimation.start((index: number) => {
        const curRotation = rotationRefs.current[index] ?? 0;
        if (index === indexRef.current) {
          const rotateTo = curRotation + 180;
          rotationRefs.current[index] = rotateTo;
          return {
            transform: `rotate3d(0.5, 0.5, 0, ${rotateTo}deg)`,
          };
        }
      });
      intervalRef.current = interval;
      indexRef.current = randomIndex();
    }, 800);
  }
  return (
    <div
      ref={observerRef}
      className="my-32 grid h-64 w-64 origin-center rotate-45 grid-cols-4 grid-rows-4 gap-1 xs:h-96 xs:w-96"
    >
      {entryStyles.map((styles, i) =>
        animatedIndices.includes(i) ? (
          <animated.div
            key={i}
            style={{
              ...styles,
              ...rotationStyles[i],
              perspective: '800px',
              transformStyle: 'preserve-3d',
            }}
            className="w- grid h-16 w-16 grid-cols-1 grid-rows-1 place-content-center xs:h-24 xs:w-24"
          >
            <StackLogo
              height="72px"
              width="72px"
              logo={logoIndex[i]}
              color="black"
              className="col-start-1 row-start-1 h-16 w-16 self-center justify-self-center xs:h-24 xs:w-24"
            />
            <StackLogo
              height="72px"
              width="72px"
              logo={logoIndex[i + 16]}
              color="black"
              style={{ transform: `rotate3d(0.5, 0.5, 0, 180deg)` }}
              className="col-start-1 row-start-1 h-16 w-16 self-center justify-self-center xs:h-24 xs:w-24"
            />
          </animated.div>
        ) : (
          <div
            key={i}
            className="flex h-16 w-16 scale-[103%] place-content-center border border-stone-800 xs:h-24 xs:w-24"
          >
            <StackLogo
              height="72px"
              width="72px"
              logo={logoIndex[i]}
              color="black"
              className="h-16 w-16 self-center  xs:h-24 xs:w-24"
            />
          </div>
        )
      )}
    </div>
  );
};

export default StackGrid;
