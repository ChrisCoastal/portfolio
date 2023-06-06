'use client';
import React, { FC } from 'react';

import useResizeWindow from '@/hooks/useResizeWindow';

type ProjectsLayoutProps = {
  children: React.ReactNode;
};

const ProjectsLayout: FC<ProjectsLayoutProps> = ({ children }) => {
  useResizeWindow();

  return (
    <>
      <div className="spacer h-36"></div>
      <div className="flex justify-center gap-32">
        <div className="mx-6 max-w-[72rem] sm:mx-10">{children}</div>
      </div>
      <div className="spacer h-36"></div>
    </>
  );
};

export default ProjectsLayout;
