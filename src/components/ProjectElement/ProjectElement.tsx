import React from 'react';
import Image from 'next/image';
import type { FC } from 'react';

import CodeBlock from '@/components/UI/CodeBlock/CodeBlock';
import type { ProjectElement } from '@/constants/content';
import { projectContent } from '@/constants/content';

import CodeDropDown from '../UI/CodeDropDown/CodeDropDown';

type ProjectElementProps = {
  element: ProjectElement;
};

const ProjectElement: FC<ProjectElementProps> = ({ element }) => {
  return (
    <div className="flex-col border border-stone-800">
      <h4>{`${element.title}`}</h4>
      {element?.media?.image && (
        <Image src={element.media.image} alt={element.media.alt} />
      )}
      {element?.media?.video && (
        <div className="flex justify-center">
          <video muted autoPlay loop>
            <source src={`${element.media.video}.webm`} type="video/webm" />
            <source src={`${element.media.video}.mp4`} type="video/mp4" />
          </video>
        </div>
      )}
      <CodeDropDown snippets={element.snippets} />
    </div>
  );
};

export default ProjectElement;
