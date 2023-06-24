import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

const studioa: ProjectContent = {
  title: 'Studio A',
  id: 'studioa',
  projectType: 'web',
  year: 2022,
  text,
  thumbnail: {
    image: '/assets/projects/studioa/images/studioa.jpg',
    alt: 'screenshot of Studio A site',
  },
  headerImages: [
    {
      image: '/assets/projects/studioa/images/studioa_1.jpg',
      alt: 'screenshot of Studio A site',
    },
    {
      image: '/assets/projects/studioa/images/studioa_1.jpg',
      alt: 'screenshot of Studio A site',
    },
    {
      image: '/assets/projects/studioa/images/studioa_1.jpg',
      alt: 'screenshot of Studio A site',
    },
  ],
  galleryImages: [],
  video: '/assets/projects/studioa/video/studioa-demo',
  elements: [
    {
      title: 'landing page',
      media: {
        image: '/assets/projects/studioa/images/studioa_4.jpg',
        alt: 'Studio A landing page',
      },
      snippets: [
        {
          language: 'html',
          code: code.homeHtml,
          fileName: 'home.region',
        },
        {
          language: 'css',
          code: code.homeCss,
          fileName: 'home.css',
        },
      ],
    },
  ],
  links,
};

export default studioa;
