import React, { ReactNode } from 'react';
import type { FC } from 'react';

type TitleProps = {
  children: ReactNode;
  className?: string;
};

const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <h2 className={`${className} text-xl font-light tracking-wide `}>
      {children}
    </h2>
  );
};

export default Title;
