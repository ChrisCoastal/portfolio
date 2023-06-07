import React, { FC } from 'react';
import Image from 'next/image';

import type { ProjectElement } from '@/@types/types';

import CodeDropDown from '../UI/CodeDropDown/CodeDropDown';

type ProjectElementProps = {
  element: ProjectElement;
};

const ProjectElement: FC<ProjectElementProps> = ({ element }) => {
  return (
    <div>
      {element?.title && <h4 className="m-20">{`${element.title}`}</h4>}
      <div className="mx-10 flex justify-center">
        {element?.media?.image && (
          <Image src={element.media.image} alt={element.media.alt} />
        )}
        {element?.media?.video && (
          <div>
            <video muted autoPlay loop className="h-auto !w-full">
              <source src={`${element.media.video}.webm`} type="video/webm" />
              <source src={`${element.media.video}.mp4`} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
      <CodeDropDown snippets={element.snippets} show={element.show} />
    </div>
  );
};

export default ProjectElement;
