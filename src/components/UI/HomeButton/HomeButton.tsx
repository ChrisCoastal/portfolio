import React, { useRef } from 'react';
import Link from 'next/link';

import useResizeWindow from '@/hooks/useResizeWindow';
import useScrollY from '@/hooks/useScrollY';

const ProjectNav = () => {
  const { windowSize, breakPoints } = useResizeWindow();
  const scroll = useScrollY();

  const PROJECT_CONTAINER_WIDTH = 1168;

  const right =
    windowSize.innerWidth > PROJECT_CONTAINER_WIDTH
      ? (windowSize.innerWidth - PROJECT_CONTAINER_WIDTH) / 2 + 1
      : 10;

  const top = scroll.isDown ? -32 : 32;

  return (
    <Link
      href={'/'}
      style={{ right, top }}
      className="fixed z-[500] shadow-sm transition-all duration-500 ease-in-out hover:shadow-md"
    >
      <div className="absolute left-0 top-0 h-8 w-28 bg-stone-800" />
      <div className="flex h-8 w-28 -translate-y-1 translate-x-1 items-center justify-center border border-stone-800/50 bg-white text-center text-sm text-stone-800/70 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 active:-translate-y-[1px] active:translate-x-[1px] sm:translate-x-0 sm:translate-y-0">
        <p>BACK HOME</p>
      </div>
    </Link>
  );
};

export default ProjectNav;
