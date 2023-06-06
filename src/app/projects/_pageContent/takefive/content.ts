import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import takeFive_image from '/public/projects/takeFive/images/takeFive.jpg';

const takefive: ProjectContent = {
  title: 'Take Five',
  id: 'takefive',
  projectType: 'library',
  year: 2022,
  text,
  thumbnail: { image: takeFive_image, alt: 'Take Five wordmark' },
  headerImages: [
    { image: takeFive_image, alt: 'Take Five wordmark' },
    { image: takeFive_image, alt: 'Take Five wordmark' },
    { image: takeFive_image, alt: 'Take Five wordmark' },
  ],
  galleryImages: [],
  links,
};

export default takefive;
