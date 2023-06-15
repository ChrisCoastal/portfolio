import React, { FC, useRef } from 'react';

import CitationIcon from '@/components/UI/Citation/CitationIcon';
import CitationText from '@/components/UI/Citation/CitationText';
import { heroSvgRatio, svgScale } from '@/constants/constants';
import { animated, useSpring } from '@react-spring/web';

export type CitationProps = {
  pos: {
    top: number;
    left: number;
  };
  orientation: 'landscape' | 'portrait';
  superscript: string;
  cite: { text: string; offset: string };
  direction: 't' | 'b' | 'l' | 'r';
  className?: string;
};

const Citation: FC<CitationProps> = ({
  pos,
  orientation,
  superscript,
  cite,
  direction,
  className,
}) => {
  const timerRef = useRef<NodeJS.Timer | null>(null);
  const open = useRef<boolean>(false);
  const top = pos.top * heroSvgRatio[orientation] * svgScale[orientation].y;
  const left = pos.left * heroSvgRatio[orientation] * svgScale[orientation].x;
  const rotation = {
    t: 'rotate-[315deg]',
    r: 'rotate-[45deg]',
    b: 'rotate-[135deg]',
    l: 'rotate-[225deg]',
  };
  const textOffset = {
    t: '-top-[6vw] -left-[8vw]',
    r: 'right-[2vw]',
    b: '-bottom-[2vw] left-[2vw]',
    l: 'left-[2vw]',
  };

  function handleClick() {
    timerRef.current && clearTimeout(timerRef.current);
    animation();
    timerRef.current = setTimeout(() => {
      open.current && animation();
      timerRef.current = null;
    }, 2400);
  }

  function animation() {
    const isOpen = !open.current;
    animate.start({
      x: isOpen ? 180 : 0,
      y: isOpen ? 8 : 0,
      opacity: isOpen ? 0 : 1,
      textOpacity: isOpen ? 1 : 0,
      textX: isOpen ? 0 : 90,
    });
    open.current = isOpen;
  }

  const [styles, animate] = useSpring(() => ({
    from: { x: 0, opacity: 1, y: 0, textOpacity: 0, textX: 90 },
    config: {
      friction: 40,
      tension: 300,
      mass: 1,
    },
  }));

  const translate = orientation === 'landscape' ? 0.06 : 0.03;
  const iconSize = orientation === 'landscape' ? 1.8 : 3;
  return (
    <>
      <div
        onClick={handleClick}
        tabIndex={0}
        style={{ top: `${top}vw`, left: `${left}vw` }}
        className={`${className} absolute h-[4.8vw] w-[4.8vw] md:h-[2.5vw] md:w-[2.5vw]`}
      >
        <div className="relative bg-pink-300">
          <div
            style={{ perspective: '800px' }}
            className={`absolute h-[4.8vw] w-[4.8vw] md:h-[2.5vw] md:w-[2.5vw] ${rotation[direction]} border-b border-l border-stone-800 md:border-b-2 md:border-l-2`}
          >
            <animated.div
              style={{
                transform: styles.x.to(
                  (x) =>
                    `rotate3d(0.5, 0.5, 0, ${x}deg) translate3d(-${
                      x * translate
                    }px, ${x * translate}px, 0)`
                ),
              }}
              className={`h-[4.8vw] w-[4.8vw] border-r border-t border-stone-800 md:h-[2.5vw] md:w-[2.5vw] md:border-r-2 md:border-t-2`}
            ></animated.div>
          </div>

          <animated.div
            style={{ opacity: styles.opacity }}
            className={`absolute flex h-[4.8vw] w-[4.8vw] items-center justify-center md:h-[2.5vw] md:w-[2.5vw]`}
          >
            <CitationIcon
              height={iconSize}
              width={iconSize}
              number={superscript}
            />
          </animated.div>
          <animated.div
            style={{
              opacity: styles.textOpacity,
              transform: styles.textX.to(
                (x) => `rotate3d(-0.5, 0, 0, ${x}deg)`
              ),
            }}
          >
            <p
              className={`absolute whitespace-pre text-5xl font-bold ${cite.offset}`}
            >
              {cite.text}
            </p>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Citation;
