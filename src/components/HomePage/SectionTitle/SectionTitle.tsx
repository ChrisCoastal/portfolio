import React from 'react';
import type { FC } from 'react';

import Title from '@/components/UI/Title/Title';

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <Title
      className={`${className} static z-20 mb-12 w-full text-center text-2xl`}
    >
      {title}
      <span className="text-base tracking-tighter sm:text-2xl">◆</span>
      ut
    </Title>
  );
};

export default SectionTitle;
