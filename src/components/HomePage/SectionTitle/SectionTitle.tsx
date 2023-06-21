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
      className={`${className} static z-20 mb-12 w-full text-center md:text-2xl`}
      title={title}
    />
  );
};

export default SectionTitle;
