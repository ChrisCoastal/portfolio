'use client';
import React, { FC, ReactNode } from 'react';

import Cursor from '@/components/UI/Cursor/Cursor';

type RootTemplateProps = {
  children: ReactNode;
};

const RootTemplate: FC<RootTemplateProps> = ({ children }) => {
  return (
    // TODO: fix cursor scroll
    <div>
      {/* <div className="pointer-events-none fixed"> */}
      <Cursor />
      {/* </div> */}
      {children}
    </div>
  );
};

export default RootTemplate;
