import React, { FC } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import { ImageData } from '@/@types/types';
import ProjectLinks from '@/components/ProjectPage/ProjectLinks/ProjectLinks';
import { breakPoints } from '@/constants/constants';

type ProjectHeaderProps = {
  headerImages: (ImageData & { zIndex: string })[];
  innerWidth: number;
  gitHubLink: string | undefined;
  siteLink: string | undefined;
};

const ProjectHeader: FC<ProjectHeaderProps> = ({
  headerImages,
  innerWidth,
  gitHubLink,
  siteLink,
}) => {
  const imageVisible = [
    'col-start-1 row-start-1 sm:col-start-1 sm:row-start-1 lg:col-start-1 lg:row-start-1',
    'col-start-1 row-start-1 sm:col-start-2 sm:row-start-1 lg:col-start-2 lg:row-start-1',
    'col-start-1 row-start-1 sm:col-start-1 sm:row-start-1 lg:col-start-3 lg:row-start-1',
  ];

  return (
    <div className="mb-2 grid grid-cols-1 justify-center gap-y-3 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3">
      {headerImages.map((header, i) => (
        <Image
          key={uuid()}
          width={500}
          src={header.image}
          alt={header.alt}
          placeholder="blur"
          className={`${imageVisible[i]} ${header.zIndex} justify-self-center`}
          priority
        />
      ))}
      <ProjectLinks
        gitHub={gitHubLink}
        site={siteLink}
        innerWidth={innerWidth}
      />
    </div>
  );
};

export default ProjectHeader;
