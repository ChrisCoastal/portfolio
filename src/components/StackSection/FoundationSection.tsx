import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';

import { logoIndex, mainSections } from '@/app/_pageContent/content';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
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
    <section className="relative">
      <div className="mb-16 flex items-center">
        {/* <span className="h-10 w-10 origin-center -translate-x-1/2 rotate-45 bg-rose-200"></span> */}
        <SectionTitle
          className="self-center"
          text={mainSections.stackSection.title}
        />
      </div>
      <div className="border-ty-12 flex flex-col-reverse items-center justify-center md:flex-col">
        <div className="mx-4 sm:w-96">
          <p className="">
            I like to make nice stuff with nice stuff. Employing a core of
            industry standard tools interleaved with an ever expanding selection
            of what is new || trendy || exciting || best-suited, I build
            expressive Front End UI that works to balance elements of design and
            process. supported by a core of industry standard tools. Sewn
            together with creativity and care to content that is engaging and
            accessible.
          </p>
          <p className="">
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
          className="m-24 grid h-64 w-64 origin-center rotate-45 grid-cols-4 grid-rows-4 gap-1 xs:h-96 xs:w-96"
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
                className="relative flex h-[4rem] w-[4rem] place-content-center bg-stone-800 xs:h-24 xs:w-24"
              >
                <div
                  style={{ backfaceVisibility: 'hidden' }}
                  className="absolute flex h-[4rem] w-[4rem] place-content-center xs:h-24 xs:w-24 "
                >
                  <StackLogo
                    height="72px"
                    width="72px"
                    logo={logoIndex[i]}
                    className="h-12 w-12 -rotate-45 self-center xs:h-20 xs:w-20"
                  />
                </div>
                <div
                  style={{
                    transform: `rotate3d(0.5, 0.5, 0, 180deg)`,
                    backfaceVisibility: 'hidden',
                  }}
                  className="absolute flex h-[4rem] w-[4rem] place-content-center xs:h-24 xs:w-24"
                >
                  <StackLogo
                    height="72px"
                    width="72px"
                    logo={logoIndex[i + 16]}
                    className="h-12 w-12 -rotate-45 self-center xs:h-20 xs:w-20"
                  />
                </div>
              </animated.div>
            ) : (
              <div
                // style={{
                //   clipPath: logoPaths['react'],
                // }}
                key={i}
                className="flex h-[4rem] w-[4rem] scale-[102%] place-content-center border border-stone-800 xs:h-24 xs:w-24"
              >
                <StackLogo
                  height="72px"
                  width="72px"
                  logo={logoIndex[i]}
                  color="black"
                  className="h-12 w-12 -rotate-45 self-center xs:h-20 xs:w-20"
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
