import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import studioA_image from '/public/projects/studioA/images/studioA.jpg';
import studioA_image_1 from '/public/projects/studioA/images/studioA_1.jpg';
import studioA_image_2 from '/public/projects/studioA/images/studioA_2.jpg';
import studioA_image_3 from '/public/projects/studioA/images/studioA_3.jpg';
import studioA_image_4 from '/public/projects/studioA/images/studioA_4.jpg';

const studioa: ProjectContent = {
  title: 'Studio A',
  id: 'studioa',
  projectType: 'web',
  year: 2022,
  text,
  thumbnail: { image: studioA_image, alt: 'screenshot of studioA app' },
  headerImages: [
    { image: studioA_image_1, alt: 'screenshot of studioA app' },
    { image: studioA_image_2, alt: 'screenshot of studioA app' },
    { image: studioA_image_3, alt: 'screenshot of studioA app' },
  ],
  galleryImages: [],
  video: '/projects/studioA/video/studioA-demo',

  elements: [
    {
      title: 'landing page',
      media: { image: studioA_image_4, alt: 'StudioA landing page' },
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
