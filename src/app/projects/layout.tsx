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
      <div className="spacer h-36" />
      <div className="flex justify-center gap-32">
        <div className="mx-6 max-w-[72rem] sm:mx-8">{children}</div>
      </div>
      <div className="spacer h-36" />
    </div>
  );
};

export default ProjectsLayout;
