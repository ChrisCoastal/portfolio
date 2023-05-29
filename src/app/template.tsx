'use client';
import React, { FC, ReactNode } from 'react';

import Cursor from '@/components/UI/Cursor/Cursor';

type RootTemplateProps = {
  children: ReactNode;
};

const RootTemplate: FC<RootTemplateProps> = ({ children }) => {
  return (
    <>
      <Cursor />
      {children}
    </>
  );
};

export default RootTemplate;
