'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import { projectContent } from '@/constants/content';

type Props = {};

const ProjectPage: FC = (props: Props) => {
  const pathId = usePathname().split('/').pop();

  const project = Object.values(projectContent).find(
    (project) => project.id === pathId
  );

  return project ? (
    <>
      <h2>{project.title}</h2>
      <div className="grid grid-cols-3 bg-stone-300">
        {project.images.map((image, i) => (
          <Image key={uuid()} src={image} alt=""></Image>
        ))}
      </div>
    </>
  ) : null;
};

export default ProjectPage;
