import React, { FC, ReactNode } from 'react';
import { v4 as uuid } from 'uuid';

type ParagraphProps = {
  text: string[];
  className?: string;
};

const Paragraph: FC<ParagraphProps> = ({ className, text }) => {
  return (
    <div
      className={`${className} flex max-w-[32.5rem] flex-col gap-6 text-justify font-light`}
    >
      {text.map((paragraph) => (
        <p key={uuid()}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Paragraph;
