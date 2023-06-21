'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import type { ProjectContent } from '@/@types/types';
import { mainSections } from '@/app/_pageContent/content';
import projectContent from '@/app/projects/_pageContent';
import Section from '@/components/HomePage/Section/Section';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import SectionTitle from '@/components/HomePage/SectionTitle/SectionTitle';

import CheckProjectImage from './CheckProjectImage';

type Props = {};

const ProjectsSection = (props: Props) => {
  const projects = Object.values(projectContent);

  // TODO:
  // function handleClick(event: MouseEvent, projectKey: string) {
  //   console.log(event);
  //   mouseClickXY.current = { x: event.clientX, y: event.clientY };
  //   setActiveProject(projectContent[projectKey]);
  // }

  return (
    <Section title={mainSections.projectsSection.title}>
      <div className="mx-auto grid w-fit grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-10">
        {projects.map((project) => (
          <CheckProjectImage key={uuid()} project={project} />
          // <div key={uuid()} className="relative">
          //   <ClickableCursor text="click">
          //     <Link href={`/projects/${project.id}`} className="relative z-10">
          //       <Image
          //         src={project.thumbnail.image}
          //         alt={project.thumbnail.alt}
          //         width={size}
          //         height={size}
          //         className=" transition-all duration-700 ease-in-out hover:-translate-y-2 hover:translate-x-2"
          //       />
          //     </Link>
          //   </ClickableCursor>
          //   <div className="absolute bottom-0 left-0 top-0 mb-6 w-full bg-stone-800" />
          //   <div className="flex items-center justify-between ">
          //     <h4 className="pr-4">{project.title}</h4>
          //     <div className="flex gap-2">
          //       <span className="bg-stone-800 px-2 text-xs text-white">
          //         <p>{project.projectType}</p>
          //       </span>
          //       <span className=" bg-stone-800 px-2 text-xs text-white">
          //         <p>{project.year}</p>
          //       </span>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
