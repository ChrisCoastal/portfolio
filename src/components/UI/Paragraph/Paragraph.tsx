import React, { FC, ReactNode } from 'react';
import { v4 as uuid } from 'uuid';

type ParagraphProps = {
  text?: string[];
  className?: string;
};

const Paragraph: FC<ParagraphProps> = ({ className, text }) => {
  return (
    <>
      {text ? (
        <div
          className={`${className} flex flex-col items-center gap-4 text-justify sm:w-96`}
        >
          {text.map((paragraph) => (
            <p key={uuid()}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Paragraph;
