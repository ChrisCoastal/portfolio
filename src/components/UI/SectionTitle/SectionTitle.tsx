import React from 'react';
import type { FC } from 'react';

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <h2
      className={`${className} w-full text-center text-xl font-light md:text-2xl`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
