import React, { FC, MouseEvent, useState } from 'react';
import { createPortal } from 'react-dom';

import ClickIcon from '@/components/UI/icons/ClickIcon/ClickIcon';
import { animated, useSpring } from '@react-spring/web';

type ClickableCursorProps = {
  text?: 'click';
  children: React.ReactNode;
};

const ClickableCursor: FC<ClickableCursorProps> = ({ text, children }) => {
  const [hover, setHover] = useState<boolean | null>(null);
  const [textStyles, textAnimation] = useSpring(() => ({
    from: {
      scale: 0,
    },
    config: {
      tension: 120,
      friction: 12,
      mass: 1,
    },
  }));

  function handleHover(event: MouseEvent) {
    setHover(event.type === 'mouseenter' ? true : false);
    textAnimation.start({
      scale: event.type === 'mouseenter' ? 1.2 : 0,
    });
  }

  return (
    <span onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {hover && document.getElementById('cursor')
        ? createPortal(
            <animated.div
              style={textStyles}
              className={`absolute -left-[50%] -top-[52%] flex h-24 w-24 items-center justify-center overflow-visible`}
            >
              <ClickIcon
                height="180px"
                width="180px"
                color="#4ADE80dd"
                className="origin-center animate-spin-slow mix-blend-overlay"
              />
            </animated.div>,
            document.getElementById('cursor')!
          )
        : null}
      {children}
    </span>
  );
};

export default ClickableCursor;
