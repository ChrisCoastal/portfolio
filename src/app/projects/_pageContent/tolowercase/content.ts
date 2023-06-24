import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

const tolowercase: ProjectContent = {
  title: 'tolowercase',
  id: 'tolowercase',
  projectType: 'web',
  year: 2022,
  text,
  thumbnail: {
    image: '/assets/projects/tolowercase/images/tolowercase_2.jpg',
    alt: 'screenshot of tolowercase app',
  },
  headerImages: [
    {
      image: '/assets/projects/tolowercase/images/tolowercase_1.jpg',
      alt: 'tolowercase staircase logo',
    },
    {
      image: '/assets/projects/tolowercase/images/tolowercase_3.jpg',
      alt: 'tolowercase staircase logo',
    },
    {
      image: '/assets/projects/tolowercase/images/tolowercase_2.jpg',
      alt: 'screenshot of tolowercase app',
    },
  ],
  galleryImages: [
    {
      image: '/assets/projects/tolowercase/images/tolowercase_4.jpg',
      alt: 'screenshot of tolowercase app',
    },
  ],
  video: '/assets/projects/tolowercase/video/tolowercase-demo',
  links,
};

export default tolowercase;
