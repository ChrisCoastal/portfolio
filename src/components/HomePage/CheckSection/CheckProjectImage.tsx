'use client';

import React, { FC, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import type { ProjectContent } from '@/@types/types';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';

type CheckProjectImageProps = {
  project: ProjectContent;
};

const CheckProjectImage: FC<CheckProjectImageProps> = ({ project }) => {
  const size = 320;
  const projectTextY = 6;

  return (
    <div key={uuid()} className="relative">
      <ClickableCursor text="click">
        <Link href={`/projects/${project.id}`} className="relative z-10">
          <Image
            src={project.thumbnail.image}
            alt={project.thumbnail.alt}
            width={size}
            height={size}
            className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:translate-x-2 focus:-translate-y-2 focus:translate-x-2"
          />
        </Link>
      </ClickableCursor>
      <div
        className={`absolute bottom-0 left-0 top-0 mb-${projectTextY} w-full bg-stone-800`}
      />
      <div className={`flex h-${projectTextY} items-center justify-between`}>
        <h4>{project.title}</h4>
        <div className="flex gap-2">
          <span className="bg-stone-800 px-2 text-xs text-white">
            <p>{project.projectType}</p>
          </span>
          <span className=" bg-stone-800 px-2 text-xs text-white">
            <p>{project.year}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckProjectImage;
