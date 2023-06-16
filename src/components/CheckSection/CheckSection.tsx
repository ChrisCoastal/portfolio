'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import type { ProjectContent } from '@/@types/types';
import { mainSections } from '@/app/_pageContent/content';
import projectContent from '@/app/projects/_pageContent';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import Section from '@/components/UI/Section/Section';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';

type Props = {};

const ProjectsSection = (props: Props) => {
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
    <Section title={mainSections.projectsSection.title}>
      <div className="mx-auto my-36 grid w-fit grid-cols-1 xs:grid-cols-2 xs:gap-6 md:grid-cols-3 md:gap-10">
        {projects.map((project) => (
          <div key={uuid()} className="">
            <ClickableCursor text="click">
              <Link href={`/projects/${project.id}`}>
                <Image
                  src={project.thumbnail.image}
                  alt={project.thumbnail.alt}
                  width={width}
                  height={height}
                />
              </Link>
            </ClickableCursor>
            <div className="flex items-center justify-between ">
              <h4 className="pr-4">{project.title}</h4>
              <div className="flex gap-2">
                <span className="bg-stone-800 px-2 text-xs text-white">
                  <p>{project.projectType}</p>
                </span>
                <span className=" bg-stone-800 px-2 text-xs text-white">
                  <p>{project.year}</p>
                </span>
              </div>
            </div>
            <div className="h-0 w-0 opacity-0">text</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
