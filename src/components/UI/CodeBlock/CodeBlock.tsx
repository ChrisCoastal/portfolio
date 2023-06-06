'use client';
import React, { FC, useEffect } from 'react';
import { highlightAll } from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';

type CodeBlockProps = {
  children: React.ReactNode;
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
    <div className="bg-stone-800 p-8">
      {fileName ? <h4 className="mb-4 text-white">{fileName}</h4> : null}
      <pre
        className={`language-${language} !m-0 !rounded-none border border-stone-400/40 !bg-stone-800`}
      >
        <code
          className={`${className} language-${language} !m-0  !bg-stone-800 !text-sm`}
        >
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
