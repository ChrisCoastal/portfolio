'use client';
import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import projectContent from '@/app/projects/_pageContent';
import ProjectBody from '@/components/ProjectPage/ProjectBody/ProjectBody';
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
          <ProjectTitle title={project.title} />

          <ProjectHeader
            headerImages={project.headerImages}
            gitHubLink={project.links.gitHub}
            siteLink={project.links.site}
            innerWidth={windowSize.innerWidth}
          />

          <ProjectLede lede={project.text.lede} />
          <div className="mb-36 flex flex-col gap-24">
            <ProjectGallery galleryImages={project.galleryImages} />

            <ProjectBody body={project.text.upperBody} />

            <ProjectVideo video={project.video} />
            <ProjectBody body={project.text.lowerBody} />
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
