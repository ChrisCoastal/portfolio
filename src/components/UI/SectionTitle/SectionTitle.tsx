import React from 'react';
import type { FC } from 'react';

type SectionTitleProps = {
  text: string;
  className?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ text, className }) => {
  return (
    <h3 className={`${className} text-8xl font-extrabold text-white`}>
      {text}
    </h3>
  );
};

export default SectionTitle;
