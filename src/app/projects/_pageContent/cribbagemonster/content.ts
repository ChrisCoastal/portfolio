import type { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

const cribbagemonster: ProjectContent = {
  title: 'Cribbage Monster',
  id: 'cribbagemonster',
  projectType: 'web',
  year: 2023,
  thumbnail: {
    image: '/assets/projects/cribbagemonster/images/cribbagemonster.jpg',
    alt: 'Cribbage Monster - Are you a Monster?',
  },
  text,
  headerImages: [
    {
      image: '/assets/projects/cribbagemonster/images/cribbagemonster_1.jpg',
      alt: 'a cribbage board',
    },
    {
      image: '/assets/projects/cribbagemonster/images/cribbagemonster_2.jpg',
      alt: 'a cribbage board',
    },
    {
      image: '/assets/projects/cribbagemonster/images/cribbagemonster_3.jpg',
      alt: 'a cribbage board',
    },
  ],
  galleryImages: [
    {
      image: '/assets/projects/cribbagemonster/images/cribbagemonster_4.jpg',
      alt: 'screenshot of the game dashboard',
    },
  ],
  video: '/assets/projects/cribbagemonster/video/cribbagemonster-demo',
  elements: [
    {
      title: 'player interface',
      media: {
        video:
          '/assets/projects/cribbagemonster/video/cribbagemonster-cardPlay',
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
