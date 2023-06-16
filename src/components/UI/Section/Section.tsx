import React, { FC, ReactNode } from 'react';

import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';

type SectionProps = {
  title?: string;
  className?: string;
  children?: ReactNode;
};

const Section: FC<SectionProps> = ({ title, className, children }) => {
  return (
    <section className={`${className}`}>
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
};

export default Section;
