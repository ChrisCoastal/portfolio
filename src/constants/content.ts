import type { StaticImageData } from 'next/image';

import cribbageMonster from '@/assets/projects/cribbageMonster/cribbageMonster.jpg';
import focusTrap from '@/assets/projects/focustrap/focustrap.jpg';
import rainbeau from '@/assets/projects/rainbeau/rainbeau.png';
import studioA from '@/assets/projects/studioA/studio-a.jpg';
import takefive from '@/assets/projects/takefive/takefive.jpg';
import lowercase from '@/assets/projects/tolowercase/tolowercase.png';

import rainbeau_image_2 from '/public/projects/images/rainbeau_2.jpg';
import rainbeau_image_3 from '/public/projects/images/rainbeau_3.jpg';
import rainbeau_image_4 from '/public/projects/images/rainbeau_4.jpg';
import rainbeau_image_5 from '/public/projects/images/rainbeau_5.jpg';
import rainbeau_image_6 from '/public/projects/images/rainbeau_6.jpg';

export type ProjectContent = {
  title: string;

  headerImages: StaticImageData[];
  galleryImages: StaticImageData[];
  id: string;
  alt: string;
  description: string;
  kind: string;
  year: number;
  video?: string;
  link?: string;
  github?: string;
};

// index order for rendering logos
export const logoIndex = [
  'amplify',
  'apollo',
  'blender',
  'css',
  'docker',
  'react', // center
  'tailwind', // center
  'emotion',
  'figma',
  'typescript', // center
  'jest', // center
  'firebase',
  'git',
  'github',
  'graphql',
  'html',
  'illustrator',
  'indesign',
  'javascript',
  'jsont',
  'mui',
  '_', // center
  '_', // center
  'nextjs',
  'nodejs',
  '_', // center
  '_', // center
  'photoshop',
  'sass',
  'threejs',
  'vite',
  'xd',
];

export const mainSections = {
  heroSection: {
    title: ['This looks like a problem.'],
  },
  stackSection: {
    title: 'foundation',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
  },
  projectsSection: {
    title: 'work',
    text: 'Here is a selection of projects that I have worked on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
  },
  aboutSection: {
    title: 'about',
    text: '',
  },
  contactSection: {
    title: 'contact',
    text: 'Have an idea or looking for help creating one? I am always interested in getting involved with new projects and creating nice stuff with inspiring individuals.',
  },
};

export const marqueeText = {
  text: [
    'intuitive',
    'expressive',
    'thoughtful',
    'fresh',
    'clean',
    'rich',
    'differentiation',
    'clarity',
    'detail',
    'efficiency',
    'accessibility',
    'creativity',
  ],
  lr: '◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ',
  rl: '◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ◆ THOUGHTFUL APPROACH ',
};

export const projectContent: { [key: string]: ProjectContent } = {
  cribbageMonster: {
    title: 'Cribbage Monster',

    headerImages: [cribbageMonster, cribbageMonster, cribbageMonster],
    galleryImages: [],
    id: 'cribbagemonster',
    alt: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    kind: 'web',
    year: 2023,
    link: 'https://cribbage.netlify.app/',
    github: 'https://github.com/ChrisCoastal/tolowercase',
  },
  rainbeau: {
    title: 'Rainbeau',
    headerImages: [rainbeau, rainbeau_image_5, rainbeau_image_6],
    galleryImages: [],
    video: 'https://www.youtube.com/embed/5qap5aO4i9A',
    id: 'rainbeau',
    alt: '',
    description:
      'Rainbeau is a color theming tool that takes inspiration from the real world. Users can cycle through randomized images (fetched from Unsplash) to draw up custom color palettes based where markers are added and dragged over the image. The palette can be copied as individual colors in HSL, HEX, or RGB or formatted to be used with common styling libraries like Tailwind, Mui, or Styled Components.',
    kind: 'web',
    year: 2022,
    link: 'https://tolowercase.xyz/',
    github: 'https://github.com/ChrisCoastal/tolowercase',
  },
  lowercase: {
    title: 'tolowercase',
    headerImages: [lowercase, lowercase, lowercase],
    galleryImages: [],
    id: 'tolowercase',
    alt: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    kind: 'web',
    year: 2022,
    link: 'https://tolowercase.xyz/',
    github: 'https://github.com/ChrisCoastal/tolowercase',
  },
  studioA: {
    title: 'Studio A',
    id: 'studioa',
    headerImages: [studioA, studioA, studioA],
    galleryImages: [],
    alt: '',
    kind: 'web',
    year: 2022,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    link: 'https://studioa.ca/',
  },
  takefive: {
    title: 'Take Five',
    id: 'takefive',
    headerImages: [takefive, takefive, takefive],
    galleryImages: [],
    alt: '',
    kind: 'library',
    year: 2022,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    github: 'https://github.com/kaisergame/kaiser-lib',
  },
  focusTrap: {
    title: 'Focus Trap',
    headerImages: [focusTrap, focusTrap, focusTrap],
    galleryImages: [],
    id: 'focustrap',
    alt: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    kind: 'open source',
    year: 2023,
    link: 'https://codesandbox.io/p/github/ChrisCoastal/focustrap-test/main?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfegprm0000e3b6lso1rq9qj%2522%253A%257B%2522key%2522%253A%2522clfegprm0000e3b6lso1rq9qj%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfegv45v00mz3b6ln37voyka%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfegv35n00ho3b6layzu8u5o%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfegprm0000e3b6lso1rq9qj%2522%252C%2522spacesOrder%2522%253A%255B%2522clfegprm0000e3b6lso1rq9qj%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D&workspaceId=6624ae69-76a1-4e06-a4af-4f9f128345fa',
    github: 'https://github.com/themesberg/flowbite-react/issues/647',
  },
};

export const contactInfo = {
  local: 'hello',
  domain: 'chriscoastal',
  tld: 'com',
};
