'use client';
import React, { FC, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import projectContent from '@/app/projects/_pageContent';
import ProjectBottomNav from '@/components/ProjectBottomNav/ProjectBottomNav';
import ProjectElement from '@/components/ProjectElement/ProjectElement';
import ProjectGallery from '@/components/ProjectGallery/ProjectGallery';
import ProjectHeader from '@/components/ProjectHeader/ProjectHeader';
import ProjectLede from '@/components/ProjectLede/ProjectLede';
import ProjectLinks from '@/components/ProjectLinks/ProjectLinks';
import ProjectVideo from '@/components/ProjectVideo/ProjectVideo';
import useResizeWindow from '@/hooks/useResizeWindow';

type Props = {};

const ProjectPage: FC = (props: Props) => {
  const { windowSize, breakPoints } = useResizeWindow();
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
          <div className="mb-24 grid grid-cols-1 gap-x-2 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectHeader
              headerImages={project.headerImages}
              innerWidth={windowSize.innerWidth}
            />
            <ProjectLede lede={project.text.lede} />
          </div>
          <div className="mb-36 flex flex-col gap-24">
            <ProjectGallery galleryImages={project.galleryImages} />
            {/* <ProjectVideo video={project.video} /> */}
            {project.text.description && (
              <p className="mx-20 font-light">{project.text.description}</p>
            )}
            {project.elements
              ? project.elements.map((element) => (
                  <ProjectElement key={uuid()} element={element} />
                ))
              : null}
          </div>
          <ProjectBottomNav
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
