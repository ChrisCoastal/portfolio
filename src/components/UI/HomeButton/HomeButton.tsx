import React, { useRef } from 'react';
import Link from 'next/link';

import useScrollY from '@/hooks/useScrollY';

const ProjectNav = () => {
  const scroll = useScrollY();

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
      </div>
    </div>
  );
};

export default ProjectNav;
