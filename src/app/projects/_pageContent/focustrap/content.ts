import type { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

const focustrap: ProjectContent = {
  title: 'Focus Trap',
  thumbnail: {
    image: '/assets/projects/focustrap/images/focustrap_2.jpg',
    alt: 'Admiral Ackbar gazing into the distance',
  },
  headerImages: [
    {
      image: '/assets/projects/focustrap/images/focustrap_1.jpg',
      alt: 'abstract squiggly light rings',
    },
    {
      image: '/assets/projects/focustrap/images/focustrap_2.jpg',
      alt: 'Admiral Ackbar gazing into the distance',
    },
    {
      image: '/assets/projects/focustrap/images/focustrap_3.jpg',
      alt: 'abstract concentric light rings',
    },
  ],
  galleryImages: [
    {
      image: '/assets/projects/focustrap/images/focustrap_4.jpg',
      alt: 'screenshot of Flowbite modal component',
    },
  ],
  id: 'focustrap',
  text,
  projectType: 'open source',
  year: 2023,
  elements: [
    {
      show: true,
      snippets: [
        {
          language: 'js',
          code: code.modal,
          fileName: 'MyModal.tsx',
        },
        {
          language: 'js',
          code: code.focustrap,
          fileName: 'FocusTrap.tsx',
        },
      ],
    },
  ],
  links,
};

export default focustrap;
