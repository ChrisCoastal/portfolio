import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import studioa_image from '/public/projects/studioa/images/studioa.jpg';
import studioa_image_1 from '/public/projects/studioa/images/studioa_1.jpg';
import studioa_image_2 from '/public/projects/studioa/images/studioa_2.jpg';
import studioa_image_3 from '/public/projects/studioa/images/studioa_3.jpg';
import studioa_image_4 from '/public/projects/studioa/images/studioa_4.jpg';

const studioa: ProjectContent = {
  title: 'Studio A',
  id: 'studioa',
  projectType: 'web',
  year: 2022,
  text,
  thumbnail: { image: studioa_image, alt: 'screenshot of studioa app' },
  headerImages: [
    { image: studioa_image_1, alt: 'screenshot of studioa app' },
    { image: studioa_image_2, alt: 'screenshot of studioa app' },
    { image: studioa_image_3, alt: 'screenshot of studioa app' },
  ],
  galleryImages: [],
  video: '/projects/studioa/video/studioa-demo',
  elements: [
    {
      title: 'landing page',
      media: { image: studioa_image_4, alt: 'StudioA landing page' },
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
