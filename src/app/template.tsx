'use client';
import React, { FC, ReactNode } from 'react';

import Cursor from '@/components/UI/Cursor/Cursor';

type RootTemplateProps = {
  children: ReactNode;
};

const RootTemplate: FC<RootTemplateProps> = ({ children }) => {
  return (
    // TODO: fix cursor scroll
    <div className="overflow-x-clip">
      {/* <div className="pointer-events-none fixed h-screen w-screen bg-pink-300/40"> */}
      <Cursor />
      {/* </div> */}
      {children}
    </div>
  );
};

export default RootTemplate;
