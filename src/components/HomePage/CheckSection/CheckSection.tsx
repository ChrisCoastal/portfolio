'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import type { ProjectContent } from '@/@types/types';
import { homeSections } from '@/app/_pageContent/content';
import projectContent from '@/app/projects/_pageContent';
import Section from '@/components/HomePage/Section/Section';
import SectionTitle from '@/components/HomePage/SectionTitle/SectionTitle';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';

import CheckProjectImage from './CheckProjectImage';

type Props = {};

const ProjectsSection = (props: Props) => {
  const projects = Object.values(projectContent);
  
  return (
    <Section title={homeSections.projectsSection.title}>
      <div className="mx-auto mt-16 grid w-fit grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-10">
        {projects.map((project) => (
          <CheckProjectImage key={uuid()} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
