import type { StaticImageData } from 'next/image';

import apolloLogo from '@/assets/logos/apollo-logo.png';
import amplifyLogo from '@/assets/logos/aws-amplify-logo.png';
import bashLogo from '@/assets/logos/bash-logo.png';
import blenderLogo from '@/assets/logos/blender-logo.png';
import dockerLogo from '@/assets/logos/docker-logo.png';
import emotionLogo from '@/assets/logos/emotion-logo.png';
import figmaLogo from '@/assets/logos/figma-logo.png';
import gitLogo from '@/assets/logos/git-logo.png';
import gitHubLogo from '@/assets/logos/gitHub-logo.png';
import testingLibraryLogo from '@/assets/logos/testing-library-logo.png';
import cribbageMonster from '@/assets/projects/cribbage-monster/cribbageMonster.png';
import focusTrap from '@/assets/projects/focustrap/focustrap.jpg';
import rainbeau from '@/assets/projects/rainbeau/rainbeau.png';
import takefive from '@/assets/projects/takefive/takefive.jpg';
import lowercase from '@/assets/projects/tolowercase/tolowercase.png';

export type ProjectContent = {
  title: string;
  image: StaticImageData;
  alt: string;
  description: string;
  kind: string;
  year: number;
  link: string;
  github: string;
};

export const logos = {
  apolloLogo,
  amplifyLogo,
  bashLogo,
  blenderLogo,
  dockerLogo,
  emotionLogo,
  figmaLogo,
  gitLogo,
  gitHubLogo,
  testingLibraryLogo,
};

export const mainSections = {
  stackSection: {
    title: 'I will take that moment to review and rework.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
  },
  projectsSection: {
    title: 'I will find inspiration in accomplishment.',
    text: 'Here is a selection of projects that I have worked on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
  },
  aboutSection: {
    title: 'And remember that they are a part of a greater whole.',
    text: 'It is a gift to feel inspired - to feel that you are contributing to something that is ',
  },
};

export const projectContent: { [key: string]: ProjectContent } = {
  lowercase: {
    title: 'tolowercase',
    image: lowercase,
    alt: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    kind: 'web app',
    year: 2022,
    link: 'https://tolowercase.xyz/',
    github: 'https://github.com/ChrisCoastal/tolowercase',
  },
  cribbageMonster: {
    title: 'Cribbage Monster',
    image: cribbageMonster,
    alt: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    kind: 'web app',
    year: 2023,
    link: 'https://cribbage.netlify.app/',
    github: 'https://github.com/ChrisCoastal/tolowercase',
  },
  rainbeau: {
    title: 'Rainbeau',
    image: rainbeau,
    alt: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    kind: 'web app',
    year: 2022,
    link: 'https://tolowercase.xyz/',
    github: 'https://github.com/ChrisCoastal/tolowercase',
  },
  takefive: {
    title: 'Take Five',
    image: takefive,
    alt: '',
    kind: 'library',
    year: 2022,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    link: 'https://github.com/kaisergame/kaiser-lib',
    github: 'https://github.com/kaisergame/kaiser-lib',
  },
  focusTrap: {
    title: 'Focus Trap',
    image: focusTrap,
    alt: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae quas nulla necessitatibus repellat, asperiores odit et nihil ipsam laudantium, voluptate deleniti vero placeat mollitia molestiae fugit facere exercitationem laborum. -well tested, clean, sit in a space that bridges friendly UI and its translation into clean code',
    kind: 'open source',
    year: 2023,
    link: 'https://codesandbox.io/p/github/ChrisCoastal/focustrap-test/main?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfegprm0000e3b6lso1rq9qj%2522%253A%257B%2522key%2522%253A%2522clfegprm0000e3b6lso1rq9qj%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfegv45v00mz3b6ln37voyka%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfegv35n00ho3b6layzu8u5o%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfegprm0000e3b6lso1rq9qj%2522%252C%2522spacesOrder%2522%253A%255B%2522clfegprm0000e3b6lso1rq9qj%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D&workspaceId=6624ae69-76a1-4e06-a4af-4f9f128345fa',
    github:
      'https://github.com/themesberg/flowbite-react/issues/647#issuecomment-1515539479',
  },
};
