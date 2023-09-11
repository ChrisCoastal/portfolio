import React, { CSSProperties, FC, useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';

type CodeTagIconProps = {
  height: string;
  width: string;
  text?: string;
  color?: string;
  open: boolean;
  side: string;
  className?: string;
};

const CodeTagIcon: FC<CodeTagIconProps> = ({
  height,
  width,
  open,
  text = 'code',
  color = '#292524',
  className,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [iconStyles, animateIcon] = useSpring(() => ({
    from: {
      x: 12,
    },
    config: {
      tension: 280,
      friction: 30,
      mass: 0.2,
    },
  }));

  open &&
    animateIcon.start({
      x: open ? 180 : -180,
    });

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 48"
      fill={color}
      className={`svg ${className}`}
      ref={svgRef}
    >
      <polygon points="19.8,10.62 17.09,7.91 1,24 17.09,40.09 19.8,37.38 6.42,24 " />
    </animated.svg>
  );
};

export default CodeTagIcon;
