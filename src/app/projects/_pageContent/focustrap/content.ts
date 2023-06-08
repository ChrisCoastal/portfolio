import type { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import focustrap_image_1 from '/public/projects/focustrap/images/focustrap_1.jpg';
import focustrap_image_2 from '/public/projects/focustrap/images/focustrap_2.jpg';
import focustrap_image_3 from '/public/projects/focustrap/images/focustrap_3.jpg';
import focustrap_image_4 from '/public/projects/focustrap/images/focustrap_4.jpg';

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
  text: {
    lede: {
      first: text.lede.first,
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
  },
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
          fileName: 'Modal.tsx',
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
