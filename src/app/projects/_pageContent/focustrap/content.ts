import type { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import focustrap_image_1 from '/public/assets/projects/focustrap/images/focustrap_1.jpg';
import focustrap_image_2 from '/public/assets/projects/focustrap/images/focustrap_2.jpg';
import focustrap_image_3 from '/public/assets/projects/focustrap/images/focustrap_3.jpg';
import focustrap_image_4 from '/public/assets/projects/focustrap/images/focustrap_4.jpg';

const focustrap: ProjectContent = {
  title: 'Focus Trap',
  thumbnail: {
    image: focustrap_image_2,
    alt: 'Admiral Ackbar gazing into the distance',
  },
  headerImages: [
    { image: focustrap_image_1, alt: 'abstract squiggly light rings' },
    {
      image: focustrap_image_2,
      alt: 'Admiral Ackbar gazing into the distance',
    },
    { image: focustrap_image_3, alt: 'abstract concentric light rings' },
  ],
  galleryImages: [
    {
      image: focustrap_image_4,
      alt: 'screenshot of Flowbite modal component',
    },
  ],
  id: 'focustrap',
  text,
  projectType: 'open source',
  year: 2023,
  elements: [
    {
      // title: 'focus trap',
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
