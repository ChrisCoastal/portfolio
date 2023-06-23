import type { ProjectContent } from '@/@types/types';

import cribbagemonster from './cribbagemonster/content';
import focustrap from './focustrap/content';
import rainbeau from './rainbeau/content';
import studioa from './studioa/content';
import takefive from './takefive/content';
import tolowercase from './tolowercase/content';

const projectContent: { [key: string]: ProjectContent } = {
  cribbagemonster,
  rainbeau,
  tolowercase,
  studioa,
  takefive,
  focustrap,
};

export default projectContent;
