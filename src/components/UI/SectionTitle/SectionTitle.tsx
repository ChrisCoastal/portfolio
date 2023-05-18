import React from 'react';
import type { FC } from 'react';

type SectionTitleProps = {
  text: string;
  className?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ text, className }) => {
  return (
    <h3 className={`${className} mb-24 text-xl font-light text-black`}>
      {text}
    </h3>
  );
};

export default SectionTitle;
