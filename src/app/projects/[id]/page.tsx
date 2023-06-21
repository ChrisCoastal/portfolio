'use client';
import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import projectContent from '@/app/projects/_pageContent';
import ProjectBottomNav from '@/components/ProjectPage/ProjectBottomNav/ProjectBottomNav';
import ProjectElement from '@/components/ProjectPage/ProjectElement/ProjectElement';
import ProjectGallery from '@/components/ProjectPage/ProjectGallery/ProjectGallery';
import ProjectHeader from '@/components/ProjectPage/ProjectHeader/ProjectHeader';
import ProjectLede from '@/components/ProjectPage/ProjectLede/ProjectLede';
import ProjectLinks from '@/components/ProjectPage/ProjectLinks/ProjectLinks';
import ProjectTitle from '@/components/ProjectPage/ProjectTitle/ProjectTitle';
import ProjectVideo from '@/components/ProjectPage/ProjectVideo/ProjectVideo';
import useResizeWindow from '@/hooks/useResizeWindow';

const ProjectPage: FC = () => {
  const { windowSize } = useResizeWindow();
  const pathId = usePathname().split('/').pop();
  const project = Object.values(projectContent).find(
    (project) => project.id === pathId
  )!;

  return (
    <>
      {project ? (
        <>
          <div className="mb-2 flex items-center justify-between self-end">
            <ProjectTitle title={project.title} />
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
          </div>
          <ProjectLede lede={project.text.lede} />

          <div className="mb-36 flex flex-col gap-24">
            <ProjectGallery galleryImages={project.galleryImages} />
            <ProjectVideo video={project.video} />
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
