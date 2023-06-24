import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

const takefive: ProjectContent = {
  title: 'Take Five',
  id: 'takefive',
  projectType: 'library',
  year: 2022,
  text,
  thumbnail: {
    image: '/assets/projects/takefive/images/takefive_2.jpg',
    alt: 'Take Five wordmark',
  },
  galleryImages: [
    {
      image: '/assets/projects/takefive/images/takefive_4.jpg',
      alt: 'wireframe UI iterations',
    },
  ],
  headerImages: [
    {
      image: '/assets/projects/takefive/images/takefive_1.jpg',
      alt: 'abstracted playing cards',
    },
    {
      image: '/assets/projects/takefive/images/takefive_2.jpg',
      alt: 'Take Five wordmark',
    },
    {
      image: '/assets/projects/takefive/images/takefive_3.jpg',
      alt: 'number 5',
    },
  ],
  links,
};

export default takefive;
