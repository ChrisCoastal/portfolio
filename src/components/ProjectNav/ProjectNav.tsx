import React, { FC } from 'react';
import Link from 'next/link';

type ProjectNavProps = {
  next: { link: string; title: string };
  prev: { link: string; title: string };
};

const ProjectNav: FC<ProjectNavProps> = ({ prev, next }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Link
          href={`/projects/${prev.link}`}
          className={`grid h-16 w-16 -rotate-45 grid-cols-3 grid-rows-3 gap-0.5`}
        >
          <span className="row-start-1 bg-stone-800"></span>
          <span className="row-start-1 bg-stone-800"></span>
          <span className="row-start-1 bg-stone-800"></span>
          <span className="row-start-2 bg-stone-800"></span>
          <span className="row-start-3 bg-stone-800"></span>
        </Link>
        <Link href={`/projects/${prev.link}`}>{prev.title}</Link>
      </div>

      <div className="flex items-center">
        <Link href={next.link}>{next.title}</Link>
        <Link
          href={`/projects/${next.link}`}
          className={`grid h-16 w-16 rotate-45 grid-cols-3 grid-rows-3 gap-0.5`}
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

export default ProjectNav;
