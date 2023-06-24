import { ProjectContent } from '@/@types/types';

import { code } from './codeSnippets';
import { links } from './links';
import { text } from './text';

import takefive_image_1 from '/public/assets/projects/takefive/images/takefive_1.jpg';
import takefive_image_2 from '/public/assets/projects/takefive/images/takefive_2.jpg';
import takefive_image_3 from '/public/assets/projects/takefive/images/takefive_3.jpg';
import takefive_image_4 from '/public/assets/projects/takefive/images/takefive_4.jpg';

const takefive: ProjectContent = {
  title: 'Take Five',
  id: 'takefive',
  projectType: 'library',
  year: 2022,
  text,
  thumbnail: { image: takefive_image_2, alt: 'Take Five wordmark' },
  galleryImages: [{ image: takefive_image_4, alt: 'wireframe UI iterations' }],
  headerImages: [
    { image: takefive_image_1, alt: 'abstracted playing cards' },
    { image: takefive_image_2, alt: 'Take Five wordmark' },
    { image: takefive_image_3, alt: 'number 5' },
  ],
  links,
};

export default takefive;
