'use client';
import React, { FC } from 'react';

import HomeButton from '@/components/UI/HomeButton/HomeButton';

type ProjectsLayoutProps = {
  children: React.ReactNode;
};

const ProjectsLayout: FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <div className="bg-white">
      <HomeButton />
      <div className="flex justify-center pb-12 pt-20 sm:pb-24 sm:pt-28">
        <div className="mx-6 max-w-[72rem] sm:mx-8">{children}</div>
      </div>
    </div>
  );
};

export default ProjectsLayout;
