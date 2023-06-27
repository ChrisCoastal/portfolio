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
  const maxImages =
    innerWidth >= breakPoints.lg ? 3 : innerWidth >= breakPoints.sm ? 2 : 1;

  return (
    <>
      {headerImages.map((header, i) => {
        return i < maxImages ? (
          <Image
            key={uuid()}
            width={500}
            src={header.image}
            alt={header.alt}
            placeholder="blur"
            priority
          />
        ) : null;
      })}
    </>
  );
};

export default ProjectHeader;
