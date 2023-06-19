'use client';
import React, { FC } from 'react';

import ProjectNav from '@/components/ProjectNav/ProjectNav';

type ProjectsLayoutProps = {
  children: React.ReactNode;
};

const ProjectsLayout: FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <div>
      <ProjectNav />
      <div className="mt-24 flex justify-center gap-32 sm:mt-36">
        <div className="mx-6 max-w-[72rem] sm:mx-8">{children}</div>
      </div>
      <div className="spacer h-16 sm:h-36" />
    </div>
  );
};

export default ProjectsLayout;
