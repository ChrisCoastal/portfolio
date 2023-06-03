import type { StaticImageData } from 'next/image';

import cribbageMonster_image from '/public/projects/cribbageMonster/images/cribbageMonster.jpg';
import cribbageMonster_image_1 from '/public/projects/cribbageMonster/images/cribbageMonster_1.jpg';
import cribbageMonster_image_2 from '/public/projects/cribbageMonster/images/cribbageMonster_2.jpg';
import cribbageMonster_image_3 from '/public/projects/cribbageMonster/images/cribbageMonster_3.jpg';
import cribbageMonster_image_4 from '/public/projects/cribbageMonster/images/cribbageMonster_4.jpg';
import focusTrap_image_1 from '/public/projects/focusTrap/images/focusTrap_1.jpg';
import focusTrap_image_2 from '/public/projects/focusTrap/images/focusTrap_2.jpg';
import focusTrap_image_3 from '/public/projects/focusTrap/images/focusTrap_3.jpg';
import rainbeau_image_1 from '/public/projects/rainbeau/images/rainbeau_1.jpg';
import rainbeau_image_2 from '/public/projects/rainbeau/images/rainbeau_2.jpg';
import rainbeau_image_3 from '/public/projects/rainbeau/images/rainbeau_3.jpg';
import rainbeau_image_4 from '/public/projects/rainbeau/images/rainbeau_4.jpg';
import studioA_image from '/public/projects/studioA/images/studioA.jpg';
import studioA_image_1 from '/public/projects/studioA/images/studioA_1.jpg';
import studioA_image_2 from '/public/projects/studioA/images/studioA_2.jpg';
import studioA_image_3 from '/public/projects/studioA/images/studioA_3.jpg';
import takeFive_image from '/public/projects/takeFive/images/takeFive.jpg';
import toLowercase_image_1 from '/public/projects/toLowercase/images/toLowercase_1.jpg';
import toLowercase_image_2 from '/public/projects/toLowercase/images/toLowercase_2.jpg';
import toLowercase_image_3 from '/public/projects/toLowercase/images/toLowercase_3.jpg';
import toLowercase_image_4 from '/public/projects/toLowercase/images/toLowercase_4.jpg';

export type ImageData = { image: StaticImageData; alt: string };
export type CodeSnippet = { code: string; language: string; fileName: string };
export type ProjectId =
  | 'cribbagemonster'
  | 'focustrap'
  | 'rainbeau'
  | 'studioa'
  | 'takefive'
  | 'tolowercase';

export type ProjectElement = {
  title: string;
  text?: string;
  media?: { image?: StaticImageData; video?: string; alt: string };
  snippets: CodeSnippet[];
  show?: boolean;
};

