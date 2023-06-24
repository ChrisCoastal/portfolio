import React, { FC } from 'react';
import Link from 'next/link';

import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';

type ProjectBottomNavProps = {
  next: { link: string; title: string };
  prev: { link: string; title: string };
};

const ProjectBottomNav: FC<ProjectBottomNavProps> = ({ prev, next }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <ClickableCursor text="prev">
          <Link
            href={`/projects/${prev.link}`}
            className={`grid h-12 w-12 -rotate-45 grid-cols-3 grid-rows-3 gap-0.5 sm:h-16 sm:w-16`}
          >
            <span className="row-start-1 bg-stone-800"></span>
            <span className="row-start-1 bg-stone-800"></span>
            <span className="row-start-1 bg-stone-800"></span>
            <span className="row-start-2 bg-stone-800"></span>
            <span className="row-start-3 bg-stone-800"></span>
          </Link>
        </ClickableCursor>
        <ClickableCursor text="prev">
          <Link
            href={`/projects/${prev.link}`}
            className="-translate-x-4 text-sm sm:text-base"
          >
            {prev.title}
          </Link>
        </ClickableCursor>
      </div>

      <div className="flex items-center">
        <ClickableCursor text="next">
          <Link
            href={`/projects/${next.link}`}
            className="translate-x-4 text-sm sm:text-base"
          >
            {next.title}
          </Link>
        </ClickableCursor>
        <ClickableCursor text="next">
          <Link
            href={`/projects/${next.link}`}
            className={`grid h-12 w-12 rotate-45 grid-cols-3 grid-rows-3 gap-0.5 sm:h-16 sm:w-16`}
          >
            <span className="row-start-1 bg-stone-800"></span>
            <span className="row-start-1 bg-stone-800"></span>
            <span className="row-start-1 bg-stone-800"></span>
            <span className="col-start-3 bg-stone-800"></span>
            <span className="col-start-3 bg-stone-800"></span>
          </Link>
        </ClickableCursor>
      </div>
    </div>
  );
};

export default ProjectBottomNav;
