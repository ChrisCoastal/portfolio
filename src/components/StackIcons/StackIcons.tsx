import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';

import useIntersectionObserver, {
  ViewPortPos,
} from '@/hooks/useIntersectionObserver';
import { projectContent } from '@/utils/content';
import { animated, easings, useSprings, useTrail } from '@react-spring/web';

type Props = {};

const StackIcons = (props: Props) => {
  // const projects = Object.values(projectContent);
  const animatedIndices = [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15];
  const observerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const rotationRefs = useRef<{ [key: number]: number }>({});
  const indexRef = useRef(30);
  const observer = useIntersectionObserver({
    elementRef: observerRef,
    options: {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    },
    observeAfterEntry: true,
    callback: animateEntry,
  });
  const [entryStyles, entryAnimation] = useTrail(16, (index) => ({
    from: {
      opacity: 0,
      transform: `translate3d(0, 70px, 0)`,
    },
    config: { duration: 400, easing: easings.easeOutCubic },
  }));
  const [logoStyles, logoAnimation] = useSprings(16, (index) => ({
    from: {
      transform: `rotate3d(0, 0, 0, 0deg)`,
    },
    loop: true,
    config: { delay: 1200, duration: 1400, easing: easings.easeOutCubic },
  }));

  // function renderIcons() {
  //   const icons = [];
  //   for (let i = 0; i < 16; i++) {
  //     const icon = (
  //       <animated.div
  //         key={uuid()}
  //         onClick={() => console.log('clcick')}
  //         styles={animatedIndices.includes(i) ? { ...styles } : ''}
  //         className="h-24 w-24 bg-black"
  //       >
  //         <span className="h-12 w-12 rounded-full bg-white"></span>
  //       </animated.div>
  //     );
  //     icons.push(icon);
  //   }
  //   return icons;
  // }
  // const icons = renderIcons();
  function randomIndex() {
    const index = Math.floor(Math.random() * 24);
    if (index === indexRef.current) randomIndex();
    return index;
  }

  function animateEntry(pos: ViewPortPos) {
    if (pos !== 'intersect') return;
    entryAnimation.start((_) => ({
      opacity: 1,
      transform: `translate3d(0, 0, 0)`,
    }));
    const interval = setInterval(() => {
      logoAnimation.start((index) => {
        console.log(indexRef.current, index);
        const curRotation = rotationRefs.current[index] || 0;
        if (index === indexRef.current) {
          const rotateTo = curRotation + 180;
          rotationRefs.current[index] = rotateTo;
          return {
            transform: `rotate3d(0.5, 0.5, 0, ${rotateTo}deg)`,
          };
        } else {
          return {
            transform: `rotate3d(0, 0, 0, ${curRotation}deg)`,
          };
        }
      });

      indexRef.current = randomIndex();
    }, 800);
  }
  // observer.entry && console.log('entry');

  return (
    <span className="my-48 flex justify-center">
      <div
        ref={observerRef}
        style={{ perspective: '800px' }}
        className="grid h-96 w-96 origin-center rotate-45 grid-cols-4 grid-rows-4 gap-1 bg-red-300 shadow-lg"
      >
        {entryStyles.map((styles, i) =>
          animatedIndices.includes(i) ? (
            <animated.div
              key={i}
              style={{ ...styles, ...logoStyles[i] }}
              className="h-24 w-24 bg-black"
            >
              <span className="h-12 w-12 rounded-full bg-white"></span>
            </animated.div>
          ) : (
            <div key={i} className="h-24 w-24 bg-black">
              <span className="h-12 w-12 rounded-full bg-white"></span>
            </div>
          )
        )}
      </div>
    </span>
  );
};

export default StackIcons;
