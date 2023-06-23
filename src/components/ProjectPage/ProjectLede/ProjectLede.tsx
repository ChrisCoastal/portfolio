import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import Paragraph from '@/components/UI/Paragraph/Paragraph';

type ProjectLedeProps = {
  lede: string[];
  className?: string;
};

const ProjectLede: FC<ProjectLedeProps> = ({ lede, className }) => {
  return (
    <div className="flex justify-center">
      <Paragraph
        key={uuid()}
        className={`${className} row-start-2 md:col-start-1 lg:col-start-2`}
        text={lede}
      />
    </div>
  );
};

export default ProjectLede;
