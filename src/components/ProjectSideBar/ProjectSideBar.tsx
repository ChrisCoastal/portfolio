import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import projectContent from '@/app/projects/_pageContent';

type Props = {};

const ProjectSideBar = (props: Props) => {
  const projects = Object.values(projectContent);
  const pathname = usePathname();

  const activeMarker = (
    <span className="h-2 w-2 rotate-45 animate-rotate3d-45 bg-black"></span>
  );

  return (
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
  );
};

export default ProjectSideBar;
