import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import rainbeau_image_1 from '/public/assets/projects/rainbeau/images/rainbeau_1.jpg';
import rainbeau_image_2 from '/public/assets/projects/rainbeau/images/rainbeau_2.jpg';
import rainbeau_image_3 from '/public/assets/projects/rainbeau/images/rainbeau_3.jpg';
import rainbeau_image_4 from '/public/assets/projects/rainbeau/images/rainbeau_4.jpg';

const rainbeau: ProjectContent = {
  id: 'rainbeau',
  title: 'Rainbeau',
  projectType: 'web',
  year: 2022,
  text,
  thumbnail: { image: rainbeau_image_1, alt: 'a man with curly hair' },
  headerImages: [
    { image: rainbeau_image_1, alt: 'a man with curly hair', zIndex: 'z-0' },
    { image: rainbeau_image_2, alt: 'a man with curly hair', zIndex: 'z-20' },
    {
      image: rainbeau_image_3,
      alt: 'rainbeau app palette marker icon',
      zIndex: 'z-10',
    },
  ],
  galleryImages: [
    { image: rainbeau_image_4, alt: 'a screenshot of rainbeau app' },
  ],
  video: '/assets/projects/rainbeau/video/rainbeau-demo',
  elements: [
    {
      title: 'loading spinner',
      media: {
        video: '/assets/projects/rainbeau/video/rainbeau-spinner',
        alt: '',
      },
      snippets: [
        {
          language: 'css',
          code: code.spinner,
          fileName: 'LoadingSpinner.styles.tsx',
        },
      ],
    },
  ],
  links,
};

export default rainbeau;
