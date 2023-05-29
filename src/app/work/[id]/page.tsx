'use client';
import React, { FC } from 'react';
import Image from 'next/image';
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
            <ClickableCursor text="click">
              <h2 className="mb-4">{project.title}</h2>
            </ClickableCursor>
            <div className="flex gap-4">
              <LinkIcon height="32px" width="32px" className="inline" />
              <GitHubIcon height="32px" width="32px" className="inline" />
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
          <CodeBlock language="html">
            {`<div class='cover flex-full-width'>
              {.section items}
                <div class='cover cover-image-container'>
                  <a href={0.clickthroughUrl} class="cover-image-link cover-image-link--left">
                    {.if 0.customContent.buttonText}{0.customContent.buttonText}{.or}work work{.end}
                  </a>
                  <img class='cover cover-image cover-image--left' src="{0.assetUrl}" alt="{0.title}"/>
                </div>
                <div class='cover cover-image-container'>
                  <a href={1.clickthroughUrl} class="cover-image-link cover-image-link--right">
                    {.if 1.customContent.buttonText}{1.customContent.buttonText}{.or}studio work{.end}
                  </a>
                  <img class='cover cover-image cover-image--right' src="{1.assetUrl}" alt="{1.title}"/>
                </div>
              {.end}
            </div>`}
          </CodeBlock>
        </>
      ) : null}
    </>
  );
};

export default ProjectPage;
