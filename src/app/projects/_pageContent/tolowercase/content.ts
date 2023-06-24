import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import tolowercase_image_1 from '/public/assets/projects/tolowercase/images/tolowercase_1.jpg';
import tolowercase_image_2 from '/public/assets/projects/tolowercase/images/tolowercase_2.jpg';
import tolowercase_image_3 from '/public/assets/projects/tolowercase/images/tolowercase_3.jpg';
import tolowercase_image_4 from '/public/assets/projects/tolowercase/images/tolowercase_4.jpg';

const tolowercase: ProjectContent = {
  title: 'tolowercase',
  id: 'tolowercase',
  projectType: 'web',
  year: 2022,
  text,
  thumbnail: {
    image: tolowercase_image_2,
    alt: 'screenshot of tolowercase app',
  },
  headerImages: [
    { image: tolowercase_image_1, alt: 'tolowercase staircase logo' },
    { image: tolowercase_image_3, alt: 'tolowercase staircase logo' },
    { image: tolowercase_image_2, alt: 'screenshot of tolowercase app' },
  ],
  galleryImages: [
    { image: tolowercase_image_4, alt: 'screenshot of tolowercase app' },
  ],
  video: '/assets/projects/tolowercase/video/tolowercase-demo',
  links,
};

export default tolowercase;
