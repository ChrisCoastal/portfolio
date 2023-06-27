import React, { FC } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import { ImageData } from '@/@types/types';

type ProjectGalleryProps = {
  galleryImages: ImageData[];
};

const ProjectGallery: FC<ProjectGalleryProps> = ({ galleryImages }) => {
  return (
    <div>
      {galleryImages.map((gallery, i) => (
        <Image
          key={uuid()}
          src={gallery.image}
          alt={gallery.alt}
          placeholder="blur"
          priority={i === 0 ? true : false}
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
