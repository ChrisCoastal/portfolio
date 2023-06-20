import React from 'react';
import type { FC } from 'react';

type TitleProps = {
  title: string;
  className?: string;
};

const Title: FC<TitleProps> = ({ title, className }) => {
  return (
    <h2 className={`${className} text-xl font-light tracking-wide `}>
      {title}
    </h2>
  );
};

export default Title;
