'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import CodeBlock from '@/components/UI/CodeBlock/CodeBlock';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import GitHubIcon from '@/components/UI/icons/GitHubIcon/GitHubIcon';
import LinkIcon from '@/components/UI/icons/LinkIcon/LinkIcon';
import { projectContent } from '@/constants/content';

import rainbeau_image_7 from '/public/projects/images/rainbeau_7.jpg';

type Props = {};

const ProjectPage: FC = (props: Props) => {
  const pathId = usePathname().split('/').pop();

  const project = Object.values(projectContent).find(
    (project) => project.id === pathId
  );
  return (
    <>
      {project ? (
        <>
          <div className="flex justify-between">
            <h2 className="mb-4">{project.title}</h2>

            <div className="flex gap-4">
              {project.link ? (
                <ClickableCursor text="click">
                  <Link href={project.link} target="_blank">
                    <LinkIcon height="32px" width="32px" className="inline" />
                  </Link>
                </ClickableCursor>
              ) : null}
              {project.github ? (
                <ClickableCursor text="click">
                  <Link href={project.github} target="_blank">
                    <GitHubIcon height="32px" width="32px" className="inline" />
                  </Link>
                </ClickableCursor>
              ) : null}
            </div>
          </div>
          <div className="mb-24 grid grid-cols-3 gap-x-2 gap-y-24">
            {project.headerImages.map((image, i) => (
              <Image key={uuid()} src={image} alt="" priority />
            ))}
            <span className="mr-16 h-12 w-12 rotate-45 justify-self-end bg-black opacity-0"></span>
            <div className="flex justify-center">
              <p className="w-96 font-light">{project.description}</p>
            </div>
          </div>
          <Image key={uuid()} src={rainbeau_image_7} alt="" />
          {project.video && (
            <div className="bg-stone-800 p-20">
              <video muted autoPlay loop>
                <source
                  src="/projects/video/rainbeau-demo.webm"
                  type="video/webm"
                />
                <source
                  src="/projects/video/rainbeau-demo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          )}
          <div className="flex justify-center">
            <video muted autoPlay loop>
              <source
                src="/projects/video/rainbeau-spinner.webm"
                type="video/webm"
              />
              <source
                src="/projects/video/rainbeau-spinner.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <CodeBlock language="html">{}</CodeBlock>
        </>
      ) : null}
    </>
  );
};

export default ProjectPage;
