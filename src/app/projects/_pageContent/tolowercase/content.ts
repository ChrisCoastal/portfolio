import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import toLowercase_image_1 from '/public/projects/toLowercase/images/toLowercase_1.jpg';
import toLowercase_image_2 from '/public/projects/toLowercase/images/toLowercase_2.jpg';
import toLowercase_image_3 from '/public/projects/toLowercase/images/toLowercase_3.jpg';
import toLowercase_image_4 from '/public/projects/toLowercase/images/toLowercase_4.jpg';

const tolowercase: ProjectContent = {
  title: 'tolowercase',
  id: 'tolowercase',
  projectType: 'web',
  year: 2022,
  text,
  thumbnail: {
    image: toLowercase_image_2,
    alt: 'screenshot of toLowercase app',
  },
  headerImages: [
    { image: toLowercase_image_1, alt: 'toLowercase staircase logo' },
    { image: toLowercase_image_3, alt: 'toLowercase staircase logo' },
    { image: toLowercase_image_2, alt: 'screenshot of toLowercase app' },
  ],
  galleryImages: [
    { image: toLowercase_image_4, alt: 'screenshot of toLowercase app' },
  ],
  video: '/projects/toLowercase/video/toLowercase-demo',
  links,
};

export default tolowercase;
