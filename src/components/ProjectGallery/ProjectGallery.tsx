import React, { FC } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import { ImageData } from '@/constants/content';

type ProjectGalleryProps = {
  galleryImages: ImageData[];
};

const ProjectGallery: FC<ProjectGalleryProps> = ({ galleryImages }) => {
  return (
    <div>
      {galleryImages.map((gallery, i) => (
        <Image key={uuid()} src={gallery.image} alt={gallery.alt} />
      ))}
    </div>
  );
};

export default ProjectGallery;
