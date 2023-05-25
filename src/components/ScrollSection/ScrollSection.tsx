import React, { FC } from 'react';

type ScrollSectionProps = {
  children?: React.ReactNode;
  className?: string;
};

const ScrollSection: FC<ScrollSectionProps> = ({ children, className }) => {
  return (
    <section className={`${className} mx-4 border-t border-stone-500`}>
      {children}
    </section>
  );
};

export default ScrollSection;
