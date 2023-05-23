import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';

import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { logoIndex, mainSections, projectContent } from '@/constants/content';
import useIntersectionObserver, {
  ViewPortPos,
} from '@/hooks/useIntersectionObserver';
import { animated, easings, useSprings, useTrail } from '@react-spring/web';

import StackLogo from '../UI/icons/StackLogos/StackLogos';

type Props = {};

const FoundationSection = (props: Props) => {
  const animatedIndices = [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15];
  const observerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const rotationRefs = useRef<{ [key: number]: number }>({});
  // const backRotationRefs = useRef<{ [key: number]: number }>({});
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
  const [entryStyles, entryAnimation] = useTrail(16, (index) => ({
    from: {
      opacity: 0,
      transform: `translate3d(0, 70px, 0)`,
    },
    config: { delay: 400, duration: 300, easing: easings.easeOutCubic },
  }));
  const [rotationStyles, rotationAnimation] = useSprings(16, (index) => ({
    from: {
      transform: `rotate3d(0, 0, 0, 0deg)`,
    },
    loop: true,
    config: { delay: 1200, duration: 1400, easing: easings.easeOutCubic },
  }));
  // const [backRotationStyles, backRotationAnimation] = useSprings(
  //   16,
  //   (index) => ({
  //     from: {
  //       transform: `rotate3d(0, 0, 0, 180deg)`,
  //     },
  //     loop: true,
  //     config: { delay: 1200, duration: 1400, easing: easings.easeOutCubic },
  //   })
  // );

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
      rotationAnimation.start((index) => {
        const curRotation = rotationRefs.current[index] || 0;
        if (index === indexRef.current) {
          const rotateTo = curRotation + 180;
          rotationRefs.current[index] = rotateTo;
          return {
            transform: `rotate3d(0.5, 0.5, 0, ${rotateTo}deg)`,
          };
        }
        // else {
        //   return {
        //     transform: `rotate3d(0, 0, 0, ${curRotation}deg)`,
        //   };
        // }
      });
      intervalRef.current = interval;
      indexRef.current = randomIndex();
    }, 800);
  }

  return (
    <section className="relative border-t border-stone-500">
      <SectionTitle text={mainSections.stackSection.title} />
      <div className="border-tpy-12 flex flex-col items-center justify-center">
        <div>
          <p className="w-96 text-black">
            I like to make nice stuff with nice stuff. I write Front End UI
            supported by a core of industry standard tools. Sewn together with
            creativity and care to content that is engaging and accessible
            through engaging and expressive UI.
          </p>
          <p className="w-96 text-black">
            Finding balance between beauty and looking forward to
            maintainability and testability. Built around core Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Illo dolor earum accusamus
            ipsa vero exercitationem asperiores natus, reprehenderit architecto
            fugiat rem dolores veniam corrupti iure in voluptatum et, doloribus
            nisi!
          </p>
        </div>
        <span className="">◆</span>
        <div
          ref={observerRef}
          style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
          className="m-24 grid h-96 w-96 origin-center rotate-45 grid-cols-4 grid-rows-4 gap-1"
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
                className="relative flex h-24 w-24 place-content-center bg-black"
              >
                <div
                  style={{ backfaceVisibility: 'hidden' }}
                  className="absolute flex h-24 w-24 place-content-center "
                >
                  <StackLogo
                    height="72px"
                    width="72px"
                    logo={logoIndex[i]}
                    className="-rotate-45 self-center"
                  />
                </div>
                <div
                  style={{
                    transform: `rotate3d(0.5, 0.5, 0, 180deg)`,
                    backfaceVisibility: 'hidden',
                  }}
                  className="absolute flex h-24 w-24 place-content-center"
                >
                  <StackLogo
                    height="72px"
                    width="72px"
                    logo={logoIndex[i + 16]}
                    className="-rotate-45 self-center"
                  />
                </div>
              </animated.div>
            ) : (
              <div
                // style={{
                //   clipPath: logoPaths['react'],
                // }}
                key={i}
                className="flex h-24 w-24 place-content-center bg-pink-500"
              >
                <StackLogo
                  height="72px"
                  width="72px"
                  logo={logoIndex[i]}
                  className="-rotate-45 self-center"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
