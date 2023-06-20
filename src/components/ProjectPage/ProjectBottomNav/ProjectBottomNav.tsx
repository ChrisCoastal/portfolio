import React, { FC } from 'react';
import Link from 'next/link';

type ProjectBottomNavProps = {
  next: { link: string; title: string };
  prev: { link: string; title: string };
};

const ProjectBottomNav: FC<ProjectBottomNavProps> = ({ prev, next }) => {
  return (
    <div className="mx-4 flex justify-between">
      <div className="flex items-center">
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
        <Link
          href={`/projects/${prev.link}`}
          className="-translate-x-4 text-sm sm:text-base"
        >
          {prev.title}
        </Link>
      </div>

      <div className="flex items-center">
        <Link href={next.link} className="translate-x-4 text-sm sm:text-base">
          {next.title}
        </Link>
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
      </div>
    </div>
  );
};

export default ProjectBottomNav;
