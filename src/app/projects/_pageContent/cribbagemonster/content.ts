import type { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import cribbageMonster_image from '/public/projects/cribbageMonster/images/cribbageMonster.jpg';
import cribbageMonster_image_1 from '/public/projects/cribbageMonster/images/cribbageMonster_1.jpg';
import cribbageMonster_image_2 from '/public/projects/cribbageMonster/images/cribbageMonster_2.jpg';
import cribbageMonster_image_3 from '/public/projects/cribbageMonster/images/cribbageMonster_3.jpg';
import cribbageMonster_image_4 from '/public/projects/cribbageMonster/images/cribbageMonster_4.jpg';

const cribbagemonster: ProjectContent = {
  title: 'Cribbage Monster',
  id: 'cribbagemonster',
  projectType: 'web',
  year: 2023,
  thumbnail: {
    image: cribbageMonster_image,
    alt: 'Cribbage Monster - Are you a Monster?',
  },
  text,
  headerImages: [
    { image: cribbageMonster_image_1, alt: 'a cribbage board' },
    { image: cribbageMonster_image_2, alt: 'a cribbage board' },
    { image: cribbageMonster_image_3, alt: 'a cribbage board' },
  ],
  galleryImages: [
    {
      image: cribbageMonster_image_4,
      alt: 'screenshot of the game dashboard',
    },
  ],
  video: '/projects/cribbageMonster/video/cribbageMonster-demo',
  elements: [
    {
      title: 'player interface',
      media: {
        video: '/projects/cribbageMonster/video/cribbageMonster-cardPlay',
        alt: '',
      },
      snippets: [
        {
          language: 'tsx',
          code: code.playerDisplay,
          fileName: 'PlayerDisplay.tsx',
        },
      ],
    },
  ],
  links,
};

export default cribbagemonster;
