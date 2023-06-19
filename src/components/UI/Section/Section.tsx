import React, {
  FC,
  ForwardedRef,
  forwardRef,
  LegacyRef,
  ReactNode,
  RefObject,
} from 'react';

import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';

type SectionProps = {
  title?: string;
  className?: string;
  children?: ReactNode;
};

const Section = forwardRef(function Section(
  { title, className, children }: SectionProps,
  ref: LegacyRef<HTMLElement> | undefined
) {
  return (
    <section className={`${className} mx-4 mb-36 pt-10 md:mb-48`} ref={ref}>
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
});

export default Section;
