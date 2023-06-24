import React, { FC, MouseEvent, useState } from 'react';
import { createPortal } from 'react-dom';

import type { CursorTextOptions } from '@/@types/types';
import CursorText from '@/components/UI/Cursor/CursorText';
import { animated, useSpring } from '@react-spring/web';

type ClickableCursorProps = {
  text: CursorTextOptions;
  children: React.ReactNode;
};

const ClickableCursor: FC<ClickableCursorProps> = ({ text, children }) => {
  const [portalContainer, setPortalContainer] =
    useState<HTMLSpanElement | null>(null);
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
    if (!portalContainer)
      setPortalContainer(document.getElementById('cursor')! as HTMLSpanElement);
    textAnimation.start({
      scale: event.type === 'mouseenter' ? 1.2 : 0,
    });
  }

  return (
    <span onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {portalContainer
        ? createPortal(
            <animated.div
              style={textStyles}
              className={`absolute -left-[50%] -top-[52%] flex h-24 w-24 items-center justify-center overflow-visible`}
            >
              <CursorText
                height="180px"
                width="180px"
                text={text}
                className="origin-center animate-spin-slow"
              />
            </animated.div>,
            portalContainer
          )
        : null}
      {children}
    </span>
  );
};

export default ClickableCursor;
