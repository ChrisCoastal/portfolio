export type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ProjectId =
  | 'cribbagemonster'
  | 'focustrap'
  | 'rainbeau'
  | 'studioa'
  | 'takefive'
  | 'tolowercase';

export type CursorTextOptions =
  | 'click'
  | 'github'
  | 'vitae'
  | 'link'
  | 'showCode'
  | 'hideCode'
  | 'prev'
  | 'next'
  | 'hello';

export type ImageData = { image: StaticImageData; alt: string };

export type CodeSnippet = { code: string; language: string; fileName: string };

export type ProjectElement = {
  title?: string;
  text?: string;
  media?: {
    image?: StaticImageData;
    video?: string;
    component?: React.ReactElement;
    alt: string;
  };
  snippets: CodeSnippet[];
  show?: boolean;
};

export type ProjectLinks = {
  site?: string;
  gitHub?: string;
  prevProject: ProjectId;
  nextProject: ProjectId;
};

export type Section = { title: string; text: string[] };

export type SectionsContent = Record<string, Section>;

export type ProjectList = { intro: string; items: string[] };

export type ProjectText = {
  lede: string[];
  upperBody: string[];
  lowerBody: string[];
  lists?: ProjectList[];
};

export type ProjectContent = {
  id: ProjectId;
  title: string;
  thumbnail: ImageData;
  headerImages: (ImageData & { zIndex: string })[];
  galleryImages: ImageData[];
  text: ProjectText;
  elements?: ProjectElement[];
  projectType: string;
  year: number;
  video?: string;
  links: ProjectLinks;
};
