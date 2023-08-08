'use client';
import React, { FC, ReactNode, useEffect } from 'react';
import { highlightAll } from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';

type CodeBlockProps = {
  children?: ReactNode;
  language?: string;
  fileName?: string;
  className?: string;
};

const CodeBlock: FC<CodeBlockProps> = ({
  children,
  language = 'js',
  fileName,
  className,
}) => {
  useEffect(() => {
    // Prismjs code highlighting
    highlightAll();
  }, [children]);

  return (
    <div className="bg-stone-800">
      <div className="ml-2">
        {fileName ? (
          <h4 className="!text-xs text-white sm:!text-sm">{fileName}</h4>
        ) : null}
        <div
          className={`language-${language} invert-scrollbar !m-0 !rounded-none border border-stone-400/40 !bg-stone-800 text-sm`}
        >
          <code
            className={`${className} language-${language} !m-0 overflow-x-scroll !whitespace-pre !bg-stone-800 !text-2xs sm:!text-sm`}
          >
            {children}
          </code>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
