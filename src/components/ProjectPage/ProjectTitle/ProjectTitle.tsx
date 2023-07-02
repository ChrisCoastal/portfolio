import React, { FC } from 'react';

import Title from '@/components/UI/Title/Title';

type ProjectTitleProps = {
  title: string;
  className?: string;
};

const ProjectTitle: FC<ProjectTitleProps> = ({ title, className }) => {
  return (
    <Title className={`${className} static z-20 mb-2 w-full !font-medium`}>
      {title}
    </Title>
  );
};

export default ProjectTitle;
