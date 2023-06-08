import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import takefive_image from '/public/projects/takefive/images/takefive.jpg';

const takefive: ProjectContent = {
  title: 'Take Five',
  id: 'takefive',
  projectType: 'library',
  year: 2022,
  text,
  thumbnail: { image: takefive_image, alt: 'Take Five wordmark' },
  headerImages: [
    { image: takefive_image, alt: 'Take Five wordmark' },
    { image: takefive_image, alt: 'Take Five wordmark' },
    { image: takefive_image, alt: 'Take Five wordmark' },
  ],
  galleryImages: [],
  links,
};

export default takefive;
