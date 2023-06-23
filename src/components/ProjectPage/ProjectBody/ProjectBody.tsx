import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import Paragraph from '@/components/UI/Paragraph/Paragraph';
type ProjectBodyProps = {
  body: string[];
};

const ProjectBody: FC<ProjectBodyProps> = ({ body }) => {
  return (
    <div className="flex justify-center">
      <Paragraph key={uuid()} text={body} />
    </div>
  );
};

export default ProjectBody;
