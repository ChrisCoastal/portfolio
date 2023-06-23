import React, { FC, ReactNode } from 'react';
import { v4 as uuid } from 'uuid';

type TextBlockProps = {
  text: JSX.Element[];
  className?: string;
};

const TextBlock: FC<TextBlockProps> = ({ className, text }) => {
  return (
    <div className={`${className} flex flex-col gap-4 sm:w-96`}>
      {text.map((text) => (
        <p key={uuid()}>{text}</p>
      ))}
    </div>
  );
};

export default TextBlock;
