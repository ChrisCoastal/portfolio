'use client';
import React, { FC, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import projectContent from '@/app/projects/_pageContent';
import ProjectElement from '@/components/ProjectElement/ProjectElement';
import ProjectGallery from '@/components/ProjectGallery/ProjectGallery';
import ProjectLinks from '@/components/ProjectLinks/ProjectLinks';
import ProjectNav from '@/components/ProjectNav/ProjectNav';

type Props = {};

const ProjectPage: FC = (props: Props) => {
  const pathId = usePathname().split('/').pop();

  const project = Object.values(projectContent).find(
    (project) => project.id === pathId
  )!;

  return (
    <>
      {project ? (
        <>
          <div className="mb-8 flex items-center justify-between">
            <h2>{project.title}</h2>
            <ProjectLinks
              gitHub={project.links.gitHub}
              site={project.links.site}
            />
          </div>
          <div className="mb-24 grid grid-cols-3 gap-x-2 gap-y-24">
            {project.headerImages.map((header, i) => {
              const maxImages = 3;
              return i < maxImages ? (
                <Image
                  key={uuid()}
                  src={header.image}
                  alt={header.alt}
                  priority
                />
              ) : null;
            })}

            <p className="col-start-2 row-start-2 w-96 font-light">
              {project.text.lede.first}
            </p>
            {project.text.lede.second && (
              <p className="col-start-3 row-start-3 w-96 font-light">
                {project.text.lede.second}
              </p>
            )}
          </div>
          <div className="mb-36 flex flex-col gap-24">
            <ProjectGallery galleryImages={project.galleryImages} />
            {project.video && (
              <div className="bg-stone-800 p-20">
                <video muted autoPlay loop>
                  <source src={`${project.video}.webm`} type="video/webm" />
                  <source src={`${project.video}.webm`} type="video/mp4" />
                </video>
              </div>
            )}
            {project.text.description && (
              <p className="mx-20 font-light">{project.text.description}</p>
            )}
            {project.elements
              ? project.elements.map((element) => (
                  <ProjectElement key={element.title} element={element} />
                ))
              : null}
          </div>
          <ProjectNav
            prev={{
              link: project.links.prevProject,
              title: projectContent[project.links.prevProject].title,
            }}
            next={{
              link: project.links.nextProject,
              title: projectContent[project.links.nextProject].title,
            }}
          />
        </>
      ) : null}
    </>
  );
};

export default ProjectPage;
