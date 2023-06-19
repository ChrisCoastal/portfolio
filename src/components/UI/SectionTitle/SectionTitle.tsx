import React from 'react';
import type { FC } from 'react';

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <h2
      className={`${className} static z-20 mb-12 w-full text-center text-xl font-light tracking-wide md:text-2xl`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
