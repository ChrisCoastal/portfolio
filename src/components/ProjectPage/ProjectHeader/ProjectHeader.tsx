import React, { FC } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import { ImageData } from '@/@types/types';
import { breakPoints } from '@/constants/constants';

type ProjectHeaderProps = {
  headerImages: ImageData[];
  innerWidth: number;
};

const ProjectHeader: FC<ProjectHeaderProps> = ({
  headerImages,
  innerWidth,
}) => {
  // const maxImages =
  //   innerWidth <= breakPoints.lg ? 2 : innerWidth <= breakPoints.sm ? 1 : 3;
  const imageVisible = [
    {
      base: 'hidden',
      sm: 'block',
      lg: 'block',
    },
    {
      base: 'block',
      sm: 'block',
      lg: 'block',
    },
    {
      base: 'hidden',
      sm: 'hidden',
      lg: 'block',
    },
  ];

  return (
    <div className="mb-2 grid grid-cols-1 gap-x-2 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
      {headerImages.map((header, i) => (
        <Image
          key={uuid()}
          width={500}
          src={header.image}
          alt={header.alt}
          placeholder="blur"
          className={`sm:${imageVisible[i]['sm']} lg:${imageVisible[i]['lg']}`}
          priority
        />
      ))}
    </div>
  );
};

export default ProjectHeader;
