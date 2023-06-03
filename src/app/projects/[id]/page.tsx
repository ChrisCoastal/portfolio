'use client';
import React, { FC, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import ProjectElement from '@/components/ProjectElement/ProjectElement';
import ProjectLinks from '@/components/ProjectLinks/ProjectLinks';
import CodeBlock from '@/components/UI/CodeBlock/CodeBlock';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import CodeIcon from '@/components/UI/icons/CodeIcon/CodeIcon';
import GitHubIcon from '@/components/UI/icons/GitHubIcon/GitHubIcon';
import LinkIcon from '@/components/UI/icons/LinkIcon/LinkIcon';
import { projectContent } from '@/constants/content';

import rainbeau_image_7 from '/public/projects/rainbeau/images/rainbeau_7.jpg';

type Props = {};

const ProjectPage: FC = (props: Props) => {
  const pathId = usePathname().split('/').pop();

  const project = Object.values(projectContent).find(
    (project) => project.id === pathId
  )!;

  function showCode(event: MouseEvent<HTMLDivElement>) {
    console.log(event);
  }
  return (
    <>
      {project ? (
        <>
          <div className="flex justify-between">
            <h2 className="mb-4">{project.title}</h2>

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
            {/* <span className="mr-16 h-12 w-12 rotate-45 justify-self-end bg-black opacity-0"></span> */}

            <p className="col-start-2 row-start-2 w-96 font-light">
              {project.description}
            </p>
            <p className="col-start-3 row-start-3 w-96 font-light">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-24">
            <div>
              {project.galleryImages.map((gallery, i) => (
                <Image key={uuid()} src={gallery.image} alt={gallery.alt} />
              ))}
            </div>
            {project.video && (
              <div className="bg-stone-800 p-20">
                <video muted autoPlay loop>
                  <source src={project.video.webm} type="video/webm" />
                  <source src={project.video.mp4} type="video/mp4" />
                </video>
              </div>
            )}
            <div className="flex-col">
              {/* <p>loading spinner //</p>
            <div className="flex justify-center ">
              <video muted autoPlay loop>
                <source
                  src="/projects/rainbeau/video/rainbeau-spinner.webm"
                  type="video/webm"
                />
                <source
                  src="/projects/rainbeau/video/rainbeau-spinner.mp4"
                  type="video/mp4"
                />
              </video>
            </div> */}
              <div className="flex justify-end gap-4"></div>
              {project.elements
                ? project.elements.map((element) => (
                    <ProjectElement key={element.title} element={element} />
                  ))
                : null}
            </div>
            <div className="flex justify-between">
              <Link
                href={`/projects/${project.links.prevProject}`}
                className={`h-8 w-8 bg-stone-800`}
              ></Link>
              <Link
                href={`/projects/${project.links.nextProject}`}
                className={`h-8 w-8 bg-stone-800`}
              ></Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ProjectPage;
