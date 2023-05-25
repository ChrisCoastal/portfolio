'use client';
import React, { FC, useEffect } from 'react';
import { highlightAll } from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';

type CodeBlockProps = {
  language?: string;
  children?: React.ReactNode;
};

const CodeBlock: FC<CodeBlockProps> = ({
  language = 'language-javascript',
  children,
}) => {
  useEffect(() => {
    highlightAll();
  }, [children]);

  return (
    <pre>
      <code className="language-javascript">{children}</code>
    </pre>
  );
};

export default CodeBlock;
