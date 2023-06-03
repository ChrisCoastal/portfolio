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
  language = 'tsx',
  fileName,
  className,
}) => {
  useEffect(() => {
    // Prismjs code highlighting
    highlightAll();
  }, [children]);

  return (
    <>
      {fileName ? (
        <h4 className="bg-stone-800 text-white">{fileName}</h4>
      ) : null}
      <pre className={`language-tsx !m-0 !rounded-none !bg-stone-800`}>
        <code
          className={`${className} language-tsx !m-0 !bg-stone-800 !text-sm`}
        >
          {`
          
          const CodeBlock: FC<CodeBlockProps> = ({
            children,
            language = 'tsx',
            fileName,
            className,
          }) => {
            useEffect(() => {
              // Prismjs code highlighting
              highlightAll();
            }, [children]);
          
            return (
              <></>);
          `}
          {/* {children} */}
        </code>
      </pre>
    </>
  );
};

export default CodeBlock;
