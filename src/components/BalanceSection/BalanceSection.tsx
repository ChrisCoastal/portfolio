import React, { useRef, useState } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { animated, useTransition } from '@react-spring/web';

type Props = {};

const BalanceSection = (props: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const observer = useIntersectionObserver(sectionRef);
  const [elementIndex, setElementIndex] = useState<number | null>(null);

  const [transitions, animateTransition] = useTransition(elementIndex, () => ({
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
  }));

  const animatedContent = transitions((style, item) => (
    <animated.div style={style} className={`fixed bg-red-500/30`}>
      {item}
    </animated.div>
  ));

  observer.viewPortPos === 'intersect' && animateTransition.start();

  const text = `

`;
  return <div ref={sectionRef}>{animatedContent}</div>;
};

export default BalanceSection;
