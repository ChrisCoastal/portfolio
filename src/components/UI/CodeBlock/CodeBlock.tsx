'use client';
import React, { FC, useEffect } from 'react';
import { highlightAll } from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';

type CodeBlockProps = {
  language?: string;
  children?: React.ReactNode;
};

const CodeBlock: FC<CodeBlockProps> = ({ language = 'tsx', children }) => {
  useEffect(() => {
    highlightAll();
  }, [children]);

  return (
    <pre className={`!rounded-none !bg-stone-800 language-${language}`}>
      <code className={`!bg-stone-800 !text-sm language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default CodeBlock;
