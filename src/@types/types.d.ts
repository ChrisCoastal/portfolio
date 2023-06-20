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
  | 'link'
  | 'showCode'
  | 'hideCode';

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

export type ProjectContent = {
  id: ProjectId;
  title: string;
  thumbnail: ImageData;
  headerImages: ImageData[];
  galleryImages: ImageData[];
  text: {
    lede: {
      first: string;
      second?: string;
    };
    description: string;
    body?: string[];
  };
  elements?: ProjectElement[];
  projectType: string;
  year: number;
  video?: string;
  links: ProjectLinks;
};
