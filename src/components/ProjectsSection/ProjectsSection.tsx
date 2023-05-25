'use client';

import React, { MouseEvent, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { logos } from '@/assets';
import ProjectsCarousel from '@/components/ProjectsCarousel/ProjectsCarousel';
import ProjectImages from '@/components/ProjectsSection/ProjectImages';
import ScrollSection from '@/components/ScrollSection/ScrollSection';
import StackGallery from '@/components/StackGallery/StackGallery';
import CodeBlock from '@/components/UI/CodeBlock/CodeBlock';
import PageTransition from '@/components/UI/PageTransition/PageTransition';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import type { ProjectContent } from '@/constants/content';
import { mainSections, projectContent } from '@/constants/content';

type Props = {};

const ProjectsSection = (props: Props) => {
  const mouseClickXY = useRef({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<ProjectContent | null>(
    null
  );
  const width = 320;
  const height = 320;

  const projects = Object.values(projectContent);

  // TODO:
  // function handleClick(event: MouseEvent, projectKey: string) {
  //   console.log(event);
  //   mouseClickXY.current = { x: event.clientX, y: event.clientY };
  //   setActiveProject(projectContent[projectKey]);
  // }

  return (
    <ScrollSection className="relative bg-white/40 pb-24 backdrop-blur">
      {activeProject && <PageTransition cursorPos={mouseClickXY.current} />}
      <SectionTitle text={mainSections.projectsSection.title} />
      <div className="w-full">
        <div className="mx-auto grid w-fit grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div key={uuid()} className="">
              <Link href={`/work/${project.id}`}>
                <Image
                  // mouseOver cursor animation handled by Cursor component
                  src={project.image}
                  alt={project.alt}
                  // onClick={(e) => handleClick(e, project[0])}
                  width={width}
                  height={height}
                  className="clickable"
                />
              </Link>
              <div className="flex items-center gap-2 text-black">
                <h4 className="pr-4 text-lg font-bold">{project.title}</h4>
                <span className="rounded-lg bg-green-200 px-2 text-xs">
                  <p>{project.kind}</p>
                </span>
                <span className="rounded-lg bg-green-200 px-2 text-xs">
                  <p>{project.year}</p>
                </span>
              </div>
              <div className="h-0 w-0 opacity-0">text</div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default ProjectsSection;
