import React, { useRef } from 'react';
import Link from 'next/link';

import useResizeWindow from '@/hooks/useResizeWindow';
import useScrollY from '@/hooks/useScrollY';

const ProjectNav = () => {
  const { windowSize, breakPoints } = useResizeWindow();
  const scroll = useScrollY();

  const PROJECT_CONTAINER_WIDTH = 1168;

  // const right =
  //   windowSize.innerWidth > PROJECT_CONTAINER_WIDTH
  //     ? (windowSize.innerWidth - PROJECT_CONTAINER_WIDTH) / 2 + 1
  //     : 10;

  const top = !scroll.isDown || scroll.pos < 20 ? 24 : -48;

  return (
    <div className="relative z-[500] flex justify-end">
      <div className="flex justify-between gap-2">
        <Link href={'/'} className="relative h-8 w-28">
          <div
            style={{ top }}
            className="fixed h-8 w-28 bg-stone-800 transition-all duration-[400ms] ease-in-out"
          />
          <div
            style={{ top }}
            className="fixed flex h-8 w-28 items-center justify-center border border-stone-800/70 bg-white text-center text-sm text-stone-800 transition-all duration-[400ms] ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 active:-translate-y-[1px] active:translate-x-[1px]"
          >
            BACK HOME
          </div>
        </Link>
        {/* <Link
          href={'/'}
          className="relative h-8 w-28 transition-all duration-500 ease-in-out"
        >
          <div
            style={{ top }}
            className="fixed h-8 w-28 bg-stone-800 transition-all duration-500 ease-in-out"
          />
          <div
            style={{ top }}
            className="fixed flex h-8 w-28 -translate-y-1 translate-x-1 items-center justify-center border border-stone-800/70 bg-white text-center text-sm text-stone-800 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 active:-translate-y-[1px] active:translate-x-[1px] sm:translate-x-0 sm:translate-y-0"
          >
            BACK HOME
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default ProjectNav;
