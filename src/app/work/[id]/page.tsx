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
      <h2 className="mb-8">{project.title}</h2>
      <div className="mb-24 grid grid-cols-3 gap-x-2 gap-y-24">
        {project.images.map((image, i) => (
          <Image key={uuid()} src={image} alt=""></Image>
        ))}
        <span className="mr-24 mt-12 h-12 w-12 rotate-45 justify-self-end bg-black"></span>
        <div className="flex justify-center">
          <p className="w-96">{project.description}</p>
        </div>
      </div>
    </>
  ) : null;
};

export default ProjectPage;
