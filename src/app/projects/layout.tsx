'use client';
import React, { FC } from 'react';

import HomeButton from '@/components/UI/HomeButton/HomeButton';

type ProjectsLayoutProps = {
  children: React.ReactNode;
};

const ProjectsLayout: FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="mx-12 flex justify-center pb-12 pt-20 sm:pb-24">
        <div className="max-w-[72rem]">{children}</div>
      </div>
    </div>
  );
};

export default ProjectsLayout;
