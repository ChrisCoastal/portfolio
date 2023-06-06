'use client';
import React, { FC, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Cursor from '@/components/UI/Cursor/Cursor';
import { ProjectContent, projectContent } from '@/constants/content';

type WorkLayoutProps = {
  children: React.ReactNode;
};

const WorkLayout: FC<WorkLayoutProps> = ({ children }) => {
  const projects = Object.values(projectContent);
  const pathname = usePathname();

  const activeMarker = (
    <span className="h-2 w-2 rotate-45 animate-rotate3d-45 bg-black"></span>
  );

  return (
    <>
      <div className="spacer h-36"></div>
      <div className="flex justify-center gap-32">
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li className="flex flex-col">
              <Link href="/work" className="mb-1">
                WORK
              </Link>
              <ul className="ml-6 inline-flex flex-col gap-1 whitespace-nowrap text-stone-800">
                {projects.map((project) => {
                  console.log(pathname, project.id);
                  const isActive = pathname.includes(project.id);

                  return (
                    <li key={project.title}>
                      <Link
                        className={
                          isActive
                            ? 'text-stone-800'
                            : 'text-stone-500 transition-all duration-300 hover:text-rose-400'
                        }
                        href={`/projects/${project.id}`}
                      >
                        <span className="relative flex items-center gap-3 whitespace-nowrap">
                          {project.title}
                          {isActive ? activeMarker : null}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="w-[72rem]">{children}</div>
      </div>
      <div className="spacer h-36"></div>
    </>
  );
};

export default WorkLayout;
