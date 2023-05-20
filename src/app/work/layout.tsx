'use client';
import React, { FC, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ProjectContent, projectContent } from '@/constants/content';

type WorkLayoutProps = {
  children: React.ReactNode;
};

const WorkLayout: FC<WorkLayoutProps> = ({ children }) => {
  const projectRef = useRef<ProjectContent | null>(null);
  const projects = Object.values(projectContent);
  const pathname = usePathname();

  const activeMarker = (
    <span className="h-2 w-2 rotate-45 animate-rotate3d-45 bg-black"></span>
  );

  return (
    <div className="mt-48 flex justify-center gap-32">
      <div className="flex flex-col">
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/">WORK</Link>
          </li>
        </ul>
        <ul className="ml-6 inline-flex flex-col gap-2">
          {projects.map((project) => {
            console.log(pathname, project.id);
            const isActive = pathname.includes(project.id);

            return (
              <li key={project.title}>
                <Link
                  className={isActive ? 'text-black' : 'text-stone-600'}
                  href={`/work/${project.id}`}
                >
                  <span className="relative flex items-center gap-3">
                    {project.title}
                    {isActive ? activeMarker : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[72rem]">{children}</div>
    </div>
  );
};

export default WorkLayout;