export type ProjectContent = {
  id: ProjectId;
  title: string;
  thumbnail: { image: StaticImageData; alt: string };
  headerImages: { image: StaticImageData; alt: string }[];
  galleryImages: { image: StaticImageData; alt: string }[];
  description: string;
  elements?: ProjectElement[];
  projectType: string;
  year: number;
  video?: { webm: string; mp4: string };
  links: {
    site?: string;
    gitHub?: string;
    prevProject: ProjectId;
    nextProject: ProjectId;
  };
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
  'gitHub',
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
    title: 'found out //',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
  },
  projectsSection: {
    title: 'checkout //',
    text: 'Here is a selection of projects that I have worked on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
  },
  aboutSection: {
    title: 'about //',
    text: '',
  },
  contactSection: {
    title: 'shout out // reach out',
    text: 'Have an idea or looking for help creating one? I am always interested in getting involved with new projects and creating nice stuff with inspiring individuals.',
  },
  leaveSection: {
    title: 'get out //',
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
    id: 'cribbagemonster',
    thumbnail: {
      image: cribbageMonster_image,
      alt: 'Cribbage Monster - Are you a Monster?',
    },
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
    video: {
      webm: '/projects/cribbageMonster/video/cribbageMonster-demo.webm',
      mp4: '/projects/cribbageMonster/video/cribbageMonster-demo.mp4',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    projectType: 'web',
    year: 2023,
    links: {
      site: 'https://cribbage.netlify.app/',
      gitHub: 'https://gitHub.com/ChrisCoastal/tolowercase',
      prevProject: 'focustrap',
      nextProject: 'rainbeau',
    },
  },
  rainbeau: {
    id: 'rainbeau',
    title: 'Rainbeau',
    thumbnail: { image: rainbeau_image_1, alt: 'a man with curly hair' },
    headerImages: [
      { image: rainbeau_image_1, alt: 'a man with curly hair' },
      { image: rainbeau_image_2, alt: 'a man with curly hair' },
      { image: rainbeau_image_3, alt: 'rainbeau app palette marker icon' },
    ],
    galleryImages: [
      { image: rainbeau_image_4, alt: 'a screenshot of rainbeau app' },
    ],
    video: {
      webm: '/projects/rainbeau/video/rainbeau-demo.webm',
      mp4: '/projects/rainbeau/video/rainbeau-demo.mp4',
    },
    elements: [
      {
        title: 'loading spinner',
        media: { video: '/projects/rainbeau/video/rainbeau-spinner', alt: '' },
        snippets: [
          {
            language: 'tsx',
            code: 'lorem ipsum dolor sit amet',
            fileName: 'file.tsx',
          },
        ],
      },
    ],
    description:
      'Rainbeau is a color theming tool that takes inspiration from the real world. Users can cycle through randomized images (fetched from Unsplash) to draw up custom color palettes based where markers are added and dragged over the image. The palette can be copied as individual colors in HSL, HEX, or RGB or formatted to be used with common styling libraries like Tailwind, Mui, or Styled Components.',
    projectType: 'web',
    year: 2022,
    links: {
      gitHub: 'https://gitHub.com/ChrisCoastal/rainbeau',
      prevProject: 'cribbagemonster',
      nextProject: 'tolowercase',
    },
  },
  toLowercase: {
    title: 'tolowercase',
    thumbnail: {
      image: toLowercase_image_2,
      alt: 'screenshot of toLowercase app',
    },
    headerImages: [
      { image: toLowercase_image_1, alt: 'toLowercase staircase logo' },
      { image: toLowercase_image_3, alt: 'toLowercase staircase logo' },
      { image: toLowercase_image_2, alt: 'screenshot of toLowercase app' },
    ],
    galleryImages: [
      { image: toLowercase_image_4, alt: 'screenshot of toLowercase app' },
    ],
    video: {
      webm: '/projects/toLowercase/video/toLowercase-demo.webm',
      mp4: '/projects/toLowercase/video/toLowercase-demo.mp4',
    },
    id: 'tolowercase',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    projectType: 'web',
    year: 2022,
    links: {
      site: 'https://tolowercase.xyz/',
      gitHub: 'https://gitHub.com/ChrisCoastal/tolowercase',
      prevProject: 'rainbeau',
      nextProject: 'studioa',
    },
  },
  studioA: {
    title: 'Studio A',
    id: 'studioa',
    thumbnail: { image: studioA_image, alt: 'screenshot of studioA app' },
    headerImages: [
      { image: studioA_image_1, alt: 'screenshot of studioA app' },
      { image: studioA_image_2, alt: 'screenshot of studioA app' },
      { image: studioA_image_3, alt: 'screenshot of studioA app' },
    ],
    galleryImages: [],
    video: {
      webm: '/projects/studioA/video/studioA-demo.webm',
      mp4: '/projects/studioA/video/studioA-demo.mp4',
    },

    projectType: 'web',
    year: 2022,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    links: {
      site: 'https://studioa.ca/',
      prevProject: 'tolowercase',
      nextProject: 'takefive',
    },
  },
  takefive: {
    title: 'Take Five',
    id: 'takefive',
    thumbnail: { image: takeFive_image, alt: 'Take Five wordmark' },
    headerImages: [
      { image: takeFive_image, alt: 'Take Five wordmark' },
      { image: takeFive_image, alt: 'Take Five wordmark' },
      { image: takeFive_image, alt: 'Take Five wordmark' },
    ],
    galleryImages: [],
    projectType: 'library',
    year: 2022,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    links: {
      gitHub: 'https://gitHub.com/kaisergame/kaiser-lib',
      prevProject: 'studioa',
      nextProject: 'focustrap',
    },
  },
  focusTrap: {
    title: 'Focus Trap',
    thumbnail: {
      image: focusTrap_image_2,
      alt: 'Admiral Ackbar gazing into the distance',
    },
    headerImages: [
      { image: focusTrap_image_1, alt: 'abstract squiggly light rings' },
      {
        image: focusTrap_image_2,
        alt: 'Admiral Ackbar gazing into the distance',
      },
      { image: focusTrap_image_3, alt: 'abstract concentric light rings' },
    ],
    galleryImages: [],
    id: 'focustrap',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    projectType: 'open source',
    year: 2023,
    links: {
      site: 'https://codesandbox.io/p/gitHub/ChrisCoastal/focustrap-test/main?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfegprm0000e3b6lso1rq9qj%2522%253A%257B%2522key%2522%253A%2522clfegprm0000e3b6lso1rq9qj%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfegv45v00mz3b6ln37voyka%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfegv35n00ho3b6layzu8u5o%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfegprm0000e3b6lso1rq9qj%2522%252C%2522spacesOrder%2522%253A%255B%2522clfegprm0000e3b6lso1rq9qj%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D&workspaceId=6624ae69-76a1-4e06-a4af-4f9f128345fa',
      gitHub: 'https://gitHub.com/themesberg/flowbite-react/issues/647',
      prevProject: 'takefive',
      nextProject: 'cribbagemonster',
    },
  },
};

export const contactInfo = {
  local: 'hello',
  domain: 'chriscoastal',
  tld: 'com',
};
