import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

const rainbeau: ProjectContent = {
  id: 'rainbeau',
  title: 'Rainbeau',
  projectType: 'web',
  year: 2022,
  text,
  thumbnail: {
    image: '/assets/projects/rainbeau/images/rainbeau_1.jpg',
    alt: 'a man with curly hair',
  },
  headerImages: [
    {
      image: '/assets/projects/rainbeau/images/rainbeau_1.jpg',
      alt: 'a man with curly hair',
    },
    {
      image: '/assets/projects/rainbeau/images/rainbeau_2.jpg',
      alt: 'a man with curly hair',
    },
    {
      image: '/assets/projects/rainbeau/images/rainbeau_3.jpg',
      alt: 'rainbeau app palette marker icon',
    },
  ],
  galleryImages: [
    {
      image: '/assets/projects/rainbeau/images/rainbeau_4.jpg',
      alt: 'a screenshot of rainbeau app',
    },
  ],
  video: '/projects/rainbeau/video/rainbeau-demo',
  elements: [
    {
      title: 'loading spinner',
      media: {
        video: '/assets/projects/rainbeau/video/rainbeau-spinner',
        alt: '',
      },
      snippets: [
        {
          language: 'tsx',
          code: code.spinner,
          fileName: 'file.tsx',
        },
      ],
    },
  ],
  links,
};

export default rainbeau;
